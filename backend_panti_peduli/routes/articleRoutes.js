import express from "express";
import {
  getArticle,
  getArticleById,
  addNewArticle,
  updateArticle,
  deleteArticle,
  getArticleByUserId,
  getArticleHome,
} from "../controllers/articleController.js";

const router = express.Router();

router.get("/articles", getArticle);
router.get("/articles/home", getArticleHome);
router.get("/articles/:id", getArticleById);
router.get("/articles/user/:userId", getArticleByUserId);
router.post("/articles", addNewArticle);
router.delete("/articles/:id", deleteArticle);
// Choose one, adapt to the needs
// router.put('/articles/:id', updateArticle);
router.patch("/articles/:id", updateArticle);

export default router;
