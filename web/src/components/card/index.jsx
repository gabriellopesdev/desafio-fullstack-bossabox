import React, { useContext } from 'react'
import  ToolsContext from '../context'

import './style.css'

import { deleteTool } from '../../services/tools'


function Card(props) {

    const { data, updateData } = useContext(ToolsContext)

    function handleDeleteTool(id) {    
    
        deleteTool(id)    
        const indexTool = data.findIndex(v => v._id === id)
        data.splice(indexTool, 1)
        updateData(data)
        
    }
    return (
        <div className="card">
            <div key={props.id}>
                <div className="titleArea">
                    <a className="title" href={props.link}  rel="noopener noreferrer" target="_blank">{props.title}</a>
                    <button 
                        onClick={ () => { handleDeleteTool(props.id) } } 
                        className="removeButton">
                            X Remove
                    </button>
                </div>
                <div className="description text">
                    <p>{props.description}</p>
                </div>
                <div className="tags text">
                    <span><b> { props.relatedTags } </b></span>                   
                </div>    
            </div>
            
        </div>
    )
}

export default Card