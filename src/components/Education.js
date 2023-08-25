import React, { Fragment } from 'react'
import { SiCodingninjas, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';

function Education() {
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 bg-dark slide-in-top">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">Girish Suthar</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">

                            <h4 className="ff-jose ls-2">EDUCATION</h4>
                            <ul>
                                <li>
                                <h4 className="ff-jose my-1 text-red">BE - Information Technology </h4>
                                    

                                    <h6 className="blue-label px-2 py-1">2020 - 2024</h6>
                                    <a className='text-decoration-none' href="https://ldce.ac.in/" target="_blank" rel="noopener noreferrer">
                                    <p className="m-0 text-black"> <b> ⟟ </b> L.D. College oF Engineering, Ahmedabad  🎓</p>
                                    </a>
                                   
                                    <p>CGPA: 7.87</p>
                                </li>
                                <li>
                                       <h4 className="ff-jose my-1 text-red"> Higher Secondary School |Science Stream(PCM) </h4>
                                

                                    <h6 className="blue-label px-2 py-1">2018-2020</h6>
                                    <a className='text-decoration-none' href="https://www.facebook.com/Sankalpsos/" target="_blank" rel="noopener noreferrer">
                                    <p className="m-0 text-black"> <b> ⟟ </b> Sankalp School Of Scinece , Dhanera (385310) 🏫</p>
                                    </a>
                                    <p> Grade: 78.00 %</p>
                                </li>
                                <li>
                                <h4 className="ff-jose my-1 text-red">  Secondary School </h4>
                                
                                    <h6 className="blue-label px-2 py-1">2017-2018</h6>
                                    
                                    <a className='text-decoration-none' href="https://schools.org.in/banas-kantha/24020701411/vinayak-pri-sch.html" target="_blank" rel="noopener noreferrer">
                                    <p className="m-0 text-black">  <b> ⟟ </b>Shri Vinayak Secondary and Higher Secondary School , Dhanera 🏫</p>
                                    </a>
                                    <p className="m-0"></p>
                                    <p>Grade: 77.50 %</p>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                            <ul>
                                <li>
                                <h4 className="ff-jose my-1 text-red">TatvaSoft: Software Development Company </h4>
                                  
                                    <h6 className="blue-label px-2 py-1">July 2023 - August 2023</h6>
                                    <a className='text-decoration-none' href="https://www.tatvasoft.com/" target="_blank" rel="noopener noreferrer">
                                    <p className="m-0 text-black"> <b> ⟟ </b>TatvaSoft · Internship Trainee 🏢</p>
                                    </a>
                                    <p>Ahmedabad, Gujarat, India</p>
                                </li>
                                <li>
                                     <h4 className="ff-jose my-1 text-red">The Spark Foundation </h4>
                                    <h6 className="blue-label px-2 py-1">May 2023 - jun 2023</h6>
                                    <a className='text-decoration-none' href="https://www.thesparksfoundationsingapore.org/" target="_blank" rel="noopener noreferrer">
                                    <p className="m-0 text-black"><b> ⟟ </b>Intern · On-Site 🏢</p>
                                    </a>
                                    <p>Ahmedabad, Gujarat, India</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">PROFILE</h4>
                            <h1>
                                <a href="https://leetcode.com/girish1l/" target="/blank" className="text-warning mx-3">
                                    <SiLeetcode className="zoom-on-hover" />
                                </a>
                                <a href="https://www.codingninjas.com/studio/profile/43cfe81a-01eb-4fa7-b713-a030b47292bf" target="/blank" className="text-white  mx-3">
                                    <SiCodingninjas className="zoom-on-hover" />
                                </a>
                                <a href="https://auth.geeksforgeeks.org/user/girish1l/practice" className="text-success  mx-3">
                                    <SiGeeksforgeeks className="zoom-on-hover" />
                                </a>
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Education