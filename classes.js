class Project{
    // type : 'mobile apps',...
    constructor(name,type,url,element){
     this.name = type;
     this.type = name;
     this.url = url;
     this.DOMelement = element;
    }

}



const _Project = Project;
export { _Project as Project };