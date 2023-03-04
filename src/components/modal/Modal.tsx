
import './Modal.scss'
import { ModalProps } from '../../types/project.type'
import { motion } from 'framer-motion'
import {showHideChild, showHide} from '../../pages/Home'
export default function Modal({ project, handleModal }: ModalProps) {
    
    console.log(project)
  return (
    <motion.div className='modal' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className='modal_container'>
      <div className='remove' onClick={handleModal}>X</div>
      <div className='modal_project'>
        <ul>
            <li>
                <img src={project.imgUrl} alt="" />
                <div>{project.name}</div>
            </li>
        </ul>
      </div>
      </div>
      
    </motion.div>
  )
}
