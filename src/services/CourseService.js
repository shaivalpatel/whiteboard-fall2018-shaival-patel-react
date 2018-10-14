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
                                        options:'unordered',
                                        listitems: 'option 1\noption 2\noption 3',
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
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'

                                    },
                                    {
                                        id: '234',
                                        title: 'widget 2',
                                        type: 'HEADING',
                                        size: 2,
                                        text: 'Heading 2'

                                    },
                                    {
                                        id: '345',
                                        title: 'widget 3',
                                        type: 'HEADING',
                                        size: 3,
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
                                        options: 'option 1\noption 2\noption 3'
                                    },
                                    {
                                        id: '123',
                                        title: 'widget 1',
                                        type: 'HEADING',
                                        size: 1,
                                        text: 'Heading 1'

                                    },
                                    {
                                        id: '234',
                                        title: 'widget 2',
                                        type: 'HEADING',
                                        size: 2,
                                        text: 'Heading 2'

                                    },
                                    {
                                        id: '345',
                                        title: 'widget 3',
                                        type: 'HEADING',
                                        size: 3,
                                        text: 'Heading 3'

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


export default class CourseService {
    findAllCourses = () =>
        courses;
    createCourse = course =>
        courses.push(course);
    deleteCourse = courseId =>
        courses = courses.filter(
            course => course.id !== courseId
        )
    deleteModule = (moduleToDelete  ) => {
        console.log("moduke")
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== moduleToDelete
            )
            return course;
        })
    }

    deleteTopic = (lessonToDelete) =>
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

    deleteLesson = (lessonToDelete) =>
    {

        courses= courses.map( course=> { course.modules.map(
            module=>{
                module.lessons = module.lessons.filter (lesson => lesson != lessonToDelete)
                });
            return course;
            }
        )



    };
    findCourseById(courseId) {
        courses = courses.filter(
                course =>  course.id == courseId
            );
            return courses;

    }
    updateCourse(course,courseId){
        this.deleteCourse(courseId);
        courses.push(course);
    }

    selectModule = (selectedModule, moduleTitle  ) => {

        console.log("moduke")
        courses = courses.map(course => {
            course.modules = course.modules.filter(
                module => module !== selectedModule
            )
            return course;
        })
    }
}