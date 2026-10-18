export const mainNav = [
 {label: "Kryefaqja", href: "/"}, {label: "Klinika", href: "/about"}, {label: "Shërbimet", href: "/services"}, {label: "Vlerësimet", href: "/reviews"}, {label: "Kontakt", href: "/contact"},
] as const;
export const footerNav = {
 quickLinks: mainNav.slice(1),
 services: [{label: "Informacion për trajtimet", href: "/services"}, {label: "Rezervo një vizitë", href: "/contact"}],
 legal: [{label: "Privatësia", href: "/privacy-policy"}, {label: "Kushtet", href: "/terms"}],
};
