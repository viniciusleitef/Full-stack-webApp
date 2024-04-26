import "./HomePage.css"

import Header from "../../components/Header/Header"
import Button from "../../components/Button/Button"
import Card from "../../components/Card/Card"
import Footer from "../../components/Footer/Footer"

import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = ()=>{

    const navigate = useNavigate()
    const {logout} = useContext(AuthContext)
    const {auth} = useContext(AuthContext)
    const {userPersistence} = useContext(AuthContext)

    useEffect(() => {
       const token = decodeToken()
       const isLoged = userPersistence(token)
        
       if(isLoged === false) {
           alert("Sua sessão expirou")
           logout()
           navigate("/login")
        } 
      }, []);
    
    const handleLogout = ()=>{
        logout()
        console.log("logout")
    }

    const decodeToken = ()=>{
        const e = jwtDecode(auth)
        return e
    }

    return(
        <div className="main-home">
            <Header></Header>

            <section className="hero-section">
                <div className="container-hero">
                    <div className="container-hero-title-box">
                        <h1 className="container-hero-title">THIS IS VELOCITY</h1>
                    </div>

                    <div className="container-hero-subtitle-box">
                        <h2 className="container-hero-subtitle">A FREE RESPONSIVE TEMPLATE BY WEBFLOW</h2>
                    </div>

                    <div className="container-hero-buttons-box">
                        <Button 
                            backgroundColor="aqua"
                            border="none"
                            width="140"
                        >SIGN UP</Button>
                        <Button>LEARN MORE</Button>
                    </div>
                </div>
            </section>

            <section className="wwd-section">
                <div className="container-wwd-box">
                    <div className="container-wwd-header">
                        <h1 className="container-wwd-title">WHAT WE DO</h1>
                        <h2 className="container-wwd-subtitle">THIS IS SOME TEXT INSIDE OF A DIV BLOCK.</h2>
                    </div>

                    <div className="container-wwd-cards-box">
                        <Card 

                        directory="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef5ea_feather-15-white.svg"

                        title = "GRAPHIC DESIGN"

                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        
                        ></Card>
                        <Card 

                        directory="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef5d3_feather2-17-white.svg"

                        title = "AWESOME CODE"

                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."

                        ></Card>
                        <Card 

                        directory="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef5fb_feather2-22-white.svg"
                        
                        title = "FREE TEMPLATE"

                        text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."

                        ></Card>
                    </div>
                </div>
            </section>

            <section className="services-section">
                <div className="container-services">

                    <div className="container-services-header">

                        <div className="container-services-title-box">
                            <h1 className="container-services-title">SERVICES</h1>
                        </div>

                        <div className="container-services-subtitle-box"> 
                            <h2 className="container-services-subtitle">THIS IS SOME TEXT INSIDE OF A DIV BLOCK</h2>
                        </div>

                    </div>

                    <div className="container-services-photo-box">
                        <div className="container-services-service-box">
                            <img src="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef609_city-scape.jpg" alt="" className="container-services-photos"/>

                            <div className="container-services-photos-title-box">
                                <h2 className="container-services-service-title">
                                    SERVICE ONE
                                </h2>
                            </div>

                            <div className="container-services-photos-text-box">
                                <p className="container-services-service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam facere quod ex itaque vel iure ipsa, asperiores praesentium quas deserunt quidem maxime dolorum veritatis ut.</p>

                            </div>

                            <div className="container-services-service-button">
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>

                        <div className="container-services-service-box">
                            <img src="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef607_photo-1416400639808-f41f0c149b09.jpg" alt="" className="container-services-photos"/>

                            <div className="container-services-photos-title-box">
                                <h2 className="container-services-service-title">
                                    SERVICE ONE
                                </h2>
                            </div>

                            <div className="container-services-photos-text-box">
                                <p className="container-services-service-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam facere quod ex itaque vel iure ipsa, asperiores praesentium quas deserunt quidem maxime dolorum veritatis ut.</p>
                            </div>

                            <div className="container-services-service-button">
                                <Button>LEARN MORE</Button>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="tab-section"> 
                <div className="tab-container">

                    <div className="tab-header">
                        <div className="tab-text-box">
                            <div className="tab-header-title-box">
                                <h1 className="tab-header-title">TAB SECTION</h1>
                            </div>

                            <div className="tab-header-subtitle-bo">
                                <h2 className="tab-header-subtitle">THIS IS SOME TEXT INSIDE OF A DIV BLOCK</h2>
                            </div>
                        </div>

                        <div className="tab-header-buttons">
                            <Button>TAB BUTTON 1</Button>
                            <Button>TAB BUTTON 2</Button>
                            <Button>TAB BUTTON 3</Button>
                        </div>
                    </div>

                    <div className="tab-photo-box">
                        <img src="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef615_5cf8b62b.jpg" alt="" className="tab-photo"/>
                    </div>

                    <div className="tab-footer">
                        <div className="tab-footer-title-box">
                            <h2 className="tab-footer-title">Heading</h2>
                        </div>

                        <div className="tab-footer-text-box">
                            <p className="tab-footer-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam fugiat magni aliquid illum eveniet asperiores ab aut hic voluptate qui nihil esse consequuntur accusamus impedit sed, facere veniam, minus ducimus.</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer></Footer>
            <h1>Home Page</h1>
            <button onClick={handleLogout}>Sair</button>
        </div>
    )
}

