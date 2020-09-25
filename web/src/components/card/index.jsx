import React from 'react'

import './style.css'

function Card({link, title, description, relatedTags, key}) {
    return (
        <div className="card">
            <div className="titleArea">
                <a className="title" href={link}  rel="noopener noreferrer" target="_blank">{title}</a>
                <button className="removeButton">X Remove</button>
            </div>
            <div className="description text">
                <p>{description}</p>
            </div>
            <div className="tags text">
                <span><b> { relatedTags } </b></span>                   
            </div>
        </div>
    )
}

export default Card