import React from 'react'

const App = () => {
  const abc = 'anju';
  const nameLists = ['Ram', 'Brad', 'Messi']
  const loggedIn = true;

  // if (loggedIn){
  //   return (
  //     <h1>Hello member</h1>
  //   )
  // }
  const styles = {
    color : 'blue',
    fontSize:'50',
  }
  return (
    <>
      <div className='text-5xl' style={styles}>App</div>
      <p style={{color:'red', fontSize:'24px'}}>Hello {abc}</p>
      <ul>
        {nameLists.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {/* { loggedIn ? <h1>Hello <Member></Member></h1> : <h1>Sorry!!</h1> } */}
      {loggedIn && <h1>Hello member</h1>}


    </>
    
  )
}

export default App