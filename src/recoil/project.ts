import { atom } from "recoil";
import { IProject } from "../types/project.type";
import MyProject1 from "../assets/project1.png";
import MyProject2 from "../assets/project2.png";
import MyProject3 from "../assets/project3.png";
import MyProject4 from "../assets/project4.png";
import MyProject5 from "../assets/project5.png";
import MyProjectChat from "../assets/project-chat.png";
import MyProject7 from "../assets/project-e.png";
import MyProject8 from "../assets/project_pofo.png";

export const recoilModal = atom({
  key: "recoilModal",
  default: false,
});

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
        "제가 공부한 기술을 적용하여 만든 작품으로, 이를 통해 제가 어떤 기술을 공부하고, 어떤 프로젝트를 진행해왔는지, 그리고 어떤 결과물을 만들어내는 능력이 있는지 보여주고자 합니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/portfolio",
      webUrl: "https://choiseokyoon.github.io/portfolio/",
      skill: ["Scss", "TypeScript", "React", "Recoil", "Swiper"],
      feeling: "",
    },
    {
      id: 2,
      imgUrl: MyProject3,
      name: "게시판 프로젝트",
      period: "진행중",
      tag: "Individual",
      descriptions: [
        "백엔드와 프론트가 어떤식으로 연동되는지 알아가기 위해 만든 프로젝트입니다.",
        "처음부터 기획한 프로젝트가 아니기 때문에 로그인 기능을 구현하고 이후에 기능을 하나씩 추가하는 방식으로 개발하는 중이고 이를 통해 단계적인 개발 과정을 경험하고 있습니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/react-express-login",
      skill: ["Scss", "React", "Recoil", "express", "mongoDB"],
      feeling: "",
    },
    {
      id: 3,
      imgUrl: MyProject2,
      name: "Food Recipe",
      period: "3주",
      tag: "Individual",
      descriptions: [
        "Food Recipe 프로젝트는 공공데이터 API를 사용하여 만든 프로젝트입니다. Recoil을 처음 적용한 프로젝트입니다.",
        "미디어쿼리를 이용하여 반응형으로 만들었습니다.",
        "localStorage를 사용하여 간단한 회원가입 기능을 만들었습니다",
        "Swiper와 Chart.js를 이용해여 페이지를 좀 더 꾸며냈습니다.",
        "검색 기능, 카테고리 및 페이지네이션 기능이 구현되어 있습니다. 사용자가 원하는 레시피를 쉽게 찾을 수 있습니다.",
        "다이어트 음식으로 추천하는 페이지와 디테일 페이지가 있습니다. 사용자는 건강한 식습관을 유지하면서 맛있는 음식을 만들 수 있습니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/FoodRecipe",
      webUrl: "https://choiseokyoon.github.io/FoodRecipe/",
      skill: ["Scss", "React", "Recoil", "localStorage", "Chart.js", "Swiper"],
      feeling: "",
    },

    {
      id: 4,
      imgUrl: MyProject4,
      name: "CartSohp",
      period: "14일",
      tag: "Individual",
      descriptions: [
        "CartShop 프로젝트는 OpenAPI를 사용하여 만들어진 쇼핑몰 프로젝트입니다.",
        "미디어쿼리와 useMediaQuery를 이용하여 반응형으로 만들었습니다.",
        "디테일페이지에서 담은 아이템을 카트에 추가하면 해당 아이템의 금액과 수량을 반영하여 표시합니다.",
        "props로만 만들었던 프로젝트를 Recoil를 추가 하여 상태관리와 jsx에서 TypeScript로 마이그레이션 했습니다."
      ],
      gitUrl: "https://github.com/choiSeokYoon/shopProject",
      webUrl: "https://choiseokyoon.github.io/shopProject/",
      skill: ["Scss", "React", "Recoil", "TypeScript"],
      feeling: "",
    },
    {
      id: 5,
      imgUrl: MyProject5,
      name: "TodoList(Clone)",
      tag: "Academy",
      descriptions: [
        "vue로 만든 Clone TodoList 입니다.",
        "데이터를 DB.JSON 파일을 만들어 API를 관리 했습니다.",
        "Vue에 장점인 양방향 바인딩에 대해서 배웠습니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/vue-todoapp-clone",
      skill: ["Vue"],
      feeling: "",
    },
    {
      id: 6,
      imgUrl: MyProject8,
      name: "Pofo(Clone)",
      period: "10일",
      tag: "Academy",
      descriptions: ["pofo 웹 사이트를 클론코딩한 프로젝트 입니다. "],
      gitUrl: "https://github.com/choiSeokYoon/pofo_clone",
      webUrl: "https://choiseokyoon.github.io/pofo_clone/",
      skill: ["Html", "Css", "jQuery"],
      feeling: "",
    },
    {
      id: 7,
      imgUrl: MyProject7,
      name: "경제배움e(clone)",
      period: "12일",
      tag: "Academy",
      descriptions: [
        "관공서의 웹사이트를 선택하여 클론한 웹사이트입니다.",
        "슬라이드를 구현했고 서브페이지도 제작 했습니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/first-project-e-learning",
      webUrl: "https://choiseokyoon.github.io/first-project-e-learning/",
      skill: ["Html", "Css", "Javascript", "jQuery"],
      feeling: "",
    },
    {
      id: 8,
      imgUrl: MyProjectChat,
      name: "myChat",
      period: "5일",
      tag: "Individual",
      descriptions: [
        "백엔드가 궁금해서 시작한 프로젝트이며 node교과서라는 책을 구입하여 공부하고 만든 채팅 웹 입니다.",
        "Socket.io를 이용하여 클라이언트와 서버 간에 실시간 통신을 구현하였습니다. 또한 Express 프레임워크를 이용하여 서버를 구축하였습니다.",
      ],
      gitUrl: "https://github.com/choiSeokYoon/node-soketio-chat",
      skill: ["Sass", "ejs", "express", "soket.io", "jQuery", "Javascript"],
    },
  ],
});
