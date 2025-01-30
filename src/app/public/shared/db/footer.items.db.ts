


import { footerInterface } from "../models/footer.interface"


export const footerItemsPolicies: footerInterface[] = [
    {
        link: "/privacy-policy",
        label: "FOOTER.PRIVACITY"
    },
    {
        link: "/legal",
        label: "FOOTER.LEGAL"
    },
    {
        link: "/cookies",
        label: "FOOTER.COOKIES"
    }
]

export const footerItemsContact: footerInterface[] =[
    {
        label: "FOOTER.LOCATION",
        icon: "pi-map-marker",
        link: "https://www.google.de/maps?q=Paseo+CONDE+SEPULVEDA,+24,+40006+Segovia"
    },
    {
        label: "FOOTER.MAIL",
        icon: "pi-comments",
        link: "mailto:flordelotosegovia@gmail.com"
    },
    {
        label: "FOOTER.PHONE",
        icon: "pi-phone",
        link: "tel:+34691264112"
    }
]