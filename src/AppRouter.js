import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import HomePage from './components/HomePage';
import LogIn from './components/LogInPage';
import {ProtectedRoute} from './components/ProtectedRoute'

const AppRouter = () => (


  <BrowserRouter>
    <Switch>
      <ProtectedRoute exact path = "/home" component ={HomePage}/>
      <Route exact path = "/" component ={LogIn}/>
      <Route path = '*' component = {() => '404 NOT FOUND'}/> 
    </Switch>
  </BrowserRouter>
);

export default AppRouter;




////////////////////////////////////7

// import React from 'react';
// //import ReactDOM from 'react-dom';
// import {BrowserRouter, Route} from 'react-router-dom';
// import LogInPage from './components/LogInPage';
// import HomePage from './components/HomePage';
// //import FoundPage from './components/FoundPage';
// import Notes from './components/Notes'
// import App from './App'



// const AppRouter = () => (
//     <BrowserRouter>
//       <Route exact path = "/" component ={App}/>
//           <Route path = "/home" component ={HomePage}/>
//           <Route path = "/logIn" component ={LogInPage}/>
//           <Route path = "/notes" component ={Notes}/>
//     </BrowserRouter>
//     );
    
    

// export default AppRouter;


    
