import { atom } from 'recoil';
import {IProject } from '../types/project.type'
import MyProject1 from '../assets/project1.png'
import MyProject2 from '../assets/project2.png'
import MyProject3 from '../assets/project3.png'
import MyProject4 from '../assets/project4.png'
import MyProject5 from '../assets/project5.png'


export const recoilModal = atom({
    key:"recoilModal",
    default: false
})

export const recoilProjects = atom<IProject[]>({
    key: "recoilProjects",
    default: [
        {   
            id:1,
            imgUrl: MyProject1,
            name:"포트폴리오",
            period:"23.02.20 ~ 23.02.20",
            tag:"Individual",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["Scss","TypeScript","React" , "recoil"]
        },
        {
            id:2,
            imgUrl: MyProject3,
            name:"게시판 프로젝트",
            period:"23.02.20 ~ 23.02.20",
            tag:"Individual",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["Scss","React" , "Recoil" , "express", "mongoDB"]
        },
        {
            id:3,
            imgUrl: MyProject2,
            name:"Food Recipe",
            period:"23.02.20 ~ 23.02.20",
            tag:"Individual",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["Scss","TypeScript", "React" , "recoil"]
        },
        {
            id:4,
            imgUrl: MyProject4,
            name:"CartSohp",
            period:"23.02.20 ~ 23.02.20",
            tag:"Individual",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["Scss","React"]
        },
        {
            id:5,
            imgUrl: MyProject5,
            name:"TodoList(Clone)",
            period:"23.02.20 ~ 23.02.20",
            tag:"Academy",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["Vue"]
        },
        {
            id:6,
            imgUrl: MyProject3,
            name:"관공서",
            period:"23.02.20 ~ 23.02.20",
            tag:"Academy",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            skill:["Jqury"]
        },
    ]
})