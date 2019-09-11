import LogOut from './LogOutButton'
import React from 'react'
// import Container from './NotesContainer'
import Notes from './Notes'
import CreateNote from './CreateNote'


function HomePage() { 
  let name = localStorage.getItem('name'); 
  return (
    <div>
    <LogOut />
    <h1>Notas de {name}</h1>
    <CreateNote/>
    <Notes /> 
    </div>
  );
}
    
export default HomePage;
