import React from 'react'
import './style.css'

function Header() {
    return (
        <header>
            <div className="headerContent">
                <div>
                    <h1>VUTTR</h1>    
                </div>
                <div>
                    <h4>Very Useful Tools to Remember</h4>    
                </div>
                <div className="headerControls">
                    <div>
                        <input placeholder="Search" className="searchInput" type="search"></input>
                        <input className="searchCheckBox"  type="checkbox" name="searchForTags"/>
                        <label className="searchCheckBox"  htmlFor="searchForTags">Search only for tags</label>
                    </div>
                    <div>
                        <button className="addButton"> + Add </button>
                    </div>
                </div>    
            </div>            
        </header>
    )
}

export default Header