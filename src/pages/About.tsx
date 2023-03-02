import './About.scss'
import { motion } from 'framer-motion'
import {showHideChild, showHide} from './Home'
import { useRecoilValue } from 'recoil';
import { recoilSkill, recoilTool } from './../store/skills';


export default function About() {
  const skills = useRecoilValue(recoilSkill)
  const tools = useRecoilValue(recoilTool)
  return (
    <div className='about'>
        <div className='container'>
          <motion.div className='about_box' variants={showHide} initial="start" animate="end">
            <div className='about_title' >
              <motion.h2 variants={showHideChild}>⚽ABOUT ME⚽</motion.h2>
            </div>
            <ul className='introduction'>
              <motion.li className='about_me' variants={showHideChild}>
                <h3 className='sub_title'>- about me</h3>
                <p>안녕하세요 저는 프론트엔드 개발자가 되고 싶은 최석윤입니다. 시간을 내어 제 포트폴리오를 봐주셔서 감사합니다.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </motion.li>
              <motion.li className='education' variants={showHideChild}>
                <h3 className='sub_title'>- education</h3>
                <p>대진대학교 2014.03 ~ 2016.02＃중퇴 (작곡과)</p>
                <p>학점은행제 2022.09 ~ //진행중 (컴퓨터 공학)</p>
                <p>국비학원 2022.10 ~ //진행중 </p>
              </motion.li>
              <motion.li variants={showHideChild}>
                <fieldset className='skill'>
                  <legend className='sub_title'>
                    skill
                  </legend>
                    <ul className='skill_box'>
                    {skills.map((skill, idx)=>(
                      <li key={idx}>
                        <img src={skill.imgUrl} alt="" />
                        <p>{skill.name}</p>
                      </li>
                      ))}
                    </ul>
                </fieldset>
              </motion.li>
              <motion.li variants={showHideChild}>
                <fieldset className='skill'>
                  <legend className='sub_title'>
                    tool
                  </legend>
                    <ul className='skill_box'>
                    {tools.map((tool,idx)=>(
                      <li key={idx}>
                        <img src={tool.imgUrl} alt="" />
                        <p>{tool.name}</p>
                      </li>
                      ))}
                    </ul>
                </fieldset>
              </motion.li>
            </ul>
            
          </motion.div>
          
        </div>
    </div>
  )
}
