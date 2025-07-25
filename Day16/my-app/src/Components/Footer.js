import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../App.css";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <section className="companies">
                    <span>Microsoft</span>
                    <span>Google</span>
                    <span>Facebook</span>
                    <span>IBM</span>
                </section>
                <div className="bottom">
                    <p>Copyright &copy; MyStudio 2022</p>
                    <div className="social-icons">
                        <a href="https//www.x.com">
                            <FaTwitter />
                        </a>
                        <a href="https//www.facebook.com">
                            <FaFacebookF />
                        </a>
                        <a href="https//www.linkidin.com">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <p>Privacy Policy&nbsp;&nbsp;Terms Of Use</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer