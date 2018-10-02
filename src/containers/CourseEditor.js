import React, {Component} from 'react'
import ModuleList3 from "../components/ModuleList3";
import {Route} from 'react-router-dom'
import LessonTabs from "../components/LessonTabs";
import CourseEditorNavbar from "../components/CourseEditorNavbar";
import TopicTabs from "../components/TopicTabs"
import CourseService from "../services/CourseService";
import WidgetList from "../components/WidgetList"

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);

        // retrieve courseId from the URL path parameter 'courseId'
        // the props.match.params is part of the Route library which
        // parses the URL path and names the parameters and creates
        // the params map
        const courseId = this.props.match.params.courseId;
        this.courseService = new CourseService();
        // use courseId to find the course object from the
        // courses array passed in as a property
        const course = this.props.courses.find(
            course => course.id === courseId);



        if(course.modules.length!=0 ) {
            const selectedModule = course.modules[0];
            const selectedLesson = selectedModule.lessons[0];
            const selectedTopic = selectedLesson.topics[0];



        this.state = {
            newLesson:[
                {
                title:'',
                topics:[]}
            ],
            newTopic:'',
            topics:selectedLesson.topics,
            lessons:selectedModule.lessons,
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic:selectedTopic,
            courseId: courseId
        }}

    else{
            const selectedModule = [];
            const selectedLesson =[];
            const selectedTopic=[];

            this.state = {
                course: course}

        }

    }

    findAllCourses() {
        var courses = this.courseService.findAllCourses()

        var self = this

        courses.map(course => {
            if (course.id === self.state.courseId) {
                this.setState({
                    modules: course.modules,
                    lessons: course.modules.lessons
                })
            }
        })
    }

    getLessonName= (lesson) => {
        var newLessonName = prompt("Enter new lesson name", lesson.title);
        if ( newLessonName != null){
            lesson.title =  newLessonName ;
        }
        else{
            alert("Lesson name cannot be empty")
        }
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }

    getTopicName= (topic) => {
        var newTopicName = prompt("Enter new topic name", topic.title);
        if ( newTopicName != null){
            topic.title =  newTopicName ;
        }
        else{
            alert("Topic name cannot be empty")
        }
        this.setState({
            courses: this.courseService.findAllCourses()
        })
    }


    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson
        })

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
        })


    selectModule = module => {
        console.log(module.lessons[0])
        if(module.lessons[0].hasOwnProperty("topics")) {
            this.setState({
                selectedModule: module,
                selectedLesson: module.lessons[0],
                selectedTopic: module.lessons[0].topics[0]

            })
        }
        else{
            this.setState({
                selectedModule: module,
                selectedLesson: module.lessons[0],
                selectedTopic: []

            })
        }

        console.log(module.lessons[0])
    }

    deleteTopic = topic => {

        this.courseService.findAllCourses();
        this.courseService.deleteTopic(topic)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
        this.findAllCourses()
    }

    deleteLesson = lesson => {

        this.courseService.findAllCourses();
        this.courseService.deleteLesson(lesson)
        this.setState({
            courses: this.courseService.findAllCourses()
        })
        this.findAllCourses()
    }
    topicChanged = (event) => {
        this.setState({
            newTopic: event.target.value,




        })
    }
    lessonChanged = (event) => {
        this.setState({
            newLesson:
                {
                    title:event.target.value,
                topics:[]
                }




        })
    }
    addNewLesson = () => {
        let lessons = this.state.lessons;
        lessons.push( this.state.newLesson
        );
        this.setState({
            lessons:lessons
        });

    }

    addNewTopic = () => {
        let topics = this.state.topics;
        topics.push( {title: this.state.newTopic}
        );
        this.setState({
           topics:topics
        });

    }

    render() {
        return(
            <div>
                <CourseEditorNavbar title={this.state.course.title}/>

                <div className="row">
                    <div className="col-4">
                        <ModuleList3
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            modules={this.state.course.modules}
                        courseId = {this.state.course.id}/>
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            lessonChanged={this.lessonChanged}
                            addNewLesson={this.addNewLesson}
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            lessons={this.state.selectedModule.lessons}
                            getLessonName={this.getLessonName}
                        deleteLesson={this.deleteLesson}/>
                        <TopicTabs
                            topicChanged={this.topicChanged}
                            addNewTopic={this.addNewTopic}
                            selectTopic={this.selectTopic}
                            selectedTopic={this.state.selectedTopic}
                            topics={this.state.selectedLesson.topics}
                            getTopicName={this.getTopicName}
                        deleteTopic={this.deleteTopic}/>
                        <WidgetList/>
                    </div>
                </div>
            </div>
        )
    }
}