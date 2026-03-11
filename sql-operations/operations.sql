CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    age INT,
    course VARCHAR(50),
    marks INT
);

INSERT INTO students (name, email, age, course, marks) VALUES 
('Rahul Sharma', 'rahul@test.com', 20, 'JavaScript', 85), 
('Priya Shah', 'priya@test.com', 21, 'React', 90), 
('Amit Patel', 'amit@test.com', 22, 'Node.js', 78), 
('Sneha Joshi', 'sneha@test.com', 19, 'CSS', 92), 
('Karan Mehta', 'karan@test.com', 23, 'MySQL', 75), 
('Riya Desai', 'riya@test.com', 20, 'React', 88), 
('Vikram Singh', 'vikram@test.com', 24, 'Node.js', 70), 
('Anjali Verma', 'anjali@test.com', 21, 'JavaScript', 95), 
('Arjun Nair', 'arjun@test.com', 22, 'MySQL', 80), 
('Neha Kapoor', 'neha@test.com', 20, 'CSS', 86);    -- adding the data

UPDATE students SET marks = 91 WHERE name = 'Rahul Sharma'; 
UPDATE students SET marks = marks + 5 WHERE course = 'React';    -- updating the data

DELETE FROM students WHERE id = 5; 
DELETE FROM students WHERE marks < 60;   -- removing the data

SELECT * FROM students ORDER BY marks DESC; 
SELECT * FROM students ORDER BY age ASC;    -- sorting the data

SELECT * FROM students ORDER BY marks DESC LIMIT 3; 
SELECT * FROM students LIMIT 3 OFFSET 3;    -- limiting the results

SELECT * FROM students WHERE name LIKE 'A%'; 
SELECT * FROM students WHERE email LIKE '%test%'; 
SELECT * FROM students WHERE name LIKE '%Sharma';     -- searching using like

SELECT * FROM students WHERE course = 'React' AND marks > 80; 
SELECT * FROM students WHERE age BETWEEN 20 AND 23;    -- using combine filtering

SELECT * FROM students WHERE marks > 85;    -- to show students with marks above 85

SELECT * FROM students ORDER BY marks DESC LIMIT 5;   -- to show top 5 students based on marks

SELECT course, COUNT(*) FROM students GROUP BY course;   -- to count students in course

SELECT * FROM students WHERE age BETWEEN 20 AND 22;  -- to show students between age 20 and 22

SELECT * FROM students WHERE name LIKE 'R%';   -- to show students whose name starts with R

-- I tested them on my local SQLite database and they all work as expected. You can run these queries in your SQL environment to see the results.