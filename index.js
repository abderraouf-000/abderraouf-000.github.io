// projects section code 
import { Project } from "/classes.js";


let allProjects = document.querySelectorAll('.project');

let SmartDoorLockProject = new Project("Smart door lock system",["showAll"],'www.youtube.com',document.querySelector('.project1'));
let Elearning = new Project("Elearning Platform",["ShowAll",'Web dev'],'https://github.com/abderraouf-000/Taalum-Elearning-platform',document.querySelector('.project2'));
let Islamophobic = new Project("Islamophobic sppech detection",["ShowAll",'Machine learning'],'https://github.com/abderraouf-000/Taalum-Elearning-platform',document.querySelector('.project3'));

let projects = {'ShowAll':[SmartDoorLockProject,Elearning,Islamophobic],'Web dev':[Elearning], "Machine learning" : [Islamophobic]}

let projectsFilters = document.querySelectorAll('.projects .filter');

projectsFilters.forEach((filter)=>{

    filter.addEventListener("click",(event)=>{
 
    reinitialize();
        
    for(let project of projects[`${event.target.lastChild.textContent}`]){

        event.currentTarget.style.backgroundColor = 'black';
        event.currentTarget.children[0].style.color = 'white';
        project.DOMelement.style.visibility = 'visible';
        

    }

     
     
    })
})

let reinitialize = function(){

    projectsFilters.forEach((filter)=>{
        filter.style.backgroundColor = 'white';
        filter.children[0].style.color = 'black';
    })

    allProjects.forEach((project)=>{
        project.style.visibility = 'hidden';
        // filter.style.backgroundColor = 'white';
        // filter.children[0].style.color = 'black';
    })


}