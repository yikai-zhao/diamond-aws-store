Diamond AWS Store

Diamond AWS Store is a production ready full stack e commerce web application for online diamond sales. The platform is designed to demonstrate cloud native deployment, scalable architecture, and modern web development practices. It is fully hosted on Amazon Web Services with integration for RDS relational database, making it suitable as a portfolio project and as a base for real world e commerce applications.

Project Overview

This project replicates the workflow of a professional online jewelry store. The system includes a product catalog, shopping cart, and checkout process. The application is optimized for performance using Next.js server side rendering and deployed to AWS EC2 with RDS for persistent storage. The goal is to provide a technically strong demonstration of building, deploying, and scaling a cloud hosted e commerce solution.

Key Features

Product catalog with item listings including name, description, price, and image

Shopping cart with add, remove, and quantity update functionality

Checkout page with order summary and simulated payment confirmation

Next.js server side rendering for performance and SEO optimization

AWS based hosting with EC2 and RDS, designed for reliability and uptime above 99 percent

CI CD pipeline with GitHub Actions for automated testing and deployment

Modular and extensible architecture for future feature expansion

Technology Stack

Frontend: Next.js, React, TypeScript, TailwindCSS
Backend: Node.js, Next.js API Routes
Database: AWS RDS with MySQL
Cloud and DevOps: AWS EC2, AWS RDS, Docker, GitHub Actions, CloudWatch

Local Setup

Clone the repository

git clone https://github.com/yikai-zhao/diamond-aws-store.git
cd diamond-aws-store


Install dependencies

npm install


Run development server

npm run dev


Open http://localhost:3000
 to view the application.

Deployment on AWS

The application is hosted on AWS with the following architecture:

EC2 instances for hosting the Next.js application

Docker for containerization and environment consistency

RDS for relational database storage with MySQL

CloudWatch for monitoring and logging

Auto Scaling Groups for high availability and fault tolerance

GitHub Actions for continuous integration and delivery pipeline

This setup is designed to showcase professional deployment practices with AWS cloud services.

Roadmap

Planned improvements include:

User authentication and profile management using AWS Cognito

Payment gateway integration with Stripe or PayPal

Persistent shopping cart and order history stored in RDS

Admin dashboard for product and inventory management

Advanced search and filtering for product catalog

Server side caching and performance tuning for large product datasets

Why This Project

Diamond AWS Store highlights practical skills for modern software engineering roles:

End to end web application development

Cloud infrastructure deployment and monitoring

Database integration and schema design

Scalable architecture and CI CD automation

Clear and professional documentation for recruiters and engineers

This repository is designed as a competitive portfolio project to demonstrate both technical depth and production readiness.

License

This project is licensed under the MIT License.
## Architecture

```mermaid
graph LR
    User[User: Web or Mobile] --> Frontend[Next.js Frontend]
    Frontend --> Backend[Node.js API - Express REST]
    Backend --> DB[(AWS RDS MySQL Master)]
    Backend --> Replica[(RDS Read Replica)]
    Backend --> Docker[Docker Container]
    Docker --> EC2[AWS EC2 Deployment Host]
    GitHub[GitHub Actions CI/CD] --> Docker
    GitHub --> EC2
    EC2 --> CloudWatch[AWS CloudWatch Monitoring and Logs]


