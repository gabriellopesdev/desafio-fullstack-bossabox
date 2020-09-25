import React from 'react'

import './style.css'

function Card(props) {
    return (
        <div className="card">
            <div className="titleArea">
                <a className="title" href={props.link}  rel="noopener noreferrer" target="_blank">{props.title}</a>
                <button className="removeButton">X Remove</button>
            </div>
            <div className="description text">
                <p>{props.description}</p>
            </div>
            <div className="tags text">
                { props.tags.map((tagsItem) => {
                  return (
                        <span><b> #{tagsItem} </b></span>   
                    )   
                })} 
            </div>
        </div>
    )
}

export default Card