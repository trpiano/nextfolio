import {
    RiHome2Fill,
    RiUser2Fill,
    RiCodeBoxFill,
    RiBookmark3Fill,
    RiMailFill,
    RiBriefcase4Line
  } from "react-icons/ri";

interface MenuItemsType {
    href: string, 
    name: string;
    icon: React.ReactNode;
}

export const menuItems: MenuItemsType[] = [
    {   
        href: 'introduction',
        name: 'home',
        icon: <RiHome2Fill />,
    },
    {
        href: 'about', 
        name: 'about',
        icon: <RiUser2Fill />,
    },
    {
        href: 'skills',
        name: 'skills',
        icon: <RiBookmark3Fill />,
    },
    {
        href: 'career',
        name: 'career',
        icon: <RiBriefcase4Line />,
    },
    {   
        href: 'projects',
        name: 'projects',
        icon: <RiCodeBoxFill />,
    },
]