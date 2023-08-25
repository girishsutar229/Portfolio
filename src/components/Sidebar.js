import React, { Fragment } from 'react'
import { VscHome } from 'react-icons/vsc'
import { FiUser } from 'react-icons/fi'
import { BsCode } from 'react-icons/bs'
import { MdOutlineDashboard, MdOutlineContactPage, MdEmail } from 'react-icons/md'
import { AiFillLinkedin, AiFillGithub, AiOutlineUnorderedList, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <Fragment>


            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-2 bg-dark slide-in-left">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-3 text-black min-vh-100">
                    <Link to="/Portfolio" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline ff-jost fw-600"><b>Girish suthar</b></span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/Portfolio" className="nav-link align-middle px-2 text-black">
                                <VscHome className='fs-5' /> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link align-middle px-2 text-black">
                                <FiUser className='fs-5' /> <span className="ms-1 d-none d-sm-inline ">About</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link align-middle px-2 text-black">
                                <BsCode className='fs-5' /> <span className="ms-1 d-none d-sm-inline ">Skills</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mywork" className="nav-link align-middle px-2 text-black">
                                <MdOutlineDashboard className='fs-5' /> <span className="ms-1 d-none d-sm-inline ">My Work</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Education" className="nav-link align-middle px-2 text-black">
                                <AiOutlineUnorderedList className='fs-5' /> <span className="ms-1 d-none d-sm-inline ">Education</span>
                            </NavLink>
                        </li>
                        <li className=" nav-item nav-link align-middle px-2 text-black dropdown">
                            <a href="/" className="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <MdOutlineContactPage className='fs-5' />
                                <span className="d-none d-sm-inline mx-1">Contact</span>
                            </a>
                            <ul className="dropdown-menu shadow" aria-labelledby="dropdownUser1">
                                <li><a className="dropdown-item text-black" href="mailto:girishstudy124@email.com" target="/blank"><MdEmail className='fs-5' /> Email</a></li>
                                <li> <hr className="dropdown-divider" /> </li>
                                <li><a className="dropdown-item text-black" href="https://www.linkedin.com/in/girish-suthar-85a7b71ba/" target="/blank"><AiFillLinkedin className='fs-5' /> LinkedIn</a></li>
                                <li> <hr className="dropdown-divider" /> </li>
                                <li><a className="dropdown-item text-black" href="https://github.com/girishsutar229" target="/blank"><AiFillGithub className='fs-5' /> Github</a></li>
                                <li> <hr className="dropdown-divider" /> </li>
                                <li><a className="dropdown-item text-black" href="https://www.facebook.com/girish1l/" target="/blank"><AiFillFacebook className='fs-5' /> Facebook</a></li>
                                <li> <hr className="dropdown-divider" /> </li>
                                <li><a className="dropdown-item text-black" href="https://www.instagram.com/girish1l/" target="/blank"><AiFillInstagram className='fs-5' /> Instagram</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
                
            </div>

        </Fragment>
    )
}

export default Sidebar