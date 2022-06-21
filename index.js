const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const aspNetUserRouter = require("./routes/aspNetUsers");

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/registerUser", aspNetUserRouter);

app.get("/", (req, res) => {
  res.send("HHello World");
});

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
