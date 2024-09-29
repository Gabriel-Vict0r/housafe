


export interface IFilter {
    route: string;
    keys?: string[];
    tag: string[]
}

export interface IType {
    id?: number;
    description?: string;
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

export interface ISocialMedia {
    url: string;
    icon: React.ReactElement;
    name: string;
}


export interface ILink {
    label: string;
    link: string;
}
export interface ILinksFooter {
    title: string;
    arrayLinks: ILink[];
}
export interface ImmobileProps {
    id: string;
    title: string;
    description: string;
    bedrooms: number;
    size: number;
    address: {
        city: string;
        state: string;
    };
    category: {
        description: string;
    }
    type: {
        description: string;
    };
    Images: [
        {
            id: string;
            url: string;
        }
    ];
};