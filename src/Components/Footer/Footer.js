import logo from "../../Assets/Images/logo.svg";
import classes from "./Footer.module.scss";
import facebook from "../../Assets/Images/facebook.svg";
import twitter from "../../Assets/Images/twitter.svg";
import instagram from "../../Assets/Images/instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_container}>
        <img src={logo} alt="Logo" />
        <nav>
          <ul className={classes.footer_links}>
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/headphones">
              <li>headphones</li>
            </Link>
            <Link to="/speakers">
              <li>speakers</li>
            </Link>
            <Link to="/earphones">
              <li>earphones</li>
            </Link>
          </ul>
        </nav>
        <p className={classes.footer_text}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className={classes.footer_copyright}>
          Copyright 2022. All Rights Reserved
        </p>
        <nav>
          <ul className={classes.footer_iconContainer}>
            <li>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <img src={twitter} alt="Twitter icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/">
                <img src={instagram} alt="Instagram icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
