import React from 'react'

function About() {
  return (
    <div className="mainAbout">
      <div className="title-about">About Me</div>

      <div className="innerAbout">
      <img src="src\assets\images\profile.jpg" alt=""  style={{height:'300px'}}/>
      
      <div className="aboutPara">
          <p>I’m a passionate fresher web developer driven by curiosity and creativity. 
            My journey began with a fascination for building interactive, user-friendly websites using HTML, CSS, and JavaScript.
            I’ve developed personal projects that showcase my ability to translate ideas into responsive and functional designs. </p>
            <br />

            <p>I'm actively learning modern tools like React, Git, and Tailwind CSS to elevate my skills. Problem-solving excites me, and I enjoy diving into challenges that help me grow. 
            I value teamwork, open communication, and building web experiences that make a real difference.</p>
            <br />
            
            <p>My portfolio reflects attention to detail, adaptability, and a love for clean code.
            I’m exploring UI/UX principles to create accessible and inclusive designs. Constant learning and curiosity fuel my development journey.
            I’m eager to contribute, collaborate, and evolve in the dynamic world of web development!</p>
            <br />

            <a href="" style={{position:'absolute', left:'50%'}}><button>Download CV</button></a>
      </div>
      </div>
    </div>
  )
}

export default About