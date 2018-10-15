import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import ModuleList from "../components/ModuleList";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseService from "../services/CourseService";
import CourseEditor from "./CourseEditor";

export default class WhiteBoard extends Component {

    constructor(props) {


        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses()
        }
    }
    addCourse = newCourse => {
        this.courseService.createCourse(newCourse)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    findCourseById = course =>{
        console.log(this.courseService.findCourseById(course.id))

    }



    deleteCourse = courseToDelete => {

        console.log("in megtod");
        this.findCourseById(courseToDelete);
        console.log("hio");
        this.courseService.deleteCourse(courseToDelete.id)

        this.findAllCourses()
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    findAllCourses()  {
        this.setState({
            courses: this.courseService.findAllCourses()
        });
        this.state.courses
}

    deleteModule = module =>{
        this.courseService.findAllCourses()
        this.courseService.deleteModule(module)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
        this.findAllCourses()
    }

    deleteTopic = topic =>{
        this.courseService.findAllCourses()
        this.courseService.deleteTopic(topic)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
        this.findAllCourses()
    }

    deleteLesson = lesson =>{
        this.courseService.findAllCourses()
        this.courseService.deleteLesson(lesson)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
        this.findAllCourses()
    }



    render() {
        return (
            <div>

                <Router>
                    <div>

                        <Route path="/course/table"
                               render={(props) =>
                                   <CourseTable
                                       {...props}
                                       addCourse={this.addCourse}
                                       deleteCourse={this.deleteCourse}
                                       deleteModule={this.deleteModule}
                                       courses={this.state.courses}/>}/>
                        <Route path="/course/grid"
                               render={(props)=>
                               <CourseGrid
                                   {...props}
                                   addCourse={this.addCourse}
                                   deleteCourse={this.deleteCourse}
                                   deleteModule={this.deleteModule}
                                   courses={this.state.courses}/>}/>
                        <Route
                            exact
                            render={(props) =>
                                <CourseEditor
                                    {...props}
                                    deleteModule={this.deleteModule}
                                    deleteTopic={this.deleteTopic}
                                    deleteLesson={this.deleteLesson}
                                    courses={this.state.courses}/>}
                            path="/course/:courseId/edit"/>

                    </div>
                </Router>
            </div>
        );
    }
}