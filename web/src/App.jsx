import React, { useEffect, useState } from 'react';
import Header from './components/header'
import Card from './components/card'
import { listTools } from './services/tools'
import  { getNewToken } from './services/token'
import { ToolsProvider } from './components/context'
function App() {

  const [toolsList, setToolsList] = useState([{}])

  const initialContext = {
    data: toolsList,
    updateData: (newData) => {      
      const newArray = newData.map((item) => {
        return item
      })
      setToolsList(newArray)
    }
  }

  function load() {    
    getNewToken(process.env.REACT_APP_DEFAULT_USER, process.env.REACT_APP_DEFAULT_PWD)
    listTools().then((list) => {      
      setToolsList(list)
    })       
  }

  useEffect( () => {    
    load()
  }, [])

  return (
    <div>
      <ToolsProvider value={ initialContext }>
        <Header />
        
        { toolsList.map(({ _id, title, link, description, tags }, index) => {          
            
            const arrayTags = String(tags).split(',')
            const formatedtags = arrayTags.map((item) => {
              return '#' + item + ' '
            }) 
            return (              
             <Card 
                key={ index }
                id={ _id }
                title={ title }
                link={ link }
                description={ description } 
                relatedTags={ formatedtags }>
              </Card>
            )
          }) }  
        </ToolsProvider>
    </div>
  );
}

export default App;
