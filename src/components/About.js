import React, { Fragment } from 'react'
import aboutLogo from "../images/nomad-amico.png";

function About() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center about-image"> 

            <div className="container">
                <div className="row">




                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div>
                            <h1 className="font-big text-red slide-in-top">About me</h1>
                            <hr></hr>
                            <p className='slide-in-bottom'>To obtain a position as a MERN Stack developer where I can utilize my programming skills and continue to learn and grow in a supportive and challenging environment. As a beginner in MERN Stack development, I am eager to gain hands-on experience with various technologies and frameworks to enhance my skills and contribute to the success of the company </p> <br/><br/>
                           
                            <p className='slide-in-bottom'>
                                <h4 className='text-red ls-2'>Achivement :</h4>
                                Solved more than 200+ Data Structure & Algorithm Problem from Various Platform: <b>leetcode, geeksforgeek, codingninjas</b>.<br/>This has honed my problem-solving skills and expanded my algorithmic knowledge across multiple languages and frameworks.
                            </p>
                            <br/><br/>
                            <p className='slide-in-bottom'>
                                <h4 className='text-red ls-2'>Area Of Interested :</h4>
                                <p> ● Frontend Development  , MERN Stack Development </p>
                                <p> ● Cricket  , Chess , Travelling  </p>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className="img-fluid" src={aboutLogo} alt="..."></img>
                    </div>



                </div>
            </div>

            
        </div>
    </Fragment>
  )
}

export default About