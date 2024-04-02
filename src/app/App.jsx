import "./App.css";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
    return (
        <div className="coming_soon">
            <div>
                <h1>Coming Soon...</h1>
                <p>I'm currently working on creating this E-commerce website. This page is coming soon or might not exist. Please take a look at my portfolio for the time being</p>
                <a href="https://devraphael13.github.io/portfolio/">My Portfolio</a>
            </div>

            <div className="contacts">
                <a href="https://github.com/devRaphael13" target="_blank">
                    <FaGithub color="#9F8A59" size={18} />
                </a>
                <a href="mailto:raphael.ezeigwe@yahoo.com" target="_blank">
                    <MdEmail color="#9F8A59" size={18} />
                </a>
                <a href="tel:+2349035007417" target="_blank">
                    <FaPhone color="#9F8A59" size={18} />
                </a>
                <a href="https://www.linkedin.com/in/raphaelezeigwe/" target="_blank">
                    <FaLinkedin color="#9F8A59" size={18} />
                </a>
            </div>
        </div>
    );
}

export default App;
