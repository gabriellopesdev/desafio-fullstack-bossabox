import React from 'react';
import Header from './components/header'
import Card from './components/card'

function App() {
  const tagsArray = ["Node", "React", "JS"]
  return (
    <div>
      <Header />
      <Card 
        title="Titulo"
        link="http://goolge.com"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, adipisci doloremque nobis consectetur nam voluptas laboriosam, autem reiciendis corporis ipsa, quos deleniti nulla similique ratione laudantium porro quia impedit distinctio!" 
        tags={tagsArray} />
    </div>
  );
}

export default App;
