



export interface NavBarInterface {
    label: string;
    routerLink: string[];
    subMenu?: SubMenuInterface[];
}

interface SubMenuInterface {
    label: string;
    routerLink: string [];
}