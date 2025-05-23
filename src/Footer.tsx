import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>MATH-KATAOMOI</p>
      <ul>
        <li>
          <a href="#privacy">プライバシーポリシー</a>
        </li>
        <li>
          <a href="#contact">お問い合わせ</a>
        </li>
        <li>
          <a href="#sitemap">サイトマップ</a>
        </li>
      </ul>
      <div className="social-media"></div>
    </footer>
  );
};

export default Footer;
