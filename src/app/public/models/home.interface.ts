



export interface HomePage {
    titlePage: string;
    subtitlePage: string;
    textPresentation: string;
    recomendationsHome: RecomendationsHome;
    opinionsSection: OpinionsSection;
}


interface RecomendationsHome {
    title: string;
    description: string;
    img: string;
}

interface OpinionsSection {
    name: string;
    description: string;
    image?: string[];
    rating?: number;
}