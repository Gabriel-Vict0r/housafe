


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

export interface IImmobileItemProps {
    id: string;
    title: string;
    description: string;
    bedrooms: number;
    size: number;
    address: {
        city: string;
        state: string;
    };
    type: {
        description: string;
    };
    Images: [
        {
            id: string;
            url: string;
        },
    ]
}