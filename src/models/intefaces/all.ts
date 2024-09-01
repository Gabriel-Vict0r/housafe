


export interface IFilter {
    route: string;
    keys?: string[];
    tag: string[]
}

export interface IType {
    id: number;
    description: string;
    status?: string;

}

export interface IOportunities {
    urlImage: string;
    title: string;
    content: string;
}