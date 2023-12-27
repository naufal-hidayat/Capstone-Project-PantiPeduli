import db from "../database.js";

export const getProfile = (req, res) => {
  const sql = "SELECT * FROM profile";
  db.query(sql, (err, data) => {
    // return data or error msg
    return !err
      ? res.status(200).json(data)
      : res.status(500).json({ error: err.message });
  });
};

export const getProfileById = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM profile WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    // return data or error msg
    return data.length > 0
      ? res.status(200).json(data)
      : res
          .status(404)
          .json({ message: "No profile found with the given ID." });
  });
};

export const getProfileByUserId = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM profile WHERE user_id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    // return data or error msg
    return data.length > 0
      ? res.status(200).json(data)
      : res
          .status(404)
          .json({ message: "No profile found with the given ID." });
  });
};

export const addNewProfile = (req, res) => {
  // req image
  const img = req.files.image;
  const imgName = `${Date.now()}-${img.name}`;
  img.mv(`./public/images/profile/${imgName}`);

  // req body
  const {
    nama_panti,
    notelp_panti,
    nama_pengurus,
    nama_pemilik,
    notelp_pemilik,
    deskripsi_panti,
    alamat_panti,
    provinsi,
    kabupaten,
    kecamatan,
    program_panti,
    deskripsi_program,
    kebutuhan_panti,
    deskripsi_kebutuhan,
    jumlah_pengurus,
    jumlah_anaklaki,
    jumlah_anakpr,
    jumlah_anak,
    user_id,
  } = req.body;

  // data/value to insert
  const data = {
    nama_panti,
    notelp_panti,
    nama_pengurus,
    nama_pemilik,
    notelp_pemilik,
    deskripsi_panti,
    alamat_panti,
    provinsi,
    kabupaten,
    kecamatan,
    program_panti,
    deskripsi_program,
    kebutuhan_panti,
    deskripsi_kebutuhan,
    jumlah_pengurus,
    jumlah_anaklaki,
    jumlah_anakpr,
    jumlah_anak,
    user_id,
    image: imgName,
  };

  const imgErrorMsg =
    !req.files || Object.keys(req.files).length === 0
      ? "No files were uploaded."
      : null;

  if (imgErrorMsg) {
    return res.status(400).json({ imgErrorMsg });
  } else {
    const sql = "INSERT INTO profile SET ?";
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

export const updateProfile = (req, res) => {
  // req image
  const img = req.files ? req.files.image : null;
  const imgName = img ? `${Date.now()}-${img.name}` : null;

  // List of fields that you want to update
  const fieldsToUpdate = [
    "nama_panti",
    "notelp_panti",
    "nama_pengurus",
    "nama_pemilik",
    "notelp_pemilik",
    "deskripsi_panti",
    "alamat_panti",
    "provinsi",
    "kabupaten",
    "kecamatan",
    "program_panti",
    "deskripsi_program",
    "kebutuhan_panti",
    "deskripsi_kebutuhan",
    "jumlah_pengurus",
    "jumlah_anaklaki",
    "jumlah_anakpr",
    "jumlah_anak",
  ];

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
    img.mv(`./public/images/profile/${imgName}`);
  }

  const id = req.params.id;
  const sql = "UPDATE profile SET updatedAt = NOW(), ? WHERE id = ?";

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

export const deleteProfile = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM profile WHERE id=${id}`;
  db.query(sql, (err, data) => {
    if (data.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "No profile found with the given ID." });
    } else {
      // return data or error msg
      return err
        ? res.status(500).json({ error: err.message })
        : res.status(200).json({
            message: "Profile was deleted successfully.",
            affectedRows: data.affectedRows,
          });
    }
  });
};

// export const addCertificate = (req, res) => {
//   const img = req.files.image;
//   const imgName = `${Date.now()}-${img.name}`;
//   img.mv(`./public/images/certificate/${imgName}`);

//   const userId = req.params.userId;

//   const data = {
//     sertifikat_panti: imgName,
//     user_id: userId,
//   };

//   const imgErrorMsg =
//     !req.files || Object.keys(req.files).length === 0
//       ? "No files were uploaded."
//       : null;

//   if (imgErrorMsg) {
//     return res.status(400).json({ imgErrorMsg });
//   } else {
//     const sql = "UPDATE profile SET sertifikat_panti = ? WHERE user_id = ?";
//     db.query(sql, data, (err, result) => {
//       // return data or error msg
//       return err
//         ? res.status(500).json({ error: err.message })
//         : res.status(200).json({
//             message: "Data was updated successfully.",
//             affectedRows: result.affectedRows,
//           });
//     });
//   }
// };

export const addCertificate = (req, res) => {
  const img = req.files.image;
  const imgName = `${Date.now()}-${img.name}`;
  img.mv(`./public/images/certificate/${imgName}`);

  const userId = req.params.userId;

  const data = [imgName, userId]; // Use an array for the values

  const imgErrorMsg =
    !req.files || Object.keys(req.files).length === 0
      ? "No files were uploaded."
      : null;

  if (imgErrorMsg) {
    return res.status(400).json({ imgErrorMsg });
  } else {
    const sql = "UPDATE profile SET sertifikat_panti = ? WHERE user_id = ?";
    db.query(sql, data, (err, result) => {
      // return data or error msg
      return err
        ? res.status(500).json({ error: err.message })
        : res.status(200).json({
            message: "Data was updated successfully.",
            affectedRows: result.affectedRows,
          });
    });
  }
};

export const getPorfileByLoc = (req, res) => {
  const { lokasi } = req.query;

  if (lokasi === "") {
    const sql = "SELECT * FROM profile";
    db.query(sql, (err, data) => {
      // return data or error msg
      return !err
        ? res.status(200).json(data)
        : res.status(500).json({ error: err.message });
    });
  } else {
    // Menggunakan parameterized query untuk mencegah SQL injection
    const sql = "SELECT * FROM profile WHERE kabupaten = ?";

    db.query(sql, [lokasi], (err, data) => {
      // return data or error msg
      return !err
        ? res.status(200).json(data)
        : res.status(500).json({ error: err.message });
    });
  }
};
