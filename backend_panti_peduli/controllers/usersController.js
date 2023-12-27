import db from "../database.js";

export function addUser(req, res) {
  const { id, username, email } = req.body;

  console.log(id, username, email);
  const data = {
    id,
    username,
    email,
  };

  const sql = "INSERT INTO users SET ?";
  db.query(sql, data, (err, data) => {
    // return data or error msg
    return err
      ? res.status(500).json({ error: err.message })
      : res.status(200).json({
          message: "User was added successfully.",
          insertId: data.insertId,
        });
  });
}
