import { atom } from 'recoil';
import {IProject } from '../types/project.type'
import MyProject3 from '../assets/project3.png'
import MyProject4 from '../assets/project4.png'


export const recoilModal = atom({
    key:"recoilModal",
    default: false
})

export const recoilProjects = atom<IProject[]>({
    key: "recoilProjects",
    default: [
        {   
            id:1,
            imgUrl: MyProject3,
            name:"세번째 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            tag:"개인",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["React" , "recoil" , "express", "mongoDB"]
        },
        {
            id:2,
            imgUrl: MyProject3,
            name:"세번째 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            tag:"개인",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["React" , "recoil" , "express", "mongoDB"]
        },
        {
            id:3,
            imgUrl: MyProject3,
            name:"세번째 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            tag:"개인",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["React" , "recoil" , "express", "mongoDB"]
        },
        {
            id:4,
            imgUrl: MyProject3,
            name:"세번째 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            tag:"개인",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["React" , "recoil" , "express", "mongoDB"]
        },
        {
            id:5,
            imgUrl: MyProject4,
            name:"세번째 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            tag:"학원",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["React" , "recoil" , "express", "mongoDB"]
        },
        {
            id:6,
            imgUrl: MyProject3,
            name:"세번째 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            tag:"학원",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["React" , "recoil" , "express", "mongoDB"]
        },
    ]
})