const express = require("express");
const fs = require("fs/promises");
const cors = require("cors");

const app = express();
app.use(cors());

app.listen(3000, () => {
  console.log("app has started to listen on port 3000!");
});

const projects = [
  {
    id: 1,
    title: "BadgeCraft Dashboard",
    language: "Python Flask",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    img: "./media/project1_overview.png",
    github_link: "https://github.com/MiguelDSC/portfolio",
  },
  {
    id: 2,
    title: "EWA",
    language: "javaScript Angluar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    img: "./media/project1_overview.png",
    github_link: "https://github.com/MiguelDSC/portfolio",
  },
];

app.get("/projects", (req, res) => {
  console.log("got projects request");
  res.send(projects);
});
