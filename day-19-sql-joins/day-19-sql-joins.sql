-- 1. Create Database
CREATE DATABASE IF NOT EXISTS course_platform;
USE course_platform;

-- 2. Create Courses Table
CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100),
    duration VARCHAR(50),
    fee INT
);

-- Insert Courses
INSERT INTO courses (course_name, duration, fee) VALUES
('HTML & CSS','2 Months',5000),
('JavaScript','3 Months',7000),
('React','2 Months',8000),
('Node.js','3 Months',9000),
('MySQL','1 Month',4000);

-- 3. Create Students Table
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT
);

-- Insert Students
INSERT INTO students (name,email,age) VALUES
('Aman Sharma','aman@gmail.com',21),
('Riya Patel','riya@gmail.com',22),
('Kunal Pandey','kunal@gmail.com',20),
('Sneha Mehta','sneha@gmail.com',23),
('Rahul Singh','rahul@gmail.com',24),
('Priya Verma','priya@gmail.com',22),
('Arjun Nair','arjun@gmail.com',21),
('Neha Gupta','neha@gmail.com',20);

-- 4. Create Enrollments Table
CREATE TABLE enrollments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    enroll_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Insert Enrollment Data
INSERT INTO enrollments (student_id,course_id,enroll_date) VALUES
(1,1,'2025-01-01'),
(1,2,'2025-01-02'),
(2,3,'2025-01-05'),
(3,1,'2025-01-08'),
(4,4,'2025-01-09'),
(5,2,'2025-01-10'),
(6,5,'2025-01-11'),
(7,3,'2025-01-12');

-- 5. INNER JOIN
-- Show students with their courses
SELECT students.name, courses.course_name
FROM enrollments
INNER JOIN students 
ON enrollments.student_id = students.id
INNER JOIN courses 
ON enrollments.course_id = courses.id;

-- 6. LEFT JOIN
-- Show all students even if not enrolled
SELECT students.name, courses.course_name
FROM students
LEFT JOIN enrollments 
ON students.id = enrollments.student_id
LEFT JOIN courses 
ON enrollments.course_id = courses.id;

-- 7. Students enrolled in React
SELECT students.name, courses.course_name
FROM enrollments
INNER JOIN students 
ON enrollments.student_id = students.id
INNER JOIN courses 
ON enrollments.course_id = courses.id
WHERE courses.course_name = 'React';

-- 8. Count students per course
SELECT courses.course_name, COUNT(*) AS total_students
FROM enrollments
JOIN courses 
ON enrollments.course_id = courses.id
GROUP BY courses.course_name;

-- 9. Students enrolled in more than one course
SELECT students.name, COUNT(enrollments.course_id) AS course_count
FROM enrollments
JOIN students 
ON enrollments.student_id = students.id
GROUP BY students.name
HAVING COUNT(enrollments.course_id) > 1;

-- 10. Courses with no enrollments
SELECT courses.course_name
FROM courses
LEFT JOIN enrollments
ON courses.id = enrollments.course_id
WHERE enrollments.course_id IS NULL;