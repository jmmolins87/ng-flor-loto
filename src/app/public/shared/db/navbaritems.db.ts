


import { NavBarInterface } from "../models/nav-bar.interface";


export const navbarItems: NavBarInterface[] =  [
    {
        label: "NAV_BAR.BOUQUET_FLOWERS",
        routerLink: ["/bouquetflower"]
    },
    {
        label: "NAV_BAR.FLOORS",
        routerLink: ["/floors"],
        subMenu: [
            {
                label: "NAV_BAR.SUBMENUS.ROUSES",
                routerLink: ["/rouses"]
            },
            {
                label: "NAV_BAR.SUBMENUS.ORCHIDS",
                routerLink: ["/orchids"]
            },
            {
                label: "NAV_BAR.SUBMENUS.MORE",
                routerLink: ["/moreFloors"]
            }
        ]
    },
    {
        label: "NAV_BAR.TERRARIUMS",
        routerLink: ["/terrariums"]
    },
    {
        label: "NAV_BAR.WEDDING",
        routerLink: ["/wedding"]
    },
    {
        label: "NAV_BAR.FUNERAL",
        routerLink: ["/funerals"]
    },
    {
        label: "NAV_BAR.CONTACT",
        routerLink: ["/contact"]
    }
]