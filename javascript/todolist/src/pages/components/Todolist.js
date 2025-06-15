import Project from "./Project";

export default class TodoList {
    constructor() {
        this.projects = [];
   }
   setProjects(projects){
        this.projects = projects;
   }
   getProjects (){
        return this.projects;
   }
   getProject(nameOfProject){
       let a = this.getProjects().find(item => item.getName().toLowerCase() == nameOfProject.toLowerCase()); 
       return a;
   }
   add(name, description){
        this.projects.push(new Project(name, description));
   }
   remove(wantToRemoveItem){
        let numIndex;
        this.getProjects().forEach((project, index) =>{
            if (project.getName().toLowerCase() === wantToRemoveItem){
                numIndex = index;
            }
        });
        
        this.getProjects().splice(numIndex, 1);
   }


}