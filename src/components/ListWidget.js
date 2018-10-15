import React from 'react'

const ListWidget = ({widget, updateWidget}) => {

    return(
    <div>
        <h1>{widget.title}</h1>
        <div>
            <div className="form-group row">
                                <textarea onChange={(event)=>
                                {widget.listitems=event.target.value;
                                    updateWidget(widget);console.log(widget.options.split('\n'))}} type="text"
                                          placeholder="Put
each item
in a new row " className="form-control"></textarea>
            </div>
            <div className="form-group row">
                <select  onChange={(event)=>
                {widget.options=event.target.value;
                    updateWidget(widget);}}className="form-control">
                    <option value="ordered">Ordered List</option>
                    <option value="unordered">Unordered List</option>
                </select>
            </div>
            <div className="form-group row">
                <input onChange={(event)=>
                {widget.title=event.target.value;
                    updateWidget(widget);}}type="text" placeholder="Widget Name" className="form-control"/>
            </div>
            <div>
                <h3>Preview</h3>
                {widget.options==='unordered' && <ul>
                    {widget.listitems.split('\n').map((item,index)=><li>{item}</li>)}
                </ul>}


                    {widget.options==='ordered' && <ol>
                        {widget.listitems.split('\n').map((item,index)=><li>{item}</li>)}

                    </ol>}


            </div>
        </div>
    </div>

    )
}
export default ListWidget