export interface IWorksList {
    worksElementName: string;
}
export interface Props {
    worksElement: IWorksList;
    deleteWork(worksNameToDelete: string): void;
}