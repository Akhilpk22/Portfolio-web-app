import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <>
      <div className="wrap-contact">
        <div className="d-flex justify-content-center align-items-center p-5">
          <h1
            style={{ fontSize: "35px", marginTop: "30px" }}
            className="cont-h1 "
          >
            Contact Me
          </h1>
        </div>
        <div className=" d-flex justify-content-center  align-items-center  ">
          <div
            style={{
              textAlign: "center",
              width: "700px",
            }}
            className=""
          >
            <p
              style={{ color: "#6e6b6b", fontSize: "20px" }}
              className=" content-p "
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur in nisi reprehenderit nobis unde quo, tempora sed
              delectus eligendi sint itaque quidem suscipit ipsa animi obcaecati
              tenetur nihil modi adipisci.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center m-5">
          <div className="ms-5">
            <a style={{textDecoration:"none",fontSize:'30px'}} href="">
            <i class="fa-brands fa-square-instagram fa-2xl"></i>
            </a>
          </div>
          <div className="ms-5">
            <a style={{textDecoration:"none",fontSize:'30px'}} href="">
            <i class="fa-solid fa-square-envelope fa-2xl"></i>
            </a>
          </div>
          <div className="ms-5">
            <a style={{textDecoration:"none",fontSize:'30px'}} href="">
            <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>
          </div>
          <div className="ms-5">
            <a style={{textDecoration:"none",fontSize:'30px'}} href="">
            <i class="fa-brands fa-square-github fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
