import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className="Footer">
          <ul className="FooterLinks">
            <li><a className="AppLink" href="#">À propos</a></li>
            <li><a className="AppLink" href="#">Projets</a></li>
            <li><a className="AppLink" href="#">Contact</a></li>
            <li><a className="AppLink" href="#">Mentions légales</a></li>
          </ul>
        </footer>
      );
}

export default Footer;