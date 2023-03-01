import { atom } from 'recoil';
import {IProject } from '../types/project.type'
import MyProject3 from '../assets/project3.png'


export const recoilProjects = atom<IProject[]>({
    key: "recoilProjects",
    default: [
        {
            imgUrl: MyProject3,
            name:"세번째 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["React" , "recoil" , "express", "mongoDB"]
        }
    ]
})