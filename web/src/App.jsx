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

  /*
  */
  return (
    <div>
      <Header />
     
      { toolsList.map(({ id, title, link, description, tags }) => {
          const formatedTags = Array(tags).map((item) => {            
            return item + ', '
          }) 
         
          return (
            <Card 
              key={ id }
              title={ title }
              link={ link }
              description={ description } 
              relatedTags={ formatedTags } />
          )
        })} 
      
    </div>
  );
}

export default App;
