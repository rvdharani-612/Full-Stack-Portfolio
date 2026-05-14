const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Project = require("./models/Project");

const app = express();



// =============================
// MIDDLEWARES
// =============================
app.use(cors());
app.use(express.json());



// =============================
// MONGODB CONNECTION
// =============================
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log("MongoDB Connection Error:", error);
});



// =============================
// HOME ROUTE
// =============================
app.get("/", (req, res) => {
    res.send("Backend Running");
});



// =============================
// CREATE PROJECT API
// =============================
app.post("/add", async (req, res) => {

    try {

        const newProject = new Project(req.body);

        await newProject.save();

        res.status(201).json(newProject);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error Creating Project"
        });

    }

});



// =============================
// FETCH ALL PROJECTS API
// =============================
app.get("/projects", async (req, res) => {

    try {

        const projects = await Project.find();

        res.json(projects);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error Fetching Projects"
        });

    }

});



// =============================
// SERVER START
// =============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});