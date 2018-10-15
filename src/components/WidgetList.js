import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import ToggleButton from 'react-toggle-button'
import CourseServiceSingleton from "../services/CourseServiceSingleton";

class WidgetList extends React.Component {

    constructor(props) {


        super(props);
        let c;
        const isLoggedIn = this.props.widgets.length==1;
        props.init(props.widgetsInit, props.topic)


    }

    componentDidUpdate() {

        this.props.init(this.props.widgetsInit, this.props.topic)
    }
    render() {

        let c;
        let defaultwidget={
            id: '456',
            title: 'list 1',
            type: 'HEADING',
            size:1,
            text:"hello"

        };
        return(
            <div >
                <div className="row">
                    <div className="col-sm-8 ">
                        &nbsp
                    </div>
                    <div className="col-sm-4">
                        <div className="float-right">
                            <button onClick={this.props.saveWidget} className="btn btn-success ">Save</button>
                            Preview
                            <ToggleButton value={this.props.preview}
                                          onToggle={this.props.changePreview}/>

                        </div>
                    </div>
                </div>
            <ul className="list-group">
                {

                    this.props.widgets.map((widget, index) =>
                        <li key={index}
                            className="list-group-item">
                            {}
                            <button hidden={(index==0)} onClick={()=>this.props.moveUp(widget,index)} className="btn bg-warning arrowbtn float-right"><i className="fa fa-arrow-up"></i></button>
                            <button hidden={index==this.props.widgets.length-1} onClick={()=>this.props.moveDown(widget,index)}className="btn bg-warning arrowbtn float-right"><i className="fa fa-arrow-down"></i></button>
                            <select className="float-right"
                                    onChange={(event)=>
                                                {widget.type=event.target.value;
                                                this.props.updateWidget(widget);}}
                                    value={widget.type}>

                                <option  value="HEADING">Heading</option>
                                <option  value="PARAGRAPH">Paragraph</option>
                                <option  value="LIST">List</option>
                                <option  value="IMAGE">Image</option>
                                <option  value="LINK">Link</option>
                            </select>
                            <button onClick={() => this.props.deleteWidget(widget)}
                                    className="btn btn-danger float-right"><i className="fa fa-times"></i></button>

                            {widget.type === 'LIST' &&
                            <ListWidget preview={this.props.preview} widget={widget}
                                        updateWidget={this.props.updateWidget}/>}
                            {widget.type === 'HEADING' &&
                            <HeadingWidget preview={this.props.preview} widget={widget}
                                           updateWidget={this.props.updateWidget}/>}
                            {widget.type === 'LINK' &&
                            <LinkWidget preview={this.props.preview} widget={widget}
                                           updateWidget={this.props.updateWidget}/>}
                            {widget.type === 'PARAGRAPH' &&
                            <ParagraphWidget preview={this.props.preview} widget={widget}
                                        updateWidget={this.props.updateWidget}/>}
                            {widget.type === 'IMAGE' &&
                            <ImageWidget preview={this.props.preview} widget={widget}
                                             updateWidget={this.props.updateWidget}/>}


                        </li>
                    )

                }
            </ul>
                <div className="text-danger float-right">
                <button onClick={()=>this.props.createWidget(defaultwidget)} >
                   Add
                </button>
            </div>
               </div>
        )
    }
}
export default WidgetList