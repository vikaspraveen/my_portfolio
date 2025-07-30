import React from 'react'

function Home() {
  return (
    <div className='mainHome'>
        <div className="content">
            <p>Hey There !</p> <br />
            <h1>I'M VIKAS ANNEPU</h1>
            <h2> And I'am a Front-End  Developer</h2> <br />
            <p>Creative front-end developer skilled in crafting visually engaging and bruser-centric web interfaces.<br/> Experienced in translating design concepts into responsive layouts using modern HTML, CSS, and JavaScript frameworks.</p>
            <br />
            <div className="soc-media">

              <img src="src\assets\images\mediaLogo\facebook.png" alt=""  style={{height:'30px' , borderRadius:'50%'}}/>
              <img src="src\assets\images\mediaLogo\insta.png" alt=""  style={{height:'30px' , borderRadius:'50%'}}/>
              <img src="src\assets\images\mediaLogo\x.png" alt=""  style={{height:'30px' , borderRadius:'50%'}}/>
              <img src="src\assets\images\mediaLogo\linkedin.png" alt=""  style={{height:'30px' , borderRadius:'50%'}}/>

            </div><br />
           
            <button>Contact Me</button>
        </div>
        <div className="profileImg">
            <img src="src\assets\images\profile1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Home