import React from "react";
import "./service.css";
import { Card } from "react-bootstrap";

import ScrollToTopButton from "./ScrollToTopButton";

function Service() {
  return (
    <>
      <div className="service-wrap  ">
        
        <div className="text-center d-flex justify-content-center p-4 align-items-center  ">
          <h1 className="service-h1" style={{ fontSize: "35px" }}>
            SERVICE
          </h1>
          
        </div>
       
        <div className=" d-flex flex-row justify-content-around align-items-center flex-wrap mt-4  ">
            
            <div className="m-4">
              <Card style={{ width: "18rem" }} className="rounded-left shadow p-3 mb-5  rounded">
                <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/2166/2166895.png" />
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}>Frontend</Card.Title>
                  <Card.Text>
                  <p className="p-1 card-p">
                  Front-end services are administrative-type services where you need to have “office hours” or business day availability for your clients or your clients.
                   </p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="m-4">
              <Card style={{ width: "18rem" }} className="rounded-left shadow p-3 mb-5  rounded">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MvQX5s4hUSkvntVww5vU8dpyi6BGB1wqFw&usqp=CAU" />
                <Card.Body>
                  <Card.Title  style={{textAlign:'center'}}>Backend</Card.Title>
                  <Card.Text>
                  <p className="p-1 card-p">
                  A backend service defines how Cloud Load Balancing distributes traffic. The backend service configuration contains a set of values, such as the protocol
                   </p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="m-4">
              <Card style={{ width: "18rem" }} className="rounded-left shadow p-3 mb-5 rounded">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYllC8v5NRvplbbCmB2DJeQx_C_LjngDF_X6f64xQzVfcwQV7BD9egdZ54eMCQfJUQH_g&usqp=CAU" />
                <Card.Body>
                  <Card.Title  style={{textAlign:'center'}}>Webapp</Card.Title>
                  <Card.Text>
                  <p className="p-1 card-p">
                  Here are some key features of App Service: Multiple languages and frameworks - App Service has first-class support for ASP.NET, ASP.NET Core, Java, Ruby,.
                   </p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className=" d-flex flex-row justify-content-around align-items-center flex-wrap mt-5 pt-5">
            
            <div className="m-4">
              <Card style={{ width: "18rem" }} className="rounded-left shadow p-3 mb-5  rounded">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SOsEsg-jh7dLe9c9HSxSS42It31UYALd9w&usqp=CAU" />
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}>Email</Card.Title>
                  <Card.Text>
                  <p className="p-1 card-p">
                  An email service is a company that provides businesses with tools to send bulk emails and implement email marketing.
                   </p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="m-4">
              <Card style={{ width: "18rem" }} className="rounded-left shadow p-3 mb-5  rounded">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dUL8YAa3STmlCiL389d9u4HZbBBiTqOsK4E9K1Mi3CTEuo-mnHUh1j22XDDQlOyFrX4&usqp=CAU" />
                <Card.Body>
                  <Card.Title  style={{textAlign:'center'}}>Web-site</Card.Title>
                  <Card.Text>
                  <p className="p-1 card-p">
                  The Web Services Description Language (WSDL /ˈwɪz dəl/) is an XML-based interface description language  
                   </p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
            <div className="m-4">
              <Card style={{ width: "18rem" }} className="rounded-left shadow p-3 mb-5  rounded">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjowuQc-7oxrtzoj2q-Mk5s3CQXI_kj7vISA&usqp=CAU" />
                <Card.Body>
                  <Card.Title  style={{textAlign:'center'}}>UiUx</Card.Title>
                  <Card.Text>
                  <p className="p-1 card-p">
                  UI icons are the graphical representation of a functionality, concept, a specific entity, and the application itself
                   </p>
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
          </div>
          <ScrollToTopButton/>
      </div>
      
    </>
  );
}

export default Service;
