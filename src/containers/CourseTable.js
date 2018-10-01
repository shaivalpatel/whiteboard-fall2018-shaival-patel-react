import React from 'react'
import CourseRow from "../components/CourseRow";
import CourseAdd from "../components/CourseAdd";
import TableNavBar from "../components/TableNavBar"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
const CourseTable = ({courses, deleteCourse, addCourse,deleteModule}) =>
    <div>
        <TableNavBar
        addCourse ={addCourse}/>

        <table className="table">
            <thead>
            <tr>
                <th>
                    Title
                </th>
            <th>
                <div className="dropdown">
                <button className="btn btn-sm btn-primary bg-primary text-dark dropdown-toggle" type="button" data-toggle="dropdown"><b>Owned-by</b><span className="caret"></span></button>
                <ul className="dropdown-menu">
                    <li><a href="#">Me</a>
                    </li>
                </ul>
                </div>
            </th>
                <th>
                    Last modified by me
                </th>


                <th>
                    <Link to="/course/grid">
                        <i className="fa fa-th-large"></i>
                    </Link>

                </th>
                <th>
                    <i className="fa fa-sort-alpha-asc"></i>

                </th>

            </tr>



            </thead>
            <tbody>
            {
                courses.map((course, index) =>
                    (<CourseRow
                        deleteCourse={deleteCourse}
                        deleteModule ={deleteModule}
                        key={index}
                        course={course}
                        editCourse/>)
                )
            }
            </tbody>
        </table>
    </div>

export default CourseTable