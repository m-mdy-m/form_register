const express = require("express");
const routes = express.Router();
const db = require("./db.js");

routes.get("/all-user", (req, res) => {
  let get_user = `SELECT * FROM registration_form `;
  db.query(get_user, (err, result) => {
    if (err) {
      console.log("error for get req");
      res.send("err for get request");
    } else {
      res.send(JSON.stringify(result));
    }
  });
});
routes.post("/new-user", (req, res) => {
  const body = req.body;
  let create_user = `INSERT INTO registration_form  VALUES (NULL,"${body.first_name}","${body.user_name}","${body.email}","${body.password}")`;
  db.query(create_user, (err, result) => {
    if (err) {
      res.send("err for post");
      console.log("post error", err);
    } else {
      res.send("create 1 user");
      console.log("created 1 user");
    }
  });
});
routes.delete("/remove/:ID", (req, res) => {
  let id = req.params.ID;
  let delete_user = `DELETE FROM registration_form WHERE id = ${id}`;
  db.query(delete_user, (err, result) => {
    if (err) {
      console.log("err for delete",err);
      res.send("err for delete");
    } else {
      console.log(`${id} delete`);
      res.send(`${id} user delete`);
    }
  });
});
routes.put("/edit/:ID", (req, res) => {
  let id = req.params.ID;
  let body = req.body;
  let edit_user = `UPDATE registration_form SET first_name='${body.first_name}',user_name='${body.user_name}',email='${body.email}',password='${body.password}' WHERE id=${id}`;
db.query(edit_user,(err,result)=>{
    if (err) {
        console.log('err for edit',err);
        res.send('err for edit ')
    }else{
        console.log('1 user edit');
        res.send('1 user edited')
    }
})
});
module.exports = routes;
