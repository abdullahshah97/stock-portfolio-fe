-- schema.sql

-- Create the database
CREATE SCHEMA IF NOT EXISTS first_db;

-- Switch to the database
USE first_db;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Insert rows into the users table
INSERT INTO users (username, email) VALUES
  ('user1', 'user1@example.com'),
  ('user2', 'user2@example.com'),
  ('user3', 'user3@example.com');