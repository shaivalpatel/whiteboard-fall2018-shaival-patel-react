let courses = [
    {
        id: '123',
        title: 'CS5200',
        modules: [
            {
                title: 'Week 1',
                lessons: [
                    {
                        title: 'Lesson 1',
                        topics: [
                            {
                                id: '123',
                                title: 'topic 1',
                                widgets: [
                                    {
                                        id: '4567',
                                        title: 'list 1',
                                        type: 'LIST',
                                        size:1,
                                        link:'',
                                        options:'unordered',
                                        listitems: 'Put \n each item \n in a new row',
                                        text:"he"
                                    },
                                    {
                                        id: '456',
                                        title: 'list 1',
                                        type: 'LINK',
                                        link:'',
                                        size:1,
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',
                                        text:"he"
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        link:'',
                                        type: 'HEADING',
                                        size: 1,
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',
                                        text: 'Heading 1'

                                    },
                                    {
                                        id: '234',
                                        title: 'widget 2',
                                        type: 'HEADING',
                                        size: 2,
                                        link:'',
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',
                                        text: 'Heading 2'

                                    },
                                    {
                                        id: '345',
                                        title: 'widget 3',
                                        type: 'HEADING',
                                        size: 3,
                                        link:'',
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',
                                        text: 'Heading 3'

                                    }
                                ]
                            },
                            {
                                id: '234',
                                title: 'topic 2',
                                widgets: [
                                    {
                                        id: '456',
                                        title: 'list 1',
                                        type: 'LIST',
                                        link:'',
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1',
                                        link:'',
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',

                                    },
                                    {
                                        id: '234',
                                        title: 'widget 2',
                                        type: 'HEADING',
                                        size: 2,
                                        text: 'Heading 2',
                                        link:'',
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',

                                    },
                                    {
                                        id: '345',
                                        title: 'widget 3',
                                        type: 'HEADING',
                                        size: 3,
                                        text: 'Heading 3',
                                        link:'',
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',

                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Lesson 2',
                        topics: [
                            {
                                title: 'topic a'
                            },
                            {
                                title: 'topic b'
                            },
                            {
                                title: 'topic c'
                            }
                        ]
                    },
                    {
                        title: 'Lesson 3'
                    }
                ]
            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A',
                        topics: []
                    },
                    {
                        title: 'Lesson B',
                        topics: []
                    },
                    {
                        title: 'Lesson C',
                        topics: []
                    }
                ]
            },
            {
                title: 'Week 3',
                lessons: []
            }
        ]
    },
    {
        id: '234',
        title: 'CS5610',
        modules: []
    }
]
{console.log(courses)}

export default class CourseServiceSingleton {

    static updateWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets[widgetIndex] = forWidget;
                        }
                    }
                }
            }
        }
    }



    static findAllWidgetsForTopic = forTopic => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            return courses[c].modules[m].lessons[l].topics[t].widgets
                        }
                    }
                }
            }
        }
    }

    static createWidget = (forTopic,forWidget) =>{
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                            if (courses[c].modules[m].lessons[l].topics[t].id ==forTopic.id){

                                 courses[c].modules[m].lessons[l].topics[t].widgets.push(forWidget);
                                console.log(courses)
                            }
                        }
                    }
                }
            }
        };

    static moveUp = (forTopic,forwidget,forindex)=>{
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if (courses[c].modules[m].lessons[l].topics[t].id ==forTopic.id){

                            if(forindex>0){

                            let temp =courses[c].modules[m].lessons[l].topics[t].widgets[forindex]
                            courses[c].modules[m].lessons[l].topics[t].widgets[forindex] = courses[c].modules[m].lessons[l].topics[t].widgets[forindex-1]
                            courses[c].modules[m].lessons[l].topics[t].widgets[forindex-1] = temp}
                        }
                    }
                }
            }
        }}

        static moveDown = (forTopic,forwidget,forindex)=>{
            for(let c in courses) {
                for(let m in courses[c].modules) {
                    for(let l in courses[c].modules[m].lessons) {
                        for(let t in courses[c].modules[m].lessons[l].topics) {
                            if (courses[c].modules[m].lessons[l].topics[t].id ==forTopic.id){

                                let temp =courses[c].modules[m].lessons[l].topics[t].widgets[forindex]
                                courses[c].modules[m].lessons[l].topics[t].widgets[forindex] = courses[c].modules[m].lessons[l].topics[t].widgets[forindex+1]
                                courses[c].modules[m].lessons[l].topics[t].widgets[forindex+1] = temp
                            }
                        }
                    }
                }
            }

    }


    static findWidget = (forID) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                           for (let w in courses[c].modules[m].lessons[l].topics[t].widgets){
                               if (courses[c].modules[m].lessons[l].topics[t].widgets[w].id ==forID){
                                   return courses[c].modules[m].lessons[l].topics[t].widgets[w];
                               }
                        }
                    }
                }
            }
        }
    }

    static findAllCourses = () =>{

        return courses
        }

    static createCourse = course =>
        courses.push(course)
    static deleteCourse = courseId =>{
        console.log(courses)
        courses = courses.filter(
            course => course.id !== courseId
        )
        console.log(courses)
    }
    static deleteModule = moduleToDelete => {
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }
    static deleteWidget = (forTopic, forWidget) => {
        for(let c in courses) {
            for(let m in courses[c].modules) {
                for(let l in courses[c].modules[m].lessons) {
                    for(let t in courses[c].modules[m].lessons[l].topics) {
                        if(courses[c].modules[m].lessons[l].topics[t].id === forTopic.id) {
                            const widgetIndex = courses[c].modules[m].lessons[l].topics[t].widgets.findIndex(widget => widget.id === forWidget.id)
                            courses[c].modules[m].lessons[l].topics[t].widgets.splice(widgetIndex, 1)
                        }
                    }
                }
            }
        }
    }


    static deleteTopic = (lessonToDelete) =>
    {
        console.log(courses[0].modules);
        courses= courses.map( course=> { course.modules.map(
            module=>{
                module.lessons.map(lesson=>{
                    lesson.topics = lesson.topics.filter(topic=> topic != lessonToDelete)
                })
            }
        );
            return course;

        })
    };

    static deleteLesson = (lessonToDelete) =>
    {

        courses= courses.map( course=> { course.modules.map(
            module=>{
                module.lessons = module.lessons.filter (lesson => lesson != lessonToDelete)
            });
                return course;
            }
        )



    };
    static findCourseById(courseId) {
        courses = courses.filter(
            course =>  course.id == courseId
        );
        return courses;

    }
    static updateCourse(course,courseId){
        this.deleteCourse(courseId);
        courses.push(course);
    }

    static selectModule = (selectedModule, moduleTitle ) => {

        console.log("moduke")
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== selectedModule
            )
            return course;
        })
    }
}