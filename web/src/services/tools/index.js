import api from '../api'
import { getToken } from '../token'

async function addTool(tool) {
  const response = await api.post('tool', tool, {    
    headers: {
      'x-access-token': getToken()
    },  

  })
  
  return response.data
}

async function searchTool(content, onlyTags) {

} 

async function listTools() {
    const response = await api.get('tool', {
        headers: {
          'x-access-token': getToken()
        }
      })
      return response.data
}

function deleteTool(id) {
    api.delete('tool/' + id, {
        headers: {
          'x-access-token': getToken()
        }
    })
    .then((response) => {
        console.log('Tool removed!')
    })
    .catch((err) => {
        console.log('An error ocurred. Try again.', err)
    })
}

export { addTool, searchTool, deleteTool, listTools }