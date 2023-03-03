import './Project.scss'
import Slide from './../components/slide/Slide';
import { useRecoilValue } from 'recoil';
import { recoilProjects } from './../store/project';
import { useState } from 'react' 




export default function Project() {
  const projects = useRecoilValue(recoilProjects);
  const [active, setActive] = useState(0)
  const [category, setCategory] = useState("전체")
  //"downlevelIteration": true es5 이하의 자바스크립트로 변환(set)
  const categories  = ["전체", ...new Set(projects.map(item => item.tag))]
  
  const handleClick = (idx:number) => {
    setActive(idx)
    setCategory(categories[idx])
  }
  
  const filterCategory = 
  category === "전체"
    ? projects
    : projects.filter(item => item.tag === category)
    
  
  return (
    <div className='project'>
      <Slide/>
      <div className='container'>
        <ul className='project_tab'>
          {categories.map((catagory, idx)=>(
            <li
            key={idx} 
            className={idx === active ? 'active' : ""}
            onClick={()=> handleClick(idx)}>{catagory}</li>
          ))}
        </ul>
        <ul className='project_list'>
          {filterCategory.map((project, idx)=>(
            <li key={idx}>
              <img src={project.imgUrl} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
