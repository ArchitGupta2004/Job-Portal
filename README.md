Job Portal

A full-stack job portal application built with Node.js, Express.js, MongoDB, Mongoose, EJS, HTML, CSS, and JavaScript. The application provides separate candidate and recruiter workflows for managing job listings and applications.

Overview

The project implements a complete job-search and recruitment workflow:

Candidates can create accounts, log in, browse jobs, search/filter opportunities, save jobs, apply to jobs, and track their applications.

Recruiters can create accounts, log in, post and manage jobs, view applicants, review candidate profiles, and update application decisions.

Authentication, session handling, password hashing, database persistence, and basic security middleware are handled on the backend.

Key Features

Candidate

Candidate registration and login

Secure password hashing with bcrypt

Browse available job listings

Search and filter jobs

View job details

Apply for jobs

Track submitted applications

Save jobs for later

Manage saved jobs

Candidate profile/dashboard

Recruiter

Recruiter registration and login

Recruiter dashboard

Create job listings

Update and delete posted jobs

View applicants for jobs

View candidate information

Accept or reject applications

Manage recruiter-side job/application workflows

Tech Stack

Backend

Node.js

Express.js

Mongoose

Database

MongoDB

Frontend

EJS

HTML5

CSS3

JavaScript

Authentication & Security

bcrypt

express-session

Helmet

Development Tools

Git

GitHub

VS Code

Architecture

The application follows a server-side rendered web architecture with separate areas for candidates and recruiters.

                    Job Portal
                        |
              +---------+---------+
              |                   |
          Candidate           Recruiter
              |                   |
        EJS / Browser       EJS / Browser
              |                   |
              +---------+---------+
                        |
                 Express.js Server
                        |
              Controllers / Routes
                        |
                    Mongoose
                        |
                    MongoDB

Project Structure

Job-Portal/
├── frontend/
│   ├── views/
│   ├── public/
│   └── ...
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── package.json
└── README.md

The exact folders may vary slightly depending on the current repository structure.

Application Flow

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

Security

The backend includes:

Password hashing using bcrypt

Session-based authentication using express-session

Security headers using Helmet

MongoDB persistence through Mongoose

Sensitive credentials and environment-specific configuration should be kept outside the repository using environment variables.

Getting Started

Prerequisites

Make sure the following are installed:

Node.js

npm

MongoDB

Git

Clone the Repository

git clone https://github.com/ArchitGupta2004/Job-Portal.git
cd Job-Portal

Install Dependencies

Install the dependencies required by the backend:

cd backend
npm install

If the frontend has its own package configuration, install its dependencies from the frontend directory as well.

Environment Configuration

Create the required environment configuration for your local setup.

Example:

MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret

Use the variable names required by the current backend configuration.

Run the Application

Start the backend using the project's configured start command.

npm start

Then open the application in your browser using the local URL configured by the server.

What I Built

This project gave me hands-on experience building a recruitment workflow from both sides of a hiring platform.

The main engineering challenge was keeping the candidate and recruiter workflows connected: a recruiter can create a job, a candidate can apply or save it, and the recruiter can subsequently review that application and update its status.

This required coordinating routes, controllers, database models, sessions, and server-rendered views across the application.

Key Learning Outcomes

Full-stack web application development

Node.js and Express.js backend development

REST-style route and controller design

MongoDB database integration with Mongoose

Authentication and session management

Password security

Candidate and recruiter role-based workflows

CRUD operations

Form handling and server-side rendering with EJS

Debugging and integrating frontend and backend components

Git and GitHub based development

Future Improvements

Possible next improvements include:

REST API layer for external clients

Resume upload and parsing

Email notifications

Advanced job recommendations

Pagination for job listings and applicants

Automated testing

Improved validation and error handling

Production deployment and CI/CD

Recruiter analytics dashboard

Candidate application status notifications

Author

Archit Gupta

B.Tech Computer Science
GLA University

GitHub: https://github.com/ArchitGupta2004

License
This project is available under the repository's existing license.
