import feather from "feather-icons";
import "./style.css";
import data from "./data.json";
import html2pdf from "html-to-pdf-js";

function init() {
  setProfileData();
  setLinksData();
  setExperiences();
  feather.replace();
}
init();

function setProfileData() {
  const { fullName, title, bio, email, phone, address, brithDate, education } =
    data.profile;

  setDataToElement("full-name", fullName);
  setDataToElement("title", title);
  setDataToElement("bio", bio);
  setDataToElement("email", email);
  setDataToElement("phone", phone);
  setDataToElement("address", address);
  setDataToElement("brith-date", brithDate);
  setDataToElement("education", education);
}

function setLinksData() {
  const { links } = data;
  const ul = document.createElement("ul");

  for (let link of links) {
    if (!link.hidden) {
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="cv--contact--item">
          <i data-feather="${link.icon}"></i>
          <span>${link.url}</span>
        </div>
      `;

      ul.appendChild(li);
    }
  }

  document.getElementById("links").appendChild(ul);
}

function setExperiences() {
  const { experinces } = data;
  const div = document.createElement("div");

  for (let ex of experinces) {
    const exEl = document.createElement("div");
    exEl.className = "experience";
    const projects = ex.projects;

    exEl.innerHTML = `
        <span class="company">${ex.company}</span>  -
        <span class="role tex">${ex.role}</span>  
        <p class="desc">${ex.description}</p>  
    `;

    if (projects) {
      const ul = document.createElement("ul");
      const t = document.createElement("b");
      t.innerText = "Projects";
      exEl.appendChild(t);
      for (let project of projects) {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="project">
            <div class="name">${project.name}</div>
            <div class="kind">${project.kind}</div>
            <div class="url">${project.url}</div>
            <div class="stack">${project.techStack.map(
              (t) => `<span class="tag">${t}</span>`
            )}</div>
          </div> 
        `;
        ul.appendChild(li);
      }
      exEl.appendChild(ul);
    }

    div.appendChild(exEl);
  }

  document.getElementById("experiences").appendChild(div);
}

function setDataToElement(id, value) {
  document.getElementById(id).innerText = value;
}

function convertToPdf() {
  console.log(html2pdf);
  html2pdf(document.getElementById("cv"));
}
convertToPdf();
