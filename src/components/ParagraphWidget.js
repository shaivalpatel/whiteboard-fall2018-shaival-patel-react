import React from 'react'

const ParagraphWidget = ({widget, updateWidget}) => {

    return(
        <div>
            <h1>{widget.title}</h1>
            <div>
                <div className="form-group row">
                    <textarea onChange={(event)=>
                    {widget.text=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Lorem ispsum" className="form-control"></textarea>
                </div>
                <div className="form-group row">
                    <input onChange={(event)=>
                    {widget.title=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Widget Name" className="form-control"/>
                </div>
                <div>
                    <h3>Preview</h3>
                    {widget.text}
                </div>
            </div></div>

    )
}
export default ParagraphWidget

