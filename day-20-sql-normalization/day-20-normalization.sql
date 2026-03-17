-- create and use database
CREATE DATABASE library_db;
USE library_db;

-- books table
CREATE TABLE books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    category VARCHAR(100),
    isbn VARCHAR(50) UNIQUE,
    available_quantity INT DEFAULT 0
);

-- members table
CREATE TABLE members (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15) UNIQUE,
    join_date DATE NOT NULL
);

-- borrow records table
CREATE TABLE borrow_records (
    id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT,
    book_id INT,
    borrow_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR(20) DEFAULT 'BORROWED',
    FOREIGN KEY (member_id) REFERENCES members(id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
);

-- indexes
CREATE INDEX idx_email ON members(email);
CREATE INDEX idx_isbn ON books(isbn);

-- sample books
INSERT INTO books (title, author, category, isbn, available_quantity) VALUES
('Database System Concepts', 'Korth', 'Education', 'ISBN001', 5),
('Clean Code', 'Robert Martin', 'Programming', 'ISBN002', 3),
('Harry Potter', 'J.K. Rowling', 'Fantasy', 'ISBN003', 10);

-- sample members (Indian names)
INSERT INTO members (name, email, phone, join_date) VALUES
('Aarav Sharma', 'aarav@gmail.com', '9876543210', '2024-01-01'),
('Priya Verma', 'priya@gmail.com', '9123456780', '2024-02-01'),
('Rohan Gupta', 'rohan@gmail.com', '9988776655', '2024-03-01'),
('Sneha Iyer', 'sneha@gmail.com', '9090909090', '2024-04-01');

-- borrow data
INSERT INTO borrow_records (member_id, book_id, borrow_date, return_date, status) VALUES
(1, 2, '2024-03-01', NULL, 'BORROWED'),
(2, 1, '2024-03-02', '2024-03-10', 'RETURNED');