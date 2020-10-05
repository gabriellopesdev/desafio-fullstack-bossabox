import React, { useState, useContext } from 'react'
import NewToolModal from '../../pages/addTool'
import { ModalProvider } from '../context'
import { ToolsContext } from '../context'

import './style.css'

function Header() {
    const [showModal, setShowModal] = useState(false)
    const [searchOnlyTags, setSearchOnlyTags] = useState(false)
    const { originalToolsList,  updateData, reloadContent } = useContext(ToolsContext)
  
    const initialContext = {
        isVisible: showModal,
        changeVisibilty: (newVisibility) => {  
            setShowModal(newVisibility)
        }
    }
    function handleModal() {
        setShowModal(true)
        cleanFilters()
        reloadContent()
    }

    function cleanFilters() {
        setSearchOnlyTags(false)
        document.getElementById("searchContent").value = ''
    }

    function filterTools(searchContent, onlyTags) {
        if (!searchContent) {
            updateData(originalToolsList)
            return
        }
        const filteredData = 
        onlyTags ?
        originalToolsList.filter((item) => {
            if (String(item.tags).indexOf(searchContent) > -1) {                
                return item                
            }
        })
        :
        originalToolsList.filter((item) => {
            if ((String(item.title).indexOf(searchContent) > -1) || 
            (String(item.description).indexOf(searchContent) > -1)|| 
            (String(item.link).indexOf(searchContent) > -1) ||
            (String(item.tags).indexOf(searchContent) > -1)) {
                return item
            }
        })                
        updateData(filteredData)
    }
    function handleCheckOnlyTags(onlyTags) { 
        filterTools(document.getElementById("searchContent").value, onlyTags)        
    }
    return (
        <header>
            <ModalProvider value={ initialContext }>
                <NewToolModal visible={ showModal } />    
            </ModalProvider>
            
            <div className="headerContent">
                <div>
                    <h1>VUTTR</h1>    
                </div>
                <div>
                    <h4>Very Useful Tools to Remember</h4>    
                </div>
                <div className="headerControls">
                    <div>
                        <input                             
                            placeholder="Search"  
                            className="searchInput"                     
                            type="search"
                            id="searchContent"
                             onChange={(e) => {                              
                                filterTools(e.target.value, searchOnlyTags)                              
                            }}   
                        />
                        <input 
                            className="searchCheckBox"  
                            type="checkbox" 
                            name="searchForTags"    
                            defaultChecked={ false }                        
                            onChange={ (e) => {                              
                                setSearchOnlyTags(e.currentTarget.checked)
                                handleCheckOnlyTags(e.currentTarget.checked)                        
                            }}   
                        />
                        <label className="searchCheckBox"  htmlFor="searchForTags">Search only for tags</label>
                    </div>
                    <div>
                        <button className="addButton" onClick={ handleModal }> + Add </button>
                    </div>
                </div>    
            </div>            
        </header>
    )
}

export default Header