import React from 'react'
import './Modal.scss'
import { ModalProps } from '../../types/project.type'
import { useRecoilValue } from 'recoil';
import { recoilProjects } from '../../store/project';
export default function Modal({ modal, handleModal }: ModalProps) {
    const project = useRecoilValue(recoilProjects)
  return (
    <div className='modal'>
      <div className='modal_container'>
      <div className='remove' onClick={handleModal}>X</div>
      <div className='modal_project'>
        <ul>
            <li>
                <img src="" alt="" />
            </li>
        </ul>
      </div>
      </div>
      
    </div>
  )
}
