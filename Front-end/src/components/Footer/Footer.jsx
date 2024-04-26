import "./Footer.css"

function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-box">
                    <div className="footer-box-title-box">
                        <h2 className="footer-box-title">ABOUT VELOCITY</h2>
                    </div>

                    <div className="footer-box-text-box">
                        <p className="footer-box-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, nam itaque. Eum suscipit dolor repellat ipsa, maiores atque illo.</p>
                    </div>
                </div>
                

                <div className="footer-box">
                    <div className="footer-box-title-box">
                        <h2 className="footer-box-title">USEFUL LINKS</h2>
                    </div>

                    <div className="footer-links-box">
                        <p className="footer-links">Phasellus gravida semper nisi</p>
                    </div>

                    <div className="footer-links-box">
                        <p className="footer-links">Suspendisse nisl elit</p>
                    </div>

                    <div className="footer-links-box">
                        <p className="footer-links">Dellentesque habitant morbi</p>
                    </div>

                    <div className="footer-links-box">
                        <p className="footer-links">Etiam sollicitudin ipsum</p>
                    </div>
                                        
                </div>
                

                <div className="footer-box">
                    <div className="footer-box-title-box">
                        <h2 className="footer-box-title">SOCIAL</h2>
                    </div>

                    <div className="footer-links-container"> 
                        <img src="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef60c_social-18.svg" alt="" className="footer-icons"/>

                        <div className="footer-links-box">
                            <p className="footer-links">Twitter</p>
                        </div>
                    </div>

                    <div className="footer-links-container"> 
                        <img src="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef5ed_social-03.svg" alt="" className="footer-icons"/>

                        <div className="footer-links-box">
                            <p className="footer-links">Facebook</p>
                        </div>
                    </div>

                    <div className="footer-links-container"> 
                        <img src="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef5d4_social-11.svg" alt="" className="footer-icons"/>

                        <div className="footer-links-box">
                            <p className="footer-links">Pinterest</p>
                        </div>
                    </div>

                    <div className="footer-links-container"> 
                        <img src="https://uploads-ssl.webflow.com/66299680dc496505b6bef520/66299680dc496505b6bef5fe_social-06.svg" alt="" className="footer-icons"/>

                        <div className="footer-links-box">
                            <p className="footer-links">Google</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer