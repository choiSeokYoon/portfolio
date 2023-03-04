export interface IProject {
    id:number,
    imgUrl:string,
    name: string,
    period:string,
    tag:string,
    descriptions:string[],
    gitUrl:string,
    webUrl:string,
    skill:string[]
}

export interface ModalProps {
    handleModal: (postId: any) => void;
    project: IProject;
    
  }
