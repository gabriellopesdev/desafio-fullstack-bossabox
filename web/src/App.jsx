import React, { useEffect, useState } from 'react';
import Header from './components/header'
import Card from './components/card'
import api from './services/api'
import  { getNewToken } from './services/token'
function App() {

  const [toolsList, setToolsList] = useState([{}])
  function load() {    
    getNewToken(process.env.REACT_APP_DEFAULT_USER, process.env.REACT_APP_DEFAULT_PWD)
    .then((token) => {
        api.get('tool', {
          headers: {
            'x-access-token': token
          }
        })
        .then((response) => {
          setToolsList(response.data)
        })  
    })
  }

  useEffect( () => {    
    load()
  }, [])

  return (
    <div>
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
          })}  
    </div>
  );
}

export default App;
