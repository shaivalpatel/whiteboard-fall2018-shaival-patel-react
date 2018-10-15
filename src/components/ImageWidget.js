import React from 'react'

const ImageWidget = ({widget, updateWidget}) => {

    return(
        <div>
            <h1>{widget.title}</h1>

            <div>
                <div className="form-group row">
                    <input onChange= {(event)=>
                    {widget.link=event.target.value;
                        updateWidget(widget);}}type="text"
                           placeholder="https://techcrunch.com/wp-content/uploads/2018/03/gettyimages-705351545.jpg?w=730&crop=1"
                           className="form-control"/>
                </div>
                <div className="form-group row">
                    <input onChange= {(event)=>
                    {widget.title=event.target.value;
                        updateWidget(widget);}} type="text" placeholder="Widget Name" className="form-control"/>
                </div>
                <div>
                    <h3>Preview</h3>
                    <img src={widget.link}/>
                </div>
            </div>
        </div>

    )
}
export default ImageWidget

