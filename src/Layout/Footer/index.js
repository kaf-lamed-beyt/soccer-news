import React from "react";
import footStyle from "./style/footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={footStyle.footer}>
      <div className={footStyle.social}>
        <li>
          <FaTwitter /> Twitter
        </li>
        <li>
          <FaFacebookF /> Facebook
        </li>
      </div>

      <div className={footStyle.links}>
        <div className={footStyle.link_text}>
          <h3 className={footStyle.title}>Sky Sports</h3>
          <li>Get Sky Sports</li>
          <li>Sky Sports Apps</li>
          <li>Sportinglife.com</li>
          <li>TEAMtalk.com</li>
          <li>Footbal365.com</li>
        </div>

        <div className={footStyle.link_text}>
          <h3 className={footStyle.title}>Partners</h3>
          <li>Sky Bet</li>
          <li>Fantasy Football</li>
          <li>Super 6</li>
          <li>Planet Rugby</li>
          <li>Golf365</li>
          <li>Planet F1</li>
          <li>Cricket365</li>
        </div>

        <div className={footStyle.link_text}>
          <h3 className={footStyle.title}>Sky Sports Channels</h3>
          <li>Sky Sports Main Event</li>
          <li>Sky Sports Premier League</li>
          <li>Sky Sports Football</li>
          <li>Sky Sports Cricket</li>
          <li>Sky Sports Golf</li>
          <li>Sky Sports Racing</li>
          <li>Sky Sports F1</li>
          <li>Sky Sports NFL</li>
          <li>Sky Sports Arena</li>
          <li>Sky Sports News</li>
          <li>Sky Sports Mix</li>
        </div>

        <div className={footStyle.link_text}>
          <h3 className={footStyle.title}>More Sky Sites</h3>
          <li>Sky.com</li>
          <li>Sky News</li>
          <li>Sky Group</li>
          <li>Sky For Business</li>
          <li>NOW TV</li>
          <li>Sky Communal TV</li>
          <li>Bigger Picture</li>
          <li>Store Locator</li>
          <li>Work for Sky</li>
          <li>Advertise With US</li>
          <li>Sky TV Accessories</li>
        </div>
      </div>
      <div className={footStyle.rights}>
        <li>Terms & Conditions</li>
        <li>Privacy & Cookies Notice</li>
        <li>Privacy Options</li>
        <li>Accesibility Information</li>
        <li>Contact Us</li>
      </div>
      <div className={footStyle.foot_logo}>
          <li>
            <img src="/img/Sky-Sports-Logo.svg" alt="logo" />© 2020 Sky UK
          </li>
        </div>
    </footer>
  );
};

export default Footer;
