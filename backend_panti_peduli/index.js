import express from "express";
import fileUpload from "express-fileupload";
import profileRoute from "./routes/profileRoutes.js";
import articleRoute from "./routes/articleRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

import cors from "cors";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("public"));
app.use(profileRoute);
app.use(articleRoute);
app.use(usersRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Successfully connected to server" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
