💼 Job Portal

A Full-Stack Recruitment Platform for Candidates & Recruiters

A full-stack job portal application built with Node.js, Express.js,
MongoDB, Mongoose, EJS, HTML, CSS, and JavaScript, providing separate
workflows for candidates and recruiters.

🚀 Overview

The project implements a complete job-search and recruitment workflow:

Candidates can create accounts, log in, browse jobs, search/filter
opportunities, save jobs, apply to jobs, and track their
applications.

Recruiters can create accounts, log in, post and manage jobs, view
applicants, review candidate profiles, and update application
decisions.

Authentication, session handling, password hashing, database
persistence, and security middleware are implemented on the backend.

✨ Key Features

👨‍💻 Candidate

Candidate registration and login

Secure password hashing with bcrypt

Browse available job listings

Search and filter jobs

View job details

Apply for jobs

Track submitted applications

Save jobs for later

Manage saved jobs

Candidate dashboard

🏢 Recruiter

Recruiter registration and login

Recruiter dashboard

Create job listings

Update job listings

Delete job listings

View applicants for jobs

View candidate information

Accept or reject applications

Manage recruiter-side job and application workflows

🛠️ Tech Stack

Backend: Node.js, Express.js, Mongoose
Database: MongoDB
Frontend: EJS, HTML5, CSS3, JavaScript
Authentication & Security: bcrypt, express-session, Helmet
Development Tools: Git, GitHub, VS Code, Postman

🏗️ Architecture

The application follows a server-side rendered web architecture with
separate workflows for candidates and recruiters.

                    JOB PORTAL
                        |
              +---------+---------+
              |                   |
          CANDIDATE           RECRUITER
              |                   |
        EJS / Browser       EJS / Browser
              |                   |
              +---------+---------+
                        |
                 Express.js Server
                        |
              Routes / Controllers
                        |
                    Mongoose
                        |
                     MongoDB

📁 Project Structure

Job-Portal/
│
├── frontend/
│   ├── views/
│   ├── public/
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
│
├── package.json
├── LICENSE
└── README.md

🔄 Application Flow

Candidate Flow

Register / Login
       ↓
Candidate Dashboard
       ↓
Browse / Search Jobs
       ↓
View Job Details
       ↓
Apply / Save Job
       ↓
Track Applications

Recruiter Flow

Register / Login
       ↓
Recruiter Dashboard
       ↓
Create / Manage Jobs
       ↓
View Applicants
       ↓
Review Candidate
       ↓
Accept / Reject Application

🔐 Security

The application implements:

Password hashing using bcrypt

Session-based authentication using express-session

Security headers using Helmet

MongoDB persistence through Mongoose

Environment variables for sensitive configuration

⚙️ Getting Started

Prerequisites

Make sure the following are installed:

Node.js

npm

MongoDB

Git

1. Clone the Repository

git clone https://github.com/ArchitGupta2004/Job-Portal.git
cd Job-Portal

2. Install Dependencies

cd backend
npm install

3. Environment Configuration

Create a .env file and configure the required environment variables.

Example:

MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

4. Run the Application

npm start

Then open the application using the local URL configured by the server.

💡 What I Built

This project was built to understand how a real recruitment platform
works from both sides of the hiring process.

Instead of implementing only basic job listings, I connected the
complete workflow between candidates, recruiters, jobs, applications,
saved jobs, and application statuses.

A recruiter can create a job, a candidate can discover and apply for it,
and the recruiter can subsequently review the candidate and update the
application's decision.

🧠 Biggest Engineering Challenge

The biggest challenge was connecting the candidate and recruiter
workflows while keeping jobs, applications, saved jobs, and
application statuses synchronized between the server and MongoDB.

This required coordinating:

Routes

Controllers

Database models

Sessions

Forms

Server-rendered views

Application state

📚 Key Learning Outcomes

Full-stack web application development

Node.js backend development

Express.js

MongoDB database integration

Mongoose

Authentication and session management

Password security

Candidate and recruiter role-based workflows

CRUD operations

Server-side rendering with EJS

Database-driven application development

Debugging and troubleshooting

Git and GitHub based development

🔮 Future Improvements

Some potential improvements include:

Resume upload and parsing

Email notifications

Application status notifications

Advanced job recommendations

Pagination for job listings and applicants

Automated testing

Improved validation and authorization

Production deployment

CI/CD pipeline

Recruiter analytics dashboard

📸 Screenshots

Screenshots can be added here to showcase:

Candidate Dashboard

Job Search

Job Details

Saved Jobs

Application Tracking

Recruiter Dashboard

Job Management

Applicant Management

🎯 Project Highlights

Area                Implementation

Frontend            EJS, HTML5, CSS3, JavaScript
Backend             Node.js, Express.js
Database            MongoDB
ODM                 Mongoose
Authentication      Express Session
Password Security   bcrypt
Security            Helmet
Architecture        Client → Server → Database
User Roles          Candidate & Recruiter

👨‍💻 Author

Archit Gupta

B.Tech Computer Science
GLA University

GitHub:
https://github.com/ArchitGupta2004/Job-Portal

📄 License

This project is available under the repository's existing license.
