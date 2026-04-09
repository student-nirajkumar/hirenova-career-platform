// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// // shared
// import Navbar from './components/shared/Navbar'

// // auth
// import Login from './components/auth/Login'
// import Signup from './components/auth/Signup'
// import VerifyEmail from './components/auth/VerifyEmail'
// import ForgotPassword from './components/auth/ForgotPassword'
// import ResetPassword from './components/auth/ResetPassword'

// // user pages
// import Home from './components/Home'
// import Jobs from './components/Jobs'
// import Browse from './components/Browse'
// import Profile from './components/Profile'
// import JobDescription from './components/JobDescription'

// // admin
// import Companies from './components/admin/Companies'
// import CompanyCreate from './components/admin/CompanyCreate'
// import CompanySetup from './components/admin/CompanySetup'
// import AdminJobs from "./components/admin/AdminJobs"
// import PostJob from './components/admin/PostJob'
// import Applicants from './components/admin/Applicants'
// import ProtectedRoute from './components/admin/ProtectedRoute'


// const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },

//   // 🔐 AUTH ROUTES
//   {
//     path: '/login',
//     element: <Login />
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   },
//   {
//     path: '/verify-email/:token',
//     element: <VerifyEmail />
//   },
//   {
//     path: '/forgot-password',
//     element: <ForgotPassword />
//   },
//   {
//     path: '/reset-password/:token',
//     element: <ResetPassword />
//   },

//   // 👤 USER ROUTES
//   {
//     path: "/jobs",
//     element: <Jobs />
//   },
//   {
//     path: "/description/:id",
//     element: <JobDescription />
//   },
//   {
//     path: "/browse",
//     element: <Browse />
//   },
//   {
//     path: "/profile",
//     element: <Profile />
//   },

//   // 🛠️ ADMIN ROUTES
//   {
//     path: "/admin/companies",
//     element: (
//       <ProtectedRoute>
//         <Companies />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: "/admin/companies/create",
//     element: (
//       <ProtectedRoute>
//         <CompanyCreate />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: "/admin/companies/:id",
//     element: (
//       <ProtectedRoute>
//         <CompanySetup />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: "/admin/jobs",
//     element: (
//       <ProtectedRoute>
//         <AdminJobs />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: "/admin/jobs/create",
//     element: (
//       <ProtectedRoute>
//         <PostJob />
//       </ProtectedRoute>
//     )
//   },
//   {
//     path: "/admin/jobs/:id/applicants",
//     element: (
//       <ProtectedRoute>
//         <Applicants />
//       </ProtectedRoute>
//     )
//   },
//   {
//   path: "/admin/jobs/:id",   // ✅ ADD THIS
//   element: (
//     <ProtectedRoute>
//       <PostJob />
//     </ProtectedRoute>
//   )
// }

// ])

// function App() {
//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   )
// }

// export default App


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// auth
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import VerifyEmail from './components/auth/VerifyEmail'
import ForgotPassword from './components/auth/ForgotPassword'
import ResetPassword from './components/auth/ResetPassword'

// user pages
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'

// admin
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs"
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'

const appRouter = createBrowserRouter([

  // HOME
  {
    path: '/',
    element: <Home />
  },

  // AUTH
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/verify-email/:token',
    element: <VerifyEmail />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/reset-password/:token',
    element: <ResetPassword />
  },

  // USER
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },

  // ================= ADMIN =================

  {
    path: "/admin/companies",
    element: (
      <ProtectedRoute>
        <Companies />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/companies/create",
    element: (
      <ProtectedRoute>
        <CompanyCreate />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/companies/:id",
    element: (
      <ProtectedRoute>
        <CompanySetup />
      </ProtectedRoute>
    )
  },

  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute>
        <AdminJobs />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/jobs/create",
    element: (
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    )
  },

  // 🔥 IMPORTANT ORDER (DON'T CHANGE)
  {
    path: "/admin/jobs/:id/applicants",
    element: (
      <ProtectedRoute>
        <Applicants />
      </ProtectedRoute>
    )
  },
  {
    path: "/admin/jobs/:id",
    element: (
      <ProtectedRoute>
        <PostJob />
      </ProtectedRoute>
    )
  }

]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App;