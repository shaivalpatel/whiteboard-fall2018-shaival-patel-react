import React from 'react'

const LinkWidget = ({preview,widget, updateWidget}) => {

    return(
        <div>
            <h1 hidden={preview}>{widget.title}</h1>
            <div>
                <div hidden={preview}className="form-group row">
                    <input onChange= {(event)=>
                    {widget.link=event.target.value;
                        updateWidget(widget);}}type="url" placeholder="https://www.youtube.com/" className="form-control"/>
                </div>
                <div hidden={preview}className="form-group row">
                    <input onChange= {(event)=>
                    {widget.text=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Link Text" className="form-control"/>
                </div>
                <div hidden={preview} className="form-group row">
                    <input type="url" placeholder="https://www.youtube.com/" className="form-control"/>
                </div>
                <div hidden={preview} className="form-group row">
                    <input onChange= {(event)=>
                    {widget.title=event.target.value;
                        updateWidget(widget);}} type="text" placeholder="Widget Name" className="form-control"/>
                </div>
                <div>
                    <h3 hidden={preview}>Preview</h3>
                    <a href={widget.link}>{widget.text}</a>
                </div>
            </div>
        </div>

    )
}
export default LinkWidget


