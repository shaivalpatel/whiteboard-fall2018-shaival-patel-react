import React, {Component} from 'react'

export default class CourseAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value
        })

    render() {
        return(
            <div className="input-group">
                <div className="col-sm-6">

                <input id="addCourse" type="text" className="form-control" placeholder="Course Title"
                    onChange={this.updateForm}
                    className="form-control"/>
                </div>
            <div className="col-sm-1 ">
                <button
                    onClick={() => this.props.addCourse({
                        id: (new Date()).getTime() + '',
                        title: this.state.title
                    })}
                    className="btn btn-success input-group-btn">Add</button>
            </div>
            </div>
        )
    }
}

