import { atom } from 'recoil';
import {IProject } from '../types/project.type'
import MyProject1 from '../assets/project1.png'
import MyProject2 from '../assets/project2.png'
import MyProject3 from '../assets/project3.png'
import MyProject4 from '../assets/project4.png'
import MyProject5 from '../assets/project5.png'
import MyProjectChat from '../assets/project-chat.png'


export const recoilModal = atom({
    key:"recoilModal",
    default: false
})

export const recoilProjects = atom<IProject[]>({
  key: "recoilProjects",
  default: [
    {
        id: 1,
        imgUrl: MyProject1,
        name: "포트폴리오",
        period: "5일",
        tag: "Individual",
        descriptions: [
        "저를 소개하는 포트폴리오 프로젝트입니다.",
        "Typescript를 공부하고 처음으로 적용한 프로젝트이며 반응형 으로 제작되었습니다.",
        "제가 공부한 기술을 적용하여 만든 작품으로, 저를 소개하는 포트폴리오로서 제작되었습니다.",
        "이를 통해 제가 어떤 기술을 공부하고, 어떤 프로젝트를 진행해왔는지, 그리고 어떤 결과물을 만들어내는 능력이 있는지 보여주고자 합니다."
        ],
        gitUrl: "https://github.com/choiSeokYoon/portfolio",
        webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
          skill: ["Scss", "TypeScript", "React", "Recoil", "Swiper"],
        feeling:""
    },
    {
      id: 2,
      imgUrl: MyProject3,
      name: "게시판 프로젝트",
      period: "진행중",
      tag: "Individual",
      descriptions: [
          "백엔드와 프론트가 어떤식으로 연동되는지 알아가기 위해 만든 프로젝트입니다.",
          "처음부터 기획한 프로젝트가 아니기 때문에 로그인 기능을 구현하고 이후에 기능을 하나씩 추가하는 방식으로 개발하는 중이고 이를 통해 단계적인 개발 과정을 경험하고 있습니다."
      ],
      gitUrl: "https://github.com/choiSeokYoon/react-express-login",
      webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
        skill: ["Scss", "React", "Recoil", "express", "mongoDB"],
      feeling:"",
    },
    {
      id: 3,
      imgUrl: MyProject2,
      name: "Food Recipe",
      period: "14일",
      tag: "Individual",
      descriptions: [
        "이 프로젝트는 공공데이터 API를 사용하여 만든 프로젝트입니다. Recoil을 사용하여 상태 관리를 구현하는데 사용되었습니다.",
        "미디어쿼리를 이용하여 반응형으로 만들어졌습니다.",
        "검색 기능, 카테고리 및 페이지네이션 기능이 구현되어 있습니다. 이를 통해 사용자가 원하는 레시피를 쉽게 찾을 수 있습니다.",
        "데이터에서 열량이 낮은 순으로 다이어트 음식으로 추천하는 페이지와 디테일 페이지가 있습니다. 이를 통해 사용자는 건강한 식습관을 유지하면서 맛있는 음식을 만들 수 있습니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/FoodRecipe",
      webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
        skill: ["Scss", "React", "Recoil", "Swiper"],
      feeling:"",
      },
    
    {
      id: 4,
      imgUrl: MyProject4,
      name: "CartSohp",
      period: "14일",
      tag: "Individual",
      descriptions: [
        "CartShop 프로젝트는 OpenAPI를 사용하여 만들어진 쇼핑몰 프로젝트입니다.",
        "미디어쿼리를 이용하여 반응형으로 만들어졌습니다.",
        "또한 디테일 페이지에서 담은 아이템을 카트에 추가하면 해당 아이템의 금액과 수량을 반영하여 표시합니다.",
        "이 프로젝트에서는 카테고리를 만들어서 이미 존재하는 API 주소와 연동하여 사용했습니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/shopProject",
      webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
        skill: ["Scss", "React"],
      feeling:"",
    },
    {
      id: 5,
      imgUrl: MyProject5,
      name: "TodoList(Clone)",
      period: "10일",
      tag: "Academy",
      descriptions: [
        "vue로 만든 Clone TodoList 입니다.",
        "서버 없이 데이터를 ",
        
      ],
      gitUrl: "https://github.com/choiSeokYoon/vue-todoapp-clone",
      webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
        skill: ["Vue"],
      feeling:""
      },
    {
      id: 6,
      imgUrl: MyProject3,
      name: "Pofo(Clone)",
      period: "10일",
      tag: "Academy",
      descriptions: [
        "pofo 웹 사이트를 클론코딩한 프로젝트 입니다. "
        
      ],
      gitUrl: "https://github.com/choiSeokYoon/vue-todoapp-clone",
      webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
        skill: ["Vue"],
      feeling:"",
    },
    {
      id: 7,
      imgUrl: MyProject3,
      name: "경제배움e (관공서)",
      period: "12일",
      tag: "Academy",
      descriptions: [
        "관공서의 웹사이트를 선택하여 jQuery를 이용하여 똑같이 구현한 웹사이트입니다.",
        ],
      gitUrl: "https://github.com/choiSeokYoon/react-express-login",
      webUrl: "https://github.com/choiSeokYoon/choiSeokYoon",
      skill: ["Html", "Css", "Javascript", "Jquery"],
      feeling:"",
      },
    {
      id: 8,
      imgUrl: MyProjectChat,
      name: "myChat",
      period: "6일",
      tag: "Individual",
      descriptions: [
          "node교과서라는 책을 통해 공부하고 만든 채팅 웹 입니다.",
          " WebSocket을 이용하여 클라이언트와 서버 간에 실시간 통신을 구현하였습니다. 또한 Express 프레임워크를 이용하여 서버를 구축하였습니다."
      ],
      gitUrl: "https://github.com/choiSeokYoon/react-express-login",
      webUrl: "",
        skill: ["Sass", "ejs" , "express", "soket.io"],
      feeling:"jQuery를 이용한 웹사이트 구현에 대한 경험과 이해를 높이고, 웹사이트 디자인 및 구현 능력을 향상시켰습니다.",
    },
  ],
});