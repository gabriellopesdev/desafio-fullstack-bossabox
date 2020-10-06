import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import  { ToolsContext } from '../context'

import './style.css'

import { deleteTool } from '../../services/tools'


function Card(props) {

    const { data, updateData } = useContext(ToolsContext)
    const [isVisible, setIsVisible] = useState(false)
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width: '500px'
        }
      };
    function closeModal(){
        setIsVisible(false)
    }
    function handleDeleteTool(id) {    
    
        deleteTool(id)    
        const indexTool = data.findIndex(v => v._id === id)
        data.splice(indexTool, 1)
        updateData(data)
        closeModal()
    }
    return (
        <div className="card">
            <Modal
                isOpen={ isVisible }          
                onRequestClose={ closeModal }
                contentLabel=""
                style={ customStyles }
                ariaHideApp={ false }
            >
                <div>
                    <h5>X Remove tool</h5>
                    <p className="text">Are you sure you want to remove tool?</p>
                    <div className="buttonDeleteContainer">
                        <button className="buttonCancelDelete" onClick={ () => {  closeModal() } }>Cancel</button>
                        <button className="buttonDelete" onClick={ () => { handleDeleteTool(props.id) } } >Yes, remove</button>                        
                    </div>                    
                </div>
            </Modal>
            <div key={props.id}>
                <div className="titleArea">
                    <a className="title" href={props.link}  rel="noopener noreferrer" target="_blank">{props.title}</a>
                    <button 
                        onClick={ () => { setIsVisible(true) }} 
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