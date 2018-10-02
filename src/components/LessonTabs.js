import React from 'react'
import LessonTab from "./LessonTab";

const LessonTabs = ({lessons, selectLesson, selectedLesson,deleteLesson,getLessonName}) =>
    <ul className="nav nav-tabs">
        {
            lessons.map((lesson, index) =>
                <LessonTab
                    selected={selectedLesson === lesson}
                    selectLesson={selectLesson}
                    lesson={lesson}
                    key={index}
                deleteLesson={deleteLesson}
            getLessonName={getLessonName}/>
            )
        }
    </ul>

export default LessonTabs