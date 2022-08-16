const url = "http://localhost:3000";

let projectList = [];
async function getAllProjects() {
  if (projectList.length > 0) {
    return projectList;
  }
  let response = await fetch(`${url}/projects`);
  console.log(`${url}/projects`);
  if (response.ok) {
    let projectArray = await response.json();
    projectList = projectArray;
    console.log(projectList);
    return projectArray;
  }
}

async function generateTemplates() {
  const result = await getAllProjects();
  console.log("should load up first", result);

  const projectTemplates = result.map((project) => {
    let string = `
      <div class="img-container child">
        <img src="${project.img}" id="project-img" data-id="${project.id}" data-github="${project.github_link}" />
      </div>
      <h4 class="child" id="title">${project.title}</h4>
      <p class="child" id="languages">${project.language}</p>
      <p class="child" id="description">
      ${project.description}
      </p>

      `;

    return string;
  });

  return projectTemplates;
}

let currentProject = 0;
function test() {}

async function loadProjects(index) {
  const templates = await generateTemplates();

  if (index > templates.length - 1) {
    index = 0;
    currentProject = index;
  }
  if (index < 0) {
    index = templates.length - 1;
    currentProject = index;
  }
  const html = document.querySelector(".project-holder");
  html.innerHTML = templates[index];
}

function nextProject() {
  currentProject = currentProject + 1;
  loadProjects(currentProject);
}

function prevProject() {
  currentProject = currentProject - 1;
  loadProjects(currentProject);
}

loadProjects(currentProject);

//

// onclick select particular project
const projectContainer = document.querySelector(".project-holder");

let selectedProject;

// create git icon div
function createDetails(github_link) {
  const div = document.createElement("div");
  div.style.opacity = "0.5";
  //   div.style.position = "relative";
  div.classList.add("project_details");

  const container = document.querySelector(".project-holder");
  container.style.position = "relative";

  const link = document.createElement("a");
  const icon = document.createElement("i");
  icon.classList.add("fa-github");
  icon.classList.add("fa-brands");
  icon.classList.add("fa-7x");
  link.style.margin = "auto";

  link.href = github_link;

  link.appendChild(icon);
  div.appendChild(link);
  console.log(github_link);
  projectContainer.insertBefore(div, projectContainer.firstChild);
}

// insert into html

function getProject(index) {
  return projectList[index];
}

projectContainer.addEventListener("click", (e) => {
  const imgContainer = e.target;
  if (imgContainer.id === "project-img") {
    let selectedProject = e.target.getAttribute("data-id");
    let test = e.target.getAttribute("data-github");

    // const buttons = document.querySelectorAll(".buttons");

    // buttons.forEach((btn) => {
    //   btn.style.display = "absolute";
    // });

    const childnodes = document.querySelectorAll(".child");

    console.log(childnodes);

    // childnodes.forEach((node) => {
    //   node.style.position = "absolute";
    // });
    // console.log(test);

    //
    // const project = getProject(selectedProject);
    // console.log(project);
    createDetails(test);
  }
});
