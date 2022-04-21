export interface INote {
    id: number;
    title: string;
    content: string;
    category: string;
    created: string;
    active: boolean;
}
export interface INoteUpdate {
    title: string;
    content: string;
    category: string;
    created: string;
    active: boolean;
}