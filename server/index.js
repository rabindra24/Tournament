const express = require("express");
const cors = require("cors");
var mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3307,
  database: "tournament",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/register", (req, res) => {
  const user = req.body;
  const sql = `INSERT INTO users (username, password) VALUES ('${user.username}', '${user.password}');`;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    }

    console.log("1 Record recorded");
    res.json({ status: "success", user });
  });
});

app.get("/blog", (req, res) => {
  const sql = "SELECT * FROM blogs";

  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/blog/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM blogs WHERE BID = ${id}`;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    }
    res.send(result);
  });
});

app.get("/games", (req, res) => {
  const sql = `SELECT * FROM games`;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    }
    res.send(result);
  });
});

app.get("/game/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM games WHERE games.GID = ${id}`;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    }
    res.send(result);
  });
});

app.get("/team/", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT OID FROM team;`;
  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    }
    if (result.length > 0) {
      res.send({ status: "success", result });
    }
  });
});

app.post("/login", (req, res) => {
  const user = req.body;
  const sql = `SELECT * From users where username = '${user.username}' and password = '${user.password}';`;

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.json({
        status: "success",
        id: result[0].UID,
        name: result[0].username,
      });
    }
  });
});

app.get("/tournament/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM tournament Where tournament.GID = ${id}; `;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    }
    if (result.length > 0) {
      res.send({ status: "success", result });
    }
  });
});

app.get("/tournament", (req, res) => {
  const { OID } = req.query;
  const { TID } = req.query;
  console.log(OID);
  var sql = "";
  if (OID !== undefined || null) {
    sql = `SELECT * FROM tournament WHERE OID = ${OID}; `;
    // ;

    con.query(sql, (err, result) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        console.log(result);
        res.send({ status: "success", result });
      }
    });
  } else if (TID !== undefined || null) {
    // sql = `SELECT * FROM tournament WHERE TID = ${TID}; `;
    sql = `SELECT * FROM tournament Inner JOIN games on tournament.GID = games.GID  and TID = ${TID}`;
    console.log(sql);
    con.query(sql, (err, result) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        res.send({ status: "success", result });
      }
    });
  }
});

app.get("/filtertour", (req, res) => {
  const query = req.query;
  const id = req.query.id;

  var sql;
  if (query.action === "closed") {
    sql = `SELECT * FROM tournament WHERE T_end < CURDATE() and GID = ${id}; `;

    con.query(sql, (err, result) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        res.send({ status: "success", result });
      }
    });
  } else if (query.action === "upcomming") {
    sql = `SELECT * FROM tournament WHERE T_end > CURDATE() and GID = ${id}; `;
    con.query(sql, (err, result) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        res.send({ status: "success", result });
      }
    });
  } else if (query.action === "live") {
    sql = `SELECT * FROM tournament where GID = ${id}; `;
    con.query(sql, (err, result) => {
      if (err) {
        res.json({ status: "error" });
      } else {
        res.send({ status: "success", result });
      }
    });
  } else {
    sql = `SELECT * FROM tournament ; `;
    con.query(sql, (err, result) => {
      if (err) {
        res.json({ status: "error" });
      }
      if (result.length > 0) {
        res.send({ status: "success", result });
      }
    });
  }
});

app.post("/registration", (req, res) => {
  const user = req.body;

  const sql = ` INSERT INTO team ( UID, OID, T_name, Player1, Player2, Player3, Player4, Discord1, Discord2, Discord3, Discord4) VALUES ('${user[4].UID}',  '${user[5].OID}', '', '${user[0].name}', '${user[1].name}', '${user[2].name}', '${user[3].name}', '${user[0].discord}', '${user[1].discord}', '${user[2].discord}', '${user[3].discord}')`;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    }
    res.json({ status: "success", user });
  });
  console.log(sql);
});

app.get("/projects/:id", (req, res) => {
  const user = req.params.id;
  const sql = `SELECT * FROM projects WHERE OID = ${user};`;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      res.send({ status: "success", result });
    }
  });
});

app.post("/organise/create", (req, res) => {
  const user = req.body;
  const sql = `INSERT INTO projects (OID, P_name) VALUES (${user.OID},' ${user.name}');`;
  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      res.send({ status: "success", result });
    }
  });
});

// app.post('/tournament/create',(req,res)=>{
//   const data = req.body;
//   console.log(data)
//   const sql = `INSERT INTO tournament ( OID, T_name, T_discord, GID, T_start, T_end, Teams, PID) VALUES ('${data.OID}', '${data.name}', '${data.game}', '${data.team}', '${data.startDate}', '${data.endDate}', '25')`;
//   console.log(sql);
//   // con.query(sql, (err, result) => {
//   //   if (err) {
//   //     res.json({ status: "error" });
//   //   } else {
//   //     res.send({ status: "success", result });
//   //   }
//   // });
// })

app.post("/tournament/create", (req, res) => {
  const data = req.body;
  console.log(data);
  const sql = `INSERT INTO tournament ( OID, T_name, T_discord, GID, T_start, T_end, Teams,PID) VALUES ('${data.OID}', '${data.name}','', '${data.game}', '${data.startDate}', '${data.endDate}', '${data.team}',${data.PID})`;
  console.log(sql);
  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      res.send({ status: "success", result });
    }
  });
});

app.post("/tournament/update", (req, res) => {
  const data = req.body;
  console.log(data);
  // const sql = `INSERT INTO tournament ( OID, T_name, T_discord, GID, T_start, T_end, Teams) VALUES ('2', '${data.name}', '${data.game}', '', '${data.startDate}', '${data.endDate}', '${data.team}')`;
  const sql = `UPDATE tournament SET T_name = '${data.name}', T_discord = '', GID = '${data.game}', T_start = '${data.startDate}', T_end = '${data.endDate}', Teams = '${data.team}' WHERE tournament.TID = ${data.id};`;
  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      res.send({ status: "success", result });
    }
  });
});

app.post("/organise/register", (req, res) => {
  const data = req.body;
  const sql = `INSERT INTO organiser (O_name, O_discord, O_email, O_contact, O_password) VALUES ('${data.username}', '${data.discord}', '${data.email}', '${data.number}', '${data.password}')`;

  con.query(sql, (err, result) => {
    if (err) {
      res.json({ status: "error" });
    } else {
      res.send({ status: "success", result });
    }
  });
});

app.post("/organise/login", (req, res) => {
  const user = req.body;

  const sql = `SELECT * FROM organiser where O_name = '${user.username}' and O_password = '${user.password}';`;
  console.log(sql);

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.json({
        status: "success",
        result: result[0].OID,
      });
    }
  });
});

app.get("/organise/tournament", (req, res) => {
  const data = req.query;
  const sql = `SELECT * FROM tournament JOIN projects on tournament.PID = projects.PID WHERE tournament.OID = ${data.OID} AND tournament.PID = ${data.PID};`;
  console.log(sql);
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    if (result.length > 0) {
      res.json({
        status: "success",
        result,
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Server is started on port 3000");
});
