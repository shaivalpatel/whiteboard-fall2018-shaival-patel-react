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
                                title: 'topic1'

                            }
                        ]

                    },
                    {
                        title: 'Lesson 2',
                        topics:[]
                    },
                    {
                        title: 'Lesson 3',
                        topics:[]
                    }
                ]

            },
            {
                title: 'Week 2',
                lessons: [
                    {
                        title: 'Lesson A',
                        topics:[]
                    },
                    {
                        title: 'Lesson B',
                        topics:[]
                    },
                    {
                        title: 'Lesson C',
                        topics:[]
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
        modules: [
    {
        title: 'Week 1',
        lessons: [
            {
                title: 'Lesson 1',
                topics:[]
            },
            {
                title: 'Lesson 2',
                topics:[]
            },
            {
                title: 'Lesson 3',
                topics:[]
            }

        ]
    },
    {
        title: 'Week 2',
        lessons: [
            {
                title: 'Lesson A',
                topics:[]
            },
            {
                title: 'Lesson B',
                topics:[]
            },
            {
                title: 'Lesson C',
                topics:[]
            }
        ]

    },
    {
        title: 'Week 3',
        lessons: []
    }
]
    }
];

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