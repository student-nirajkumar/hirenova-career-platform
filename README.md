# HireNova – Next-Gen Job Portal
A MERN stack application connecting fresh graduates with modern career opportunities.

HireNova is a comprehensive full-stack MERN (MongoDB, Express, React, Node) application connecting fresh graduates to modern job opportunities through efficient search and application workflows. It features secure user authentication, resume (PDF/ZIP) uploads, and advanced job filtering for candidates, while recruiters can manage companies, post jobs, and review applicants via an intuitive dashboard. The project emphasizes scalability, security, and a polished user experience.

Features
User Features
Account Management: Users can register and log in securely. Email verification and password reset functionality are implemented.
Job Search & Apply: Browse and filter job listings by title, skills, or location. View job details and apply by uploading a resume.
Profile Management: Manage a personal profile including bio, contact info, and a list of skills. Upload and preview resumes.
Resume Upload: Supports PDF and ZIP resume uploads. Files are stored via Cloudinary and served as browser-friendly links.
Recruiter Features
Company & Job Management: Recruiters can create and manage company profiles, and post, update, or delete job listings.
Applicant Tracking: View and manage the list of applicants for each job. Update application statuses (e.g., reviewed, accepted).
Dashboard: An overview dashboard for recruiters to track their companies, posted jobs, and application metrics.
Advanced Features
File Upload Integration: Multer handles file uploads on the backend. Cloudinary stores user images (profile pictures, company logos) and documents (resumes).
Email Notifications: Integrated Nodemailer for account verification and password reset emails.
State Management: Redux Toolkit is used for efficient state handling of user data, job listings, and applications.
Responsive UI & Animations: Built with Tailwind CSS and shadcn/ui components. Framer Motion adds smooth transitions and animations.
Role-Based Security: Middleware protects routes by checking JWT tokens and user roles, ensuring only authorized access to recruiter or candidate features.
Tech Stack
Frontend: React.js (Vite), Redux Toolkit, Tailwind CSS, shadcn/ui, Framer Motion.
Backend: Node.js, Express.js, MongoDB (Mongoose), JWT for authentication.
File Storage: Cloudinary (for images and document uploads).
Other Tools: Multer (file upload), Nodemailer (emails), Bcrypt (password hashing).

Project Structure

HireNova/
├── backend/
│   ├── controllers/    # Business logic (auth, users, jobs, companies)
│   ├── models/         # Mongoose schemas (User, Company, Job, Application)
│   ├── routes/         # Express routes (auth, users, jobs, companies, applications)
│   ├── middleware/     # Authentication and role-check middleware
│   └── utils/          # Utilities (email service, file upload helpers)
└── frontend/
    ├── src/
    │   ├── components/ # Reusable React components
    │   ├── pages/      # Page views (Home, Profile, JobList, RecruiterDashboard)
    │   ├── redux/      # Redux slices and store
    │   └── hooks/      # Custom React hooks (API requests, auth)
    └── public/         # Static assets (index.html, favicon)


Authentication & Authorization Flow
Registration & Verification: Users sign up with email/password. A verification email is sent to confirm the account before use.
Login & JWT: On login, the server issues a JWT stored in an HttpOnly cookie. This token authenticates future requests.
Protected Routes: Express middleware (authMiddleware) verifies the JWT for protected routes. Unauthorized requests are rejected.
Role-Based Access: Users have a role (either user or recruiter). Middleware checks this role to permit recruiter-specific actions (posting jobs, viewing applicants).
File Upload Handling
Multer & Cloudinary: Multer handles form-data uploads on the Node/Express backend. Uploaded files are sent to Cloudinary.
Resume Files: Candidates can upload resumes in PDF or ZIP format. These files are uploaded to Cloudinary using the image resource type with public access, allowing them to open in-browser.
Delivery Behavior: Using the image upload endpoint ensures PDFs open in the browser instead of forcing a download.


Before vs After: Cloudinary Upload

Scenario	Cloudinary Endpoint	Result
Raw upload (old approach)	/raw/upload	Files always downloaded
Image upload (new approach)	/image/upload	PDFs open in browser

Cloudinary Settings Checklist
Access mode: Public (allows URL access without authentication).
Strict transformations: Disabled.
Authenticated URLs: Disabled (use unsigned delivery).
Enable PDF/ZIP delivery in the Security settings.
Environment Variables
Create a .env file in the backend directory with the following variables:

MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
EMAIL_HOST=<smtp_host>
EMAIL_PORT=<smtp_port>
EMAIL_USER=<your_email_address>
EMAIL_PASS=<your_email_password>

Installation & Run
Clone the repository:

git clone https://github.com/yourusername/hirenova.git
cd hirenova

Setup Backend:

cd backend
npm install
npm run dev

The server will start on http://localhost:5000 by default.

Setup Frontend:

cd frontend
npm install
npm run dev

cd frontend
npm install
npm run dev

The React app will start on http://localhost:3000 by default.

Usage: Open your browser at http://localhost:3000. Register as a user or recruiter to begin.

Screenshots
(Add relevant screenshots here: e.g., login page, home page, job listings, profile page, recruiter dashboard.)

Key Concepts Implemented
MERN Architecture: Full separation of front-end and back-end with MongoDB database.
Authentication: JWT-based login with secure token storage (HttpOnly cookies).
Protected Routes: Middleware checks for valid auth token and proper user role.
Role-Based Auth: Candidates vs. recruiters have different access permissions.
File Uploads: Multer for receiving uploads, Cloudinary for storing images/docs.
State Management: Centralized state using Redux Toolkit.
Responsive Design: Tailwind CSS and shadcn/ui for clean, responsive layouts.
Clean Code: Modular structure with reusable components and clear separation of concerns.
Interview Q&A
Q: How are resumes uploaded and stored?
A: We use Multer on the backend to handle incoming files. Resumes (PDF/ZIP) are then uploaded to Cloudinary using the image type (public access). The returned URL is saved in the user profile in MongoDB, allowing the resume to be opened in-browser.

Q: How are skills handled and stored?
A: Skills are entered as a comma-separated string in the user profile form. We use JavaScript's split(',') to convert this string into an array of skills, which is saved in the database as an array.

Q: How is recruiter access controlled?
A: We implemented role-based authorization. Each user has a role (user or recruiter). Middleware functions check the user's role on protected routes; only recruiters can access routes for posting jobs or viewing applicants.

Q: Why use middleware for routing, and how does it help?
A: Middleware (like authMiddleware) runs before route handlers to validate requests. We use it to verify JWT tokens and enforce roles on protected routes. This keeps route logic clean and ensures security by centralizing access checks.

Q: What does the slice function do in this app?
A: The slice method is used on arrays or strings to extract a portion without modifying the original. For example, we might use slice to paginate job results or display a shortened preview of text.

Q: How are company logos stored?
A: Company logos are uploaded by recruiters using the same Multer+Cloudinary process as profile images. The files are stored in Cloudinary, and the URL returned is saved in the Company model in MongoDB.

Resume Bullet Points
Developed HireNova, a full-stack MERN job portal enabling users to search and apply for jobs and recruiters to manage postings.
Implemented secure authentication (JWT, email verification) and role-based authorization for candidates and recruiters.
Integrated Cloudinary and Multer for image and document uploads (profile pictures, company logos, PDF/ZIP resumes) with appropriate security settings.
Built RESTful APIs with Node/Express and MongoDB, and a responsive React frontend using Redux Toolkit and Tailwind CSS.
Created a recruiter dashboard for companies to post jobs, track applicants, and update application statuses in real time.
Deployment & Future Improvements
Deployment: Frontend can be deployed on Vercel or Netlify; backend on Heroku, AWS, or similar.
CI/CD: Set up automated testing and deployment pipelines (e.g., GitHub Actions) to streamline development.
Real-time Features: Add live notifications or chat (via WebSockets) between candidates and recruiters.
Enhanced Search & Analytics: Improve job search with full-text search, and add analytics dashboards for recruiter insights.
Scalability: Explore microservices or serverless functions for heavy tasks (file processing, emailing, etc.) to improve performance and maintainability.