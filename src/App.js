
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contacts from './Coponent/Pages/Contacts';
import Home from './Coponent/Pages/Home';
import PageNotFound from './Coponent/Pages/PageNotFound';
import Programs from './Coponent/Pages/Programs';
import ToDoList from './Coponent/Pages/ToDoList';
import SlideShow from './Coponent/Pages/SlideShow';
import Navbar from './Coponent/Pages/Navbar';


function App() {
  return (

    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />,
        <Route path='/Programs' element={<Programs/>} />,
        <Route  path='/ToDoList' element={<ToDoList />}/>,
        <Route  path='/Contacts' element={<Contacts />}/>,
        <Route path='/SlideShow' element={<SlideShow/>} />,
        <Route  path='*' element={<PageNotFound/>}/>,
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
