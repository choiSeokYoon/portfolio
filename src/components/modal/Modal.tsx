
import './Modal.scss'
import { ModalProps } from '../../types/project.type'
import { motion } from 'framer-motion'
export default function Modal({ project, handleModal }: ModalProps) {
    
    
  return (
    <motion.div className='modal' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='modal_container'>
        <div className='remove' onClick={handleModal}>X</div>
        <div className='modal_project'>
          
          <div className='modal_left'>
              <img src={project.imgUrl} alt="프로젝트 이미지" />
          </div>
          <div className='madal_right'>
            <div className='modal_title'>
                <h3>{project.name}</h3>
            </div>
            <div className='modal_period'>
                <h3>기간: {project.period}</h3>
            </div>
            <div className='modal_skill'>
              <h4>사용한 기술:</h4>
              <div>
                {project.skill.map((skill,idx)=>(
                    <p key={idx}>{skill}</p>
                ))}
              </div>
            </div>
            <div className='modal_descriptions'>
              <h3>설명</h3>
              {project.descriptions.map((description,idx)=>(
                <p key={idx}>{description}</p>
              ))}
            </div>
            <div className='modal_url'>
              git: <a href={project.gitUrl}>{project.gitUrl}</a><br />
              url: <a href={project.webUrl}>{project.webUrl}</a>
            </div>
          </div>
          
          
        </div>
      </div>
      
    </motion.div>
  )
}
