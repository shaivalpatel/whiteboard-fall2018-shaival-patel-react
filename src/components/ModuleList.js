import React from 'react'
import ModuleListItem from "./ModuleListItem";

const ModuleList = ({modules, deleteModule, selectModule, selectedModule}) =>
    <div>
        <li className="list-group-item ">
            <input onChange={this.formChanged} className="form-control"/>
            <button onClick={this.addNewModule} className="btn btn-primary">Add</button>
        </li>
    <ul className="list-group">
        {
            modules.map((module, index) =>
                <ModuleListItem
                    selected={selectedModule === module}
                    selectModule={selectModule}
                    deleteModule={deleteModule}
                    key={index}
                    module={module}/>
            )

        }

    </ul>
    </div>

export default ModuleList