export interface Personal {
    first: string;
    last: string;
    id: number;
    role: string;
    motto: string;
    socials: {name: string, link: string}[];
    contact: {};
}

export interface Projects {
    id: number;
    title: string;
    subtitle: string;
    image: {};
    link: string;
    description: string;
    tags: string[];
    footer: string;
}


