/* eslint-disable no-undef */
const express = require("express");
const fs = require("fs");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Multer for handling file uploads
const upload = multer({ dest: "uploads/" });

// Endpoint to handle form submission
app.post("/api/submit", upload.single("image"), (req, res) => {
    const { name, description, price } = req.body;
    const image = req.file ? req.file.path : null;

    // Load existing items from items.json
    fs.readFile("items.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading items.json:", err);
            return res.status(500).json({ error: "Unable to read file" });
        }

        // Parse the existing data
        let items = [];
        if (data) {
            items = JSON.parse(data);
        }

        // Append the new item
        const newItem = {
            id: Date.now(), // Unique ID
            name,
            description,
            price,
            image,
        };
        items.push(newItem);

        // Save the updated data back to items.json
        fs.writeFile("items.json", JSON.stringify(items, null, 2), (err) => {
            if (err) {
                console.error("Error writing to items.json:", err);
                return res.status(500).json({ error: "Unable to save item" });
            }

            return res.status(200).json({ message: "Item added successfully" });
        });
    });
});

// Start the server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
