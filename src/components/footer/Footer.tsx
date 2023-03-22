import "./Footer.scss";
import gitImg from "../../assets/skills/github_git_icon.png";
import emailImg from "../../assets/email.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_box">
        <div className="sns">
          <a href="https://github.com/choiSeokYoon">
            <img src={gitImg} alt="" />
          </a>
          <a href="https://github.com/choiSeokYoon">
            <img src={emailImg} alt="" />
          </a>
        </div>
        <div className="copyright">© 2023 seoklike</div>
        <div className="madeby">Made by yoon with</div>
      </div>
    </footer>
  );
}
