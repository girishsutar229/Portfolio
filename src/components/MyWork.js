/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useEffect } from 'react'
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import logo11 from "../portfolio-images/11BookStore.png";
import logo21 from "../portfolio-images/24ContactBook.png";
import logo31 from "../portfolio-images/31Back-End.png";
import logo41 from "../portfolio-images/41TodoList.png";
import logo51 from "../portfolio-images/52weather.png";
import logo61 from "../portfolio-images/62stopwatch.png";

function MyWork() {
    useEffect(() => {
        // Initialize Bootstrap Carousels for auto-advancing
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            new window.bootstrap.Carousel(carousel, {
                interval: 4000, // Adjust the interval as needed (in milliseconds)
            });
        });
    }, []);
    return (
        <Fragment>
            <div className="col p-4">
                <div className="p-4 ">

                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2 slide-in-top">Something I've Built</h2>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={logo11} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <h5 className="ff-jose my-1">Book-Store App</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="#" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                                <a href="https://github.com/girishsutar229/Book-StoreApp" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><AiFillGithub /> Source Code</a>
                            </div>
                        </div>

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls2" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={logo21} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5 className="ff-jose my-1">ContactsBook</h5>
                                <div className="row d-flex justify-content-center">
                                    <a href="#" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                                    <a href="https://github.com/girishsutar229/ContactsBook" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><AiFillGithub /> Source Code</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls3" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={logo31} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <h5 className="ff-jose my-1">FoodApp_backend</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://girishsutar229.github.io/TodoList/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><BsLaptop /> NOT Watch Live</a>
                                <a href="https://github.com/girishsutar229/FoodApp_backend" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><AiFillGithub /> Source Code</a>
                            </div>
                        </div>

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls4" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={logo41} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <h5 className="ff-jose my-1">TodoList</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://girishsutar229.github.io/TodoList/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><BsLaptop /> Watch Live</a>
                                <a href="https://github.com/girishsutar229/TodoList" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><AiFillGithub /> Source Code</a>
                            </div>
                        </div>

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls5" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={logo51} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <h5 className="ff-jose my-1">WeatherApp</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://girishsutar229.github.io/WeatherApp/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><BsLaptop /> Watch Live</a>
                                <a href="https://github.com/girishsutar229/WeatherApp" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><AiFillGithub /> Source Code</a>
                            </div>
                        </div>

                        <div className="col-md-4 text-center my-2">
                            <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={logo61} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                            <h5 className="ff-jose my-1">Stopwatch</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://girishsutar229.github.io/Stop-watch/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><BsLaptop /> Watch Live</a>
                                <a href="https://github.com/girishsutar229/Stop-watch" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank" rel="noreferrer"><AiFillGithub /> Source Code</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default MyWork