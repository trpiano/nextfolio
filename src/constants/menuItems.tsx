import {
    RiHome2Fill,
    RiUser2Fill,
    RiCodeBoxFill,
    RiBookmark3Fill,
    RiMailFill,
    RiBriefcase4Line
  } from "react-icons/ri";

interface MenuItemsType {
    name: string;
    icon?: React.ReactNode | null;
}

export const menuItems: MenuItemsType[] = [
    {
        name: 'home',
        icon: <RiHome2Fill />,
    },
    {
        name: 'about',
        icon: <RiUser2Fill />,
    },
    {
        name: 'skills',
        icon: <RiBookmark3Fill />,
    },
    {
        name: 'projects',
        icon: <RiCodeBoxFill />,
    },
    {
        name: 'career',
        icon: <RiBriefcase4Line />,
    },
]