import React from 'react'

const WidgetList=()=>

<div>
<div class="row">
    <div class="col-sm-8 ">
    &nbsp
    </div>
<div class="col-sm-4">
    <div class="float-right">
        <button  class="btn btn-success ">Save</button>
        Preview
        <button class="btn btn-white" >
            <i class="fa fa-toggle-on fa-2x"></i>
        </button>

    </div>
</div>
</div>
    <ul className="list-group">
    <li className="list-group-item">
        <div className="row">
            <div className="col-sm-8">
                <h1>Heading Widget</h1>
            </div>
            <div className="col-sm-4 ">
                <div className="float-right">
                    <button className="btn bg-warning arrowbtn"><i className="fa fa-arrow-up"></i></button>
                    <button className="btn bg-warning arrowbtn"><i className="fa fa-arrow-down"></i></button>
                    <select>
                        <option value="Heading">Heading</option>
                        <option value="Heading">Paragraph</option>
                        <option value="Heading">List</option>
                        <option value="Heading">Image</option>
                        <option value="Heading">Link</option>
                    </select>
                    <button className="btn btn-danger"><i className="fa fa-times"></i></button>
                </div>
            </div>
        </div>
        <div>
            <div className="form-group row">
                <input type="text" placeholder="Heading Text" className="form-control"/>
            </div>
            <div className="form-group row">
                <select className="form-control">
                    <option value="heading 1">Heading 1</option>
                    <option value="heading 1">Heading 2</option>
                    <option value="heading 1">Heading 3</option>
                    <option value="heading 1">Heading 4</option>
                    <option value="heading 1">Heading 5</option>
                    <option value="heading 1">Heading 6</option>
                </select>
            </div>
            <div className="form-group row">
                <input type="text" placeholder="Widget Name" className="form-control"/>
            </div>
            <div>
                <h3>Preview</h3>
                Heading text
            </div>
        </div>
    </li>
    </ul>
</div>




export default WidgetList