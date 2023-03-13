import "./About.scss";
import { motion } from "framer-motion";
import { showHideChild, showHide } from "./Home";
import { useRecoilValue } from "recoil";
import { recoilSkill, recoilTool } from "./../recoil/skills";

export default function About() {
  const skills = useRecoilValue(recoilSkill);
  const tools = useRecoilValue(recoilTool);
  return (
    <div className="about">
      <div className="container">
        <motion.div
          className="about_box"
          variants={showHide}
          initial="start"
          animate="end"
        >
          <div className="about_title">
            <motion.h2 variants={showHideChild}>⚽ABOUT ME⚽</motion.h2>
          </div>
          <ul className="introduction">
            <div className="about_text">
              <motion.li className="about_me" variants={showHideChild}>
                <h3 className="sub_title">- about me</h3>
                <div className="introduction_text">
                  <p>
                    안녕하세요 신입 개발자 최석윤 입니다. <br />
                    저는 어떤 기술이든 두려워하지 않고 도전하는 자세로 개발에 임합니다.<br />
                    React를 이용하여 웹 개발을 하고 있으며, 최근에는 node와 TypeScript에 관심을 가지고 있습니다.
                    프로젝트를 진행하면서 새로운 도전을 통해 사용하는 기술들을 좀 더 깊이 있게 배우고 활용하고 싶습니다.<br />
                    이러한 새로운 기술들을 익히면서 성장하는 모습을 보여드릴 수 있도록 노력하겠습니다.
                  </p>
                  <div>
                    <p>1995.06.06</p>
                    <p>tjrdbs5912@gmail.com</p>
                    <p>010-7469-6008</p>
                  </div>
                </div>
              </motion.li>
              <motion.li className="education" variants={showHideChild}>
                <h3 className="sub_title">- education</h3>
                <div className="education_text">
                  <p>대진대학교 2014.03 ~ 2016.02 //중퇴 (작곡과)</p>
                  <p>학점은행제 2022.09 ~ //진행중 (컴퓨터 공학)</p>
                  <p>국비학원 2022.10 ~ //진행중 </p>
                </div>

              </motion.li>
            </div>
            <motion.li variants={showHideChild}>
              <div className="tool">
                <h3>skill</h3>
                <ul>
                  {skills.map((skill, idx) => (
                    <li key={idx}>
                      <img src={skill.imgUrl} alt="스킬 아이콘" />
                      <p>{skill.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
            <motion.li variants={showHideChild}>
              <div className="skill">
                <h3>tool</h3>
                <ul>
                  {tools.map((tool, idx) => (
                    <li key={idx}>
                      <img src={tool.imgUrl} alt="툴 아이콘" />
                      <p>{tool.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
