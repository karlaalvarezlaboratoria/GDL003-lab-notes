import LogOut from './LogOutButton'
import React from 'react'
// import Container from './NotesContainer'
import Notes from './Notes'
import CreateNote from './CreateNote'


function HomePage() {  
  return (
    <div>
    <LogOut />
    <CreateNote/>
    <Notes /> 
    </div>
  );
}
    
export default HomePage;
