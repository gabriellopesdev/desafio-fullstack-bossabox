import React, { useEffect, useState } from 'react';
import Header from './components/header'
import Card from './components/card'
import api from './services/api'

function App() {
  const [toolsList, setToolsList] = useState([{}])

  function load() {    
    api.post('auth', {      
      login: 'gabs',
      pwd: '1234'        
    })
    .then((response) => {
      localStorage.setItem('@vuttr-app/token', response.data.token)
      api.get('tool', {
        headers: {
          'x-access-token': localStorage.getItem('@vuttr-app/token')
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
      <div>
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
      
      
    </div>
  );
}

export default App;
