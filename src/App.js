import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import ContactList from './components/contactlist/ContactList';
import React from 'react';
import AddContact from './components/addcontact/AddContact';
import ViewContact from './components/viewcontact/ViewContact';
import EditContact from './components/editcontact/EditContact';

function App() {
  return (
   <React.Fragment>
     <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
          <Route path={'/contacts/list'} element={<ContactList/>}/>
          <Route path={'/contacts/add'} element={<AddContact/>}/>
          <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
          <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
          

        </Routes>
     </BrowserRouter>
    

   </React.Fragment>
      
      
    
  );
}

export default App;
  