// import React from 'react';
// import Nav from './Navigation';

// const HomePage = () => (
//   <div>
//     <h1>HomePage</h1>
//     <Nav/>
//   </div>
// )

// export default HomePage;
///////////////////

import LogOut from './LogOutButton'
import React from 'react'
// import Container from './NotesContainer'
import Notes from './Notes'
import CreateNote from './CreateNote'
//import Nav from './Navigation'

function HomePage() { 
  let name = localStorage.getItem('name'); 
  return (
    <div>
    <LogOut/>
    <h1>Notas de {name}</h1>
    <CreateNote/>
    <Notes /> 
    </div>
  );
}
    
export default HomePage;
