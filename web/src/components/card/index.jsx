import React from 'react'

import './style.css'

function Card(props) {
    return (
        <div className="card">
            <div key={props.id}>
                <div className="titleArea">
                    <a className="title" href={props.link}  rel="noopener noreferrer" target="_blank">{props.title}</a>
                    <button className="removeButton">X Remove</button>
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