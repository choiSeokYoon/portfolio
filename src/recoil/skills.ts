import { atom } from "recoil";
import { ISkill, IToolSkill } from "../types/skill.type";
import javascriptImg from "../assets/skills/javascript_icon.png";
import expressImg from "../assets/skills/express_icon.png";
import githubImg from "../assets/skills/github_git_icon.png";
import mongoodbImg from "../assets/skills/mongo_icon.png";
import nodeImg from "../assets/skills/node_icon.png";
import postmanImg from "../assets/skills/postman_icon.png";
import reactImg from "../assets/skills/react_icon.png";
import sassImg from "../assets/skills/sass_icon.png";
import swiperImg from "../assets/skills/swiper_logo.png";
import typescriptImg from "../assets/skills/typescript_icon.png";
import vsCodeImg from "../assets/skills/visual_studio_code_icon.png";
import vueImg from "../assets/skills/vue_icon.png";
import recoilImg from "../assets/skills/recoil_icon.svg";
import jqueryImg from "../assets/skills/jquery_icon.png";
import styleComponentImg from "../assets/skills/style300.png"

export const recoilSkill = atom<ISkill[]>({
  key: "recoilSkill",
  default: [
    {
      name: "SASS",
      imgUrl: sassImg,
    },
    {
      name: "StyleComponent",
      imgUrl: styleComponentImg,
    },
    {
      name: "jquery",
      imgUrl: jqueryImg,
    },
    {
      name: "JAVASCRIPT",
      imgUrl: javascriptImg,
    },
    {
      name: "TYPESCRIPT",
      imgUrl: typescriptImg,
    },
    {
      name: "REACT",
      imgUrl: reactImg,
    },
    {
      name: "RECOIL",
      imgUrl: recoilImg,
    },
    {
      name: "NODE",
      imgUrl: nodeImg,
    },
    {
      name: "EXPRESS",
      imgUrl: expressImg,
    },
    {
      name: "MONGODB",
      imgUrl: mongoodbImg,
    },
    {
      name: "SWIPER",
      imgUrl: swiperImg,
    },
  ],
});

export const recoilTool = atom<IToolSkill[]>({
  key: "recoilTool",
  default: [
    {
      name: "GITHUB",
      imgUrl: githubImg,
    },
    {
      name: "VSCODE",
      imgUrl: vsCodeImg,
    },
    {
      name: "POSTMAN",
      imgUrl: postmanImg,
    },
  ],
});
