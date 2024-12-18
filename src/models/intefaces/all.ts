


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
    bathroom: number;
    vehicle_vacany: number;
    recreation_area: number;
    pools: number;
    size: number;
    price?: number;

    address: {
        street?: string;
        district?: string;
        city: string;
        state: string;
        number?: bigint;
    };
    category: {
        description: string;
    }
    type: {
        description: string;
    };
    Images: [
        {
            id: number;
            id_immobile: number;
            url: string;
        }
    ];
};

export interface ILeads {
    leads: number;
    label: string;
    sufix?: string;
    decimals?: number;
}