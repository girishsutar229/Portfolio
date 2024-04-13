import React, { Fragment } from 'react'
import Typewriter from "typewriter-effect";
import homeLogo from "../images/demo.png";


function Home() {

  return (
    <Fragment>
      <div className="col py-3 d-flex align-items-center">

        <div className="container">

          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-col align-items-center">
              <div>
                <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                <h1 className="m-0 font-big animate-charcter">I'm Girish suthar,</h1><br />
                <div className="typewriter-wrapper">
  <Typewriter
    options={{
      strings: [
        "Front-end  Developer ....!💻 ",
        "Software Developer .....!🧑‍💻",
        "MERN Stack Developer....!🤖",
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
  />
</div>

                <div className='cv'>
                  <button variant="outline-dark text-primary"  >
                    <a className="mt-2  text-decoration-none" href="https://drive.google.com/file/d/17ZJ401wP-ls8tde2J9SJquYRTbmIfO7A/view?usp=sharing" target="_blank" rel="noreferrer"> My Resume</a>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid" src={homeLogo} alt="..."></img>
            </div>

          </div>

        </div>

      </div>
    </Fragment>
  )
}

export default Home
