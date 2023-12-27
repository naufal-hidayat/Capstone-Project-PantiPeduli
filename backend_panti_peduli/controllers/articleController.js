import db from "../database.js";

export const getArticle = (req, res) => {
  const sql = "SELECT * FROM article ORDER BY createdAt DESC";
  db.query(sql, (err, data) => {
    // return data or error msg
    return !err
      ? res.status(200).json(data)
      : res.status(500).json({ error: err.message });
  });
};

export const getArticleByUserId = (req, res) => {
  const userId = req.params.userId;
  const sql = "SELECT * FROM article WHERE user_id = ? ORDER BY createdAt DESC";
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const getArticleHome = (req, res) => {
  // const sql = "SELECT * FROM article ORDER BY createdAt DESC";
  const sql = "SELECT * FROM article ORDER BY createdAt DESC LIMIT 3";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(results);
    }
  });
};

export const getArticleById = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM article WHERE id=${id}`;
  db.query(sql, (err, data) => {
    if (err) {
      res.status(500).json({ error: err.message });
    }
    // return data or error msg
    return data.length > 0
      ? res.status(200).json(data)
      : res
          .status(404)
          .json({ message: "No article found with the given ID." });
  });
};

export const addNewArticle = (req, res) => {
  // req image
  const img = req.files.image;
  const imgName = `${Date.now()}-${img.name}`;
  img.mv(`./public/images/article/${imgName}`);

  // req body
  const { title, author, description, user_id } = req.body;

  // data/value to insert
  const data = {
    title,
    author,
    description,
    user_id: user_id,
    image: imgName,
  };

  const imgErrorMsg =
    !req.files || Object.keys(req.files).length === 0
      ? "No files were uploaded."
      : null;

  if (imgErrorMsg) {
    return res.status(400).json({ imgErrorMsg });
  } else {
    const sql = "INSERT INTO article SET ?";
    db.query(sql, data, (err, data) => {
      // return data or error msg
      return err
        ? res.status(500).json({ error: err.message })
        : res.status(200).json({
            message: "Data was added successfully.",
            insertId: data.insertId,
          });
    });
  }
};

export const updateArticle = (req, res) => {
  // req image
  const img = req.files ? req.files.image : null;
  const imgName = img ? `${Date.now()}-${img.name}` : null;

  // List of fields that you want to update
  const fieldsToUpdate = ["title", "author", "description", "content"];

  // data/value to insert
  const updatedData = {};

  // Check the fields in req.body
  fieldsToUpdate.forEach((field) => {
    if (req.body[field]) {
      updatedData[field] = req.body[field];
    }
  });

  if (imgName) {
    updatedData.image = imgName;
    img.mv(`./public/images/article/${imgName}`);
  }

  const id = req.params.id;
  const sql = "UPDATE article SET updatedAt = NOW(), ? WHERE id = ?";

  db.query(sql, [updatedData, id], (err, data) => {
    // return data or error msg
    return err
      ? res.status(500).json({ error: err.message })
      : res.status(200).json({
          message: "Data was changed successfully.",
          affectedRows: data.affectedRows,
        });
  });
};

export const deleteArticle = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM article WHERE id=${id}`;
  db.query(sql, (err, data) => {
    if (data.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No article found with the given ID." });
    } else {
      // return data or error msg
      return err
        ? res.status(500).json({ error: err.message })
        : res.status(200).json({
            message: "Article was deleted successfully.",
            affectedRows: data.affectedRows,
          });
    }
  });
};
