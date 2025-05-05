import React from 'react'

const App = () => {
  
   
    const relatives = [
      'Uncle Ravi',
      'Aunt Priya',
      'Cousin Raj',
      'Grandmother Sita',
      'Grandfather Mohan'
    ];
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <h1>Relatives to Visit This Diwali</h1>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  )
}

export default App
