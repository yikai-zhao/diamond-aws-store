Diamond AWS Store

Diamond AWS Store is a full stack e commerce web application focused on diamond sales. It is built with Next.js, Node.js, and deployed on AWS with support for RDS database integration. The project demonstrates scalable cloud deployment, professional frontend design, and robust backend architecture suitable for production level applications.

Project Overview

The goal of this project is to simulate a real world online diamond store. It includes a product catalog, shopping cart, and checkout flow. The application is designed to be lightweight yet extendable and is fully hosted on AWS, ensuring high availability and reliability.

Key Features

Product catalog page with diamond listings including name, description, image, and price

Shopping cart with add, remove, and quantity update functions

Checkout workflow with order summary and simulated payment process

Server side rendering with Next.js for optimized performance and SEO

AWS deployment with EC2 hosting, load balancing, and RDS database for persistent storage

CI/CD pipeline integration with GitHub Actions for automated testing and deployment

Technology Stack

Frontend: Next.js, React, TypeScript, TailwindCSS
Backend: Node.js, Next.js API Routes
Database: AWS RDS with MySQL support
Cloud and DevOps: AWS EC2, AWS RDS, Docker, GitHub Actions

Getting Started

Clone the repository

git clone https://github.com/yikai-zhao/diamond-aws-store.git
cd diamond-aws-store


Install dependencies

npm install


Run locally

npm run dev


Open http://localhost:3000
 to view the application in development mode.

Deployment on AWS

The application is hosted on AWS EC2 instances with Docker for containerization and RDS for relational database support. The setup is designed to achieve over 99 percent uptime with auto scaling groups and monitoring through AWS CloudWatch. The backend and frontend are integrated into a single Next.js application, making the deployment process efficient and reproducible. A CI/CD pipeline is implemented with GitHub Actions ensuring that each commit is tested and deployed automatically to AWS.

Future Improvements

User authentication and account management with AWS Cognito

Integration of real payment gateway such as Stripe or PayPal

Order history and tracking dashboard for customers

Admin panel for product and inventory management

Full migration from static data to AWS RDS with schema design and optimized queries

License

This project is open source under the MIT License.
