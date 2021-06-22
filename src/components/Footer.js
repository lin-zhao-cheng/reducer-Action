import fb from '../images/fb-h.png';
import ig from '../images/ig-h.png';
import twr from '../images/twitter-h.png';
import flogo from '../images/foot-logo.png';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-social-area">
                <img src={fb} alt="fb" className="footer-social-icon"></img>
                <img src={ig} alt="ig" className="footer-social-icon"></img>
                <img src={twr} alt="twitter" className="footer-social-icon"></img>
            </div>
            <div className="footer-foot-area">
            <img src={flogo} alt="twitter" className="footer-foot-logo"></img>
            </div>
        </footer>           
    );
}