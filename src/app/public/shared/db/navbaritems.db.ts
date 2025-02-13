


import { NavBarInterface } from "../models/nav-bar.interface";


export const navbarItems: NavBarInterface[] =  [
    {
        label: "NAV_BAR.BOUQUET_FLOWERS",
        routerLink: ["/ramos-flores-segovia"]
    },
    {
        label: "NAV_BAR.FLOORS",
        routerLink: ["/plantas-segovia"],
        subMenu: [
            {
                label: "NAV_BAR.SUBMENUS.ROUSES",
                routerLink: ["/rosas-segovia"]
            },
            {
                label: "NAV_BAR.SUBMENUS.ORCHIDS",
                routerLink: ["/orquideas-segovia"]
            },
            {
                label: "NAV_BAR.SUBMENUS.MORE",
                routerLink: ["/mas-flores-segovia"]
            }
        ]
    },
    {
        label: "NAV_BAR.TERRARIUMS",
        routerLink: ["/terrarios-segovia"]
    },
    {
        label: "NAV_BAR.WEDDING",
        routerLink: ["/bodas-eventos-segovia"]
    },
    {
        label: "NAV_BAR.FUNERAL",
        routerLink: ["/funerales-segovia"]
    },
    {
        label: "NAV_BAR.CONTACT",
        routerLink: ["/contact"]
    }
]