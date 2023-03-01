import React from 'react'
import { useRecoilValue } from 'recoil';
import { recoilSkill } from './../store/skills';

export default function Skill() {
    const skills = useRecoilValue(recoilSkill)
  return (
    <div className='skill'>
        <div className="container">
            {skills.map((item)=>(
                <div>{item.name}</div>
            ))}
            
        </div>
    </div>
  )
}
