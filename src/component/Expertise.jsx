import React from "react";
import "./Expertise.css";
import ScrollToTopButton from "./ScrollToTopButton";

function Expertise() {
  return (
    <>
      <div className="wrap-skill">
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <h1 style={{fontSize:"35px"}} className="underline-div m-5 pt-5" >My Skill</h1>
        </div>
        <div className="section-skill d-flex justify-content-evenly align-items-center  ">
          <div style={{ width: "100%" }} className="py-5 px-5">
            <h5 className="p-3 text-light">Programming Skill</h5>
            <div>
              <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                    JavaScript 
                  </span>
                  <span className="text-light me-5">90%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                    C 
                  </span>
                  <span style={{paddingRight:'170px'}} className="text-light ">70%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "70%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                    C++ 
                  </span>
                  <span style={{
                    paddingRight:'130px'
                  }} className="text-light ">80%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "80%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                    Java 
                  </span>
                  <span className="text-light me-5">90%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>


          </div>
          <div style={{ width: "100%" }} className="py-5 px-5">
            <h5 className="p-3 text-light"> Design Skill</h5>
            <div>
              <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                    HTML 
                  </span>
                  <span className="text-light me-5">100%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                    CSS 
                  </span>
                  <span className="text-light me-5">90%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                    Bootstrap 
                  </span>
                  <span className="text-light me-5">90%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-5">
              <div className="d-flex justify-content-between align-items-center">
                  <span className="text-light">
                  Material-UI 
                  </span>
                  <span className="text-light me-5">90%</span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      height: "10px",
                      backgroundColor: "#527ef7",
                    }}
                  ></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        
        
        
      </div>
      <ScrollToTopButton/>
    </>
  );
}

export default Expertise;
