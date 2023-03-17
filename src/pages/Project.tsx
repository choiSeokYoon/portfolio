import React from "react";
import "./Project.scss";
import Slide from "./../components/slide/Slide";
import { useRecoilValue } from "recoil";
import { recoilProjects } from "./../recoil/project";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { motion } from "framer-motion";
import { showHideChild, showHide } from "./Home";
import ImgBoder from "../assets/project_box.png"
export default function Project() {
  const projects = useRecoilValue(recoilProjects);
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState("ALL");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  //"downlevelIteration": true es5 이하의 자바스크립트로 변환(set)
  //tsconfig.json 갑자기 변환이 안돼서 Array.from 를 사용해서 set을 배열로 변환하고 확산 연산자로 가져옴
  const categories = [
    "ALL",
    ...new Set(Array.from(projects, (item) => item.tag)),
  ];

  const handleModal = (postId: number) => {
    setModal(!modal);
    setSelectedPostId(postId);
  };
  const handleClick = (idx: number) => {
    setActive(idx);
    setCategory(categories[idx]);
  };
  const filterCategory =
    category === "ALL"
      ? projects
      : projects.filter((item) => item.tag === category);

  return (
    <motion.div
      className="project"
      variants={showHide}
      initial="start"
      animate="end"
    >
      <motion.h1 className="title" variants={showHideChild}>
        PROJECT
      </motion.h1>
      <motion.div variants={showHideChild}>
        <Slide />
      </motion.div>
      <div className="container">
        <ul className="project_tab">
          {categories.map((catagory, idx) => (
            <li
              key={idx}
              className={idx === active ? "active" : ""}
              onClick={() => handleClick(idx)}
            >
              {catagory}
            </li>
          ))}
        </ul>
        <motion.ul className="project_list" variants={showHideChild}>
          {filterCategory.map((project) => (
            <React.Fragment key={project.id}>
              <li
                key={project.id}
                onClick={() => {
                  handleModal(project.id);
                }}
              >
                <div className="img_box">
                  <img src={project.imgUrl} alt="프로젝트 이미지"  className="project_img"/>
                  <img src={require("../assets/project_box.png")} alt="프로젝트 이미지 테두리" className="img_border"/>
                </div>
                <p className="img_text">click !</p>
              </li>
              {selectedPostId === project.id && modal && (
                <Modal project={project} handleModal={handleModal} />
              )}
            </React.Fragment>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
