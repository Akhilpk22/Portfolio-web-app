
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import HomePage from "./pages/HomePage";
import About from "./component/About";
import Service from "./component/Service";
import Expertise from "./component/Expertise";
import Contact from "./component/Contact";

function App() {
  return (
    <>
      <div className="main-page">
      <NavBar/>

        <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Service' element={<Service/>}/>
      
          <Route path='/Expertise' element={<Expertise/>}/>
          <Route path='/' element={<Contact/>}/>
          
          
        </Routes>
        
       
     
      </div>
      <Contact/>
    </>
  );
}

export default App;
