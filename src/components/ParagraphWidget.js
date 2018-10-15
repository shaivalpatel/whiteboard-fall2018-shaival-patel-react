import React from 'react'

const ParagraphWidget = ({preview,widget, updateWidget}) => {

    return(
        <div>
            <h1 hidden={preview}>{widget.title}</h1>
            <div>
                <div hidden={preview} className="form-group row">
                    <textarea onChange={(event)=>
                    {widget.text=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Lorem ispsum" className="form-control"></textarea>
                </div>
                <div hidden={preview} className="form-group row">
                    <input onChange={(event)=>
                    {widget.title=event.target.value;
                        updateWidget(widget);}}type="text" placeholder="Widget Name" className="form-control"/>
                </div>
                <div>
                    <h3 hidden={preview}>Preview</h3>
                    {widget.text}
                </div>
            </div></div>

    )
}
export default ParagraphWidget

