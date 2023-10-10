import React from "react";
import "./About.css";
import { Button, Card } from "react-bootstrap";
import ScrollToTopButton from "./ScrollToTopButton";

function About() {
  return (
    <>
      <div className="about-page p-5">
        <div className="content-container">
          <div className="left-div">
            <h1 className="left-side-h1 ps-4 ">About ME</h1>
            <p className="left-side-p">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              incidunt, hic ut soluta modi quasi ipsa blanditiis quae. Officia
              nesciunt earum aspernatur sapiente autem ea unde ad sequi tenetur
              in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Culpa, accusamus molestiae quasi voluptates rem nobis eligendi
              voluptas distinctio. Aliquid magni cumque labore similique
              dolorem, voluptatum hic sit qui illo quia.
            </p>
            <Button variant="secondary">Do</Button>
          </div>

          <div className="right-div">
            
            <div style={{marginTop:"140px"}} className="p-5">
              <Card  >
                <Card.Img   className="right-img img-fluid  w-100 "   src="https://www.theanimationguys.com/wp-content/uploads/2021/07/Asus_ZenCareAnimation_FinalPass_NoCaptions_003.mp4_snapshot_00.43_2021.07.13_10.42.55.png"  />
                
              </Card>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton/>
      
    </>
  );
}

export default About;
