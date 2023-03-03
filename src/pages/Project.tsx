import './Project.scss'
import Slide from './../components/slide/Slide';
import { useRecoilValue } from 'recoil';
import { recoilProjects } from './../store/project';
import { useState } from 'react' 
import Modal from '../components/modal/Modal';




export default function Project() {
  const projects = useRecoilValue(recoilProjects);
  const [active, setActive] = useState(0)
  const [modal, setModal] = useState(false)
  const [post, setPost] = useState(null)
  const [category, setCategory] = useState("전체")
  //"downlevelIteration": true es5 이하의 자바스크립트로 변환(set)
 //tsconfig.json 갑자기 변환이 안돼서 Array.from 를 사용해서 set을 배열로 변환하고 확산 연산자로 가져옴
  const categories = ["전체", ...new Set(Array.from(projects, item => item.tag))]
  
  const handleModal = () => {
    setModal(!modal)
  }
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
            <li key={idx} onClick={()=>{handleModal()}}>
              <img src={project.imgUrl} alt="" />
            </li>
          ))}
        </ul>
        {modal && (
            <Modal modal={modal} handleModal={handleModal}/>
          )
        }
        
      </div>
    </div>
  )
}
