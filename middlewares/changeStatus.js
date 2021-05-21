const db = require('../db');

function hasId(id) {
  return db.find((user) => user.id === parseInt(id));
}

function changeStatus(req, res, next) {
  const { status } = req.body;
  const { id } = req.params;

  if (typeof status !== 'boolean') {
    return res.status(400).send("status isn't a boolean");
  }

  if (hasId(id)) {
    db.map((user) => {
      if (user.id === parseInt(id)) {
        user.isActive = status;
      };
    });
    return res.status(200).send(db);
  }

  return res.status(400).json({ "error": "user isn't found" });
}

module.exports = changeStatus;
