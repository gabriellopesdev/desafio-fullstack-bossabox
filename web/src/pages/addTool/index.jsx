import React, { useContext, useState } from 'react'
import Modal from 'react-modal'
import { ModalContext, ToolsContext } from '../../components/context'
import { addTool } from '../../services/tools'
import './style.css'

function NewToolModal(props) {

    const { changeVisibilty } = useContext(ModalContext)
    const { reloadContent } = useContext(ToolsContext)
    const [titleTool, setTitleTool] = useState('')
    const [linkTool, setLinkTool] = useState('')
    const [descriptionTool, setDescriptionTool] = useState('')
    const [tagsTool, setTagsTool] = useState('')

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
        changeVisibilty(false)
    }
    function resetStateTool() {
        setTagsTool('')
        setDescriptionTool('')
        setLinkTool('')
        setTitleTool('')
    }
    function handleNewTool() {
        const tagArray = tagsTool.split(',')
        const newTool = {
            title: titleTool,
            description: descriptionTool,
            link: linkTool,
            tags: tagArray
        }
        addTool(newTool)
        resetStateTool()
        closeModal()
        reloadContent()
    }   
      
    return (

        <Modal
          isOpen={ props.visible }          
          onRequestClose={ closeModal }
          contentLabel="Example Modal"
          style={ customStyles }
          ariaHideApp={ false }
        >
          <div className="closeDiv"> 
            <button className="closeButton" onClick={ closeModal }>X</button>  
          </div>
          <h5>New Tool</h5>        
          <form className="modalContent">
            <input 
                type="text" 
                value={ titleTool } 
                placeholder="Title"
                onChange={(e) => {
                    setTitleTool(e.target.value)
                }}
            />
            <input 
                type="text" 
                value={ descriptionTool } 
                placeholder="Description"
                onChange={(e) => {
                    setDescriptionTool(e.target.value)
                }}
            />    
            <input 
                type="text"
                value={ linkTool } 
                placeholder="Link"
                onChange={(e) => {
                    setLinkTool(e.target.value)
                }}
            />
            <input 
                type="text" 
                value={ tagsTool } 
                placeholder="Tags [ex. Node, React, React Native]"
                onChange={(e) => {
                    setTagsTool(e.target.value)
                }}
            />
            <button 
                className="newToolButton"
                onClick={ handleNewTool }>
                    Send new tool
            </button>
          </form>
        </Modal>
    )
    
}

export default NewToolModal