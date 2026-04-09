// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";
// import path from "path";

// dotenv.config({});

// const app = express();

// // middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:5173',
//     credentials:true
// }

// app.use(cors(corsOptions));

// const PORT = process.env.PORT || 3000;

// const_dirname = path.resolve();

// // api's
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);


// app.use(express.static(path.join(__dirname, "/frontend/dist")));
// app.get('*', (_, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// })

// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// })



import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();

/* ===== MIDDLEWARE ===== */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ===== CORS (ONLY LOCAL) ===== */
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,
  })
);

/* ===== API ROUTES ===== */
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

/* ===== START SERVER ===== */
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log(`✅ Server running on port ${PORT}`);
});