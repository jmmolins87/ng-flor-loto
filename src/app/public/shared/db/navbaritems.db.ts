


import { NavBarInterface } from "../models/nav-bar.interface";


export const navbarItems: NavBarInterface[] =  [
    {
        label: "NAV_BAR.TERRARIUMS",
        routerLink: ["/terrariums"]
    },
    {
        label: "NAV_BAR.BOUQUET_ROSES",
        routerLink: ["/bouquetRoses"]
    },
    {
        label: "NAV_BAR.FLOORS",
        routerLink: ["/floors"],
        subMenu: [
            {
                label: "NAV_BAR.SUBMENUS.FLOORS_SUB",
                routerLink: ["/contact"]
            }
        ]
    },
    {
        label: "NAV_BAR.WEDDING",
        routerLink: ["/wedding"]
    },
    {
        label: "NAV_BAR.FUNERAL",
        routerLink: ["/funeral"]
    },
    {
        label: "NAV_BAR.CONTACT",
        routerLink: ["/contact"]
    }
]