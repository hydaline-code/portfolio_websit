const projects = [
  {
    img:'img/project-4.jpg',
  },
  {
    img:'img/project-2.jpg',
  },
  {
    img:'img/project-3.jpg',
  },
  {
    img:'img/project-4.jpg',
  },
  {
    img:'img/project-5.jpg',
  },
  {
    img:'img/project-6.jpg',
  },
];

const pro = document.querySelector('.projects')
const proS = document.querySelector('.projects_bio-image');
const title = document.createElement('h1');
title.classList.add('text-secondary');
proS.appendChild(title);
title.textContent='Some Projects Accomplished'

const project = document.createElement('div');
project.classList.add('projects_items');
pro.appendChild(project);

projects.forEach((image) => {

const projitems = document.createElement('div');
projitems.classList.add('projects_item');
project.appendChild(projitems);

const imgproj = document.createElement('img');
projitems.appendChild(imgproj);
imgproj.setAttribute('alt', 'pictureview')
imgproj.src = image.img;

const probtn = document.createElement('div');
probtn.classList.add('projects_btns');
projitems.appendChild(probtn);

const btnlink = document.createElement('a');
btnlink.setAttribute('href','#!');
btnlink.classList.add('projects_btn');
probtn.appendChild(btnlink);

btnlink.innerHTML= ('<i class="fas fa-eye"></i>');
const alink = document.createTextNode('   Preview');
btnlink.appendChild(alink); 

const btnlink1 = document.createElement('a');
btnlink1.innerHTML= ('  <i class="fab fa-github"></i>');
btnlink1.setAttribute('href','#!');
btnlink1.classList.add('projects_btn');
probtn.appendChild(btnlink1);

const alink1 = document.createTextNode('   Github');
btnlink1.appendChild(alink1); 

});



