import React from "react";
import "./HomePage.css";
import About from "../component/About";
import Service from "../component/Service";
import Expertise from "../component/Expertise";




function HomePage() {
  return (
    <div>
      <>
        {/* this palce in text with about the content  */}
        {/* <Link to={"/About"}style={{textDecoration:"none"}}>About</Link> */}
        <div className="home-page ">
          <div className="home-page-content  pt-3 ps-5">
            <div className="content-1">
              <h1 style={{ fontSize: "60px" }}>Hi </h1>
              <h1>
                Akhil <span className="">pk</span>
              </h1>
            </div>
            <div className="content-2 ">
              <p className="pt-2" style={{ fontSize: "20px"}}>
                "I'm a passionate MERN Stack Developer dedicated to
                creating user-friendly web applications that combine
                functionality and aesthetics."
              </p>
            </div>
          </div>
        </div>
       
        <About />
        <Service/>
        <Expertise/>
        
        
      </>
    </div>
  );
}

export default HomePage;
