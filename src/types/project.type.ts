export interface IProject {
    id:number,
    imgUrl:string,
    name: string,
    period:string,
    tag:string,
    descriptions:string[],
    gitUrl:string,
    skill:string[]
}

export interface ModalProps {
    modal: boolean;
    handleModal: () => void;
  }
