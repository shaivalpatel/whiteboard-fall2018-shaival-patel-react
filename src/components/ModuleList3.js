import React from 'react'
import ModuleListItem from "./ModuleListItem";
import CourseService from "../services/CourseService";

export default class ModuleList3 extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            newModule:
                {
                    title: '',
                    lessons:[]
                }
            ,
            modules: this.props.modules,
            lessons: this.props.modules.lessons,
            courseId : this.props.courseId
        }
    }

    formChanged = (event) => {
        this.setState({
            newModule:
                {
                    title: event.target.value,
                    lessons:[]
                }


        })
    }

    findAllCourses() {
        var courses = this.courseService.findAllCourses()

        var self = this

        courses.map(course => {
            if(course.id === self.state.courseId){
                this.setState({
                    modules : course.modules,
                    lessons: course.modules.lessons
                })
            }
        })


    }

    addNewModule = () => {
        let modules = this.state.modules;
        modules.push(this.state.newModule
            );
        this.setState({
            modules: modules
        });
        console.log(this.state.modules)
    }

    deleteModule= module =>{

            this.courseService.findAllCourses()
            this.courseService.deleteModule(module)
            this.setState({
                courses: this.courseService.findAllCourses()
            })
            this.findAllCourses()
        }
        getModuleName= (module) => {
            var newModuleName = prompt("Enter new module name", module.title);
            if ( newModuleName != null){
                module.title =  newModuleName ;
            }
            else{
                alert("Module name cannot be empty")
            }
            this.setState({
                courses: this.courseService.findAllCourses()
            })
        }







    render() {
        return(
            <h2>
               <ul className="list-group">
                   <li className="list-group-item active">
                       Modules
                   </li>
                   <li className="list-group-item">
                       <input onChange={this.formChanged} className="form-control"/>
                       <button onClick={this.addNewModule} className="btn btn-primary">Add</button>
                   </li>

                   {

                       this.state.modules.map((module, index) => (

                           <ModuleListItem
                               selected={this.props.selectedModule === module}
                               selectModule={this.props.selectModule}
                               deleteModule={this.deleteModule}
                               key={index}
                               title={module.title}
                               module={module}
                           getModuleName={this.getModuleName}/>
                       ))
                   }
               </ul>
            </h2>
        )
    }
}