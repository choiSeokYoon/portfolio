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
            period:"진행중",
            tag:"Individual",
            descriptions: [
                "저를 소개하는 포트폴리오 입니다.",
                "미디어쿼리를 이용해 반응형으로 만들었습니다.",
                
            ],
            gitUrl: "https://github.com/choiSeokYoon/portfolio",
            webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
            skill:["Scss","TypeScript","React" , "Recoil"]
        },
        {
            id:2,
            imgUrl: MyProject3,
            name:"게시판 프로젝트",
            period:"진행중",
            tag:"Individual",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
            skill:["Scss","React" , "Recoil" , "express", "mongoDB"]
        },
        {
            id:3,
            imgUrl: MyProject2,
            name:"Food Recipe",
            period:"14일",
            tag:"Individual",
            descriptions: [
                "미디어쿼리를 이용해 반응형으로 만들었습니다.",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/FoodRecipe",
            webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
            skill:["Scss","TypeScript", "React" , "Recoil"]
        },
        {
            id:4,
            imgUrl: MyProject4,
            name:"CartSohp",
            period:"14일",
            tag:"Individual",
            descriptions: [
                "미디어쿼리를 이용해 반응형으로 만들었습니다.",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/shopProject",
            webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
            skill:["Scss","React"]
        },
        {
            id:5,
            imgUrl: MyProject5,
            name:"TodoList(Clone)",
            period:"10일",
            tag:"Academy",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/vue-todoapp-clone",
            webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
            skill:["Vue"]
        },
        {
            id:6,
            imgUrl: MyProject3,
            name:"경제배움e (관공서)",
            period:"12일",
            tag:"Academy",
            descriptions: [
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
                "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구ㅈㅇㅁㄴㅇㅁㄴㅇ"
            ],
            gitUrl: "https://github.com/choiSeokYoon/react-express-login",
            webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
            skill:["Html","Css","Javascript","Jquery"]
        },
    ]
})