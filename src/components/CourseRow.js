import React from 'react'
import {Link} from 'react-router-dom'
import CourseTable from "../containers/CourseTable";

const CourseRow = ({course, deleteCourse,deleteModule, findAllCourses}) =>
    <tr>
        <td>
            <Link to={`/course/${course.id}/edit`}>
                  {course.title} {course.id}</Link></td>
        <td>me</td>
        <td>
            <Link
                className="btn btn-primary" to={`/course/${course.id}/edit`}>Edit</Link>
            <button onClick={() => {deleteCourse(course)}} className="btn btn-danger">Delete</button>
        </td>
    </tr>

export default CourseRow