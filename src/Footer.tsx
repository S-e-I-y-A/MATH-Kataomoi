import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img className="kumonosu" src="/public/kumonosu.png" />
      </div>
      <div className="names">
        <p>MATH-KATAOMOI</p>
        <ul>
          <li>JOU</li>
          <li>SEIYA</li>
          <li>KAINE</li>
          <li>RISA</li>
        </ul>
      </div>
      <div className="social-media"></div>
    </footer>
  );
};
export default Footer;
