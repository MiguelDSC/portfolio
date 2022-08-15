// fix nav bar
const toggleNav = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const navbar = document.getElementById("nav");
const links = document.querySelector(".links");
const scrollLinks = document.querySelectorAll(".scroll-link");

toggleNav.addEventListener("click", () => {
  const containerHeigth = linksContainer.getBoundingClientRect().height;
  const linksHeigth = links.getBoundingClientRect().height;

  if (containerHeigth == 0) {
    linksContainer.style.height = `${linksHeigth}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fix date
const dateHtml = document.getElementById("date");
dateHtml.innerText = new Date().getFullYear();

//back to top button
const topLink = document.querySelector(".top-link");

// add sticky to nav
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }

  const navHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// scroll to the correct section
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // get which link is pressed
    const id = e.currentTarget.getAttribute("href");
    const element = document.getElementById(id.slice(1));
    const navbarHeight = document
      .getElementById("nav")
      .getBoundingClientRect().height;
    const containerHeight = document
      .querySelector(".links-container")
      .getBoundingClientRect().height;
    const isFixed = navbar.classList.contains("fixed-nav");

    // element position minus nav, since nav covers the element
    let actualElementPosition = element.offsetTop - navbarHeight;

    if (!isFixed) {
      actualElementPosition = actualElementPosition - navbarHeight;
    }
    if (navbarHeight > 82) {
      actualElementPosition = actualElementPosition + containerHeight;
    }

    window.scrollTo({
      top: actualElementPosition,
      left: 0,
    });

    linksContainer.style.height = 0;
  });
});

// projects

const projects = [
  {
    title: "BadgeCraft Dashboard",
    language: "Python Flask",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    img: "project1_overview.png",
  },
  {
    title: "EWA",
    language: "javaScript Angluar",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
    img: "project1_overview.png",
  },
];

// get vars
const projectTemplates = [];

function getTemplates() {
  projects.forEach((project) => {
    let string = `
    <div class="img-container">
      <img src="${project.img}" id="project-img" alt="" />
    </div>
    <h4 id="title">${project.title}</h4>
    <p id="languages">${project.language}</p>
    <p id="description">
    ${project.description}
    </p>
    `;

    projectTemplates.push(string);
  });
}
let currentProject = 0;
function loadProjects(index) {
  if (index > projectTemplates.length - 1) {
    index = 0;
    currentProject = index;
  }
  if (index < 0) {
    index = projectTemplates.length - 1;
    currentProject = index;
  }
  const html = document.querySelector(".project-holder");
  html.innerHTML = projectTemplates[index];
}

function nextProject() {
  currentProject = currentProject + 1;
  loadProjects(currentProject);
}

function prevProject() {
  currentProject = currentProject - 1;
  loadProjects(currentProject);
}

getTemplates();
loadProjects(currentProject);

console.log(projectTemplates);

// contact
