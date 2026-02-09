import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconEdit,
  IconClipboardText,
  IconBuilding,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "HOME",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/dashboard",
  },

  {
    navlabel: true,
    subheader: "MY QUICK CRM",
  },
  {
    id: uniqueId(),
    title: "Quick Update",
    icon: IconEdit,
    href: "/quick-update",
  },
  {
    id: uniqueId(),
    title: "My Activities",
    icon: IconClipboardText,
    href: "/activities",
  },
  {
    id: uniqueId(),
    title: "My Accounts",
    icon: IconBuilding,
    href: "/accounts",
  },

  {
    navlabel: true,
    subheader: "SETTINGS",
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/demo-pages/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Shadow",
    icon: IconCopy,
    href: "/demo-pages/utilities/shadow",
  },

  {
    navlabel: true,
    subheader: "AUTH",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/demo-pages/authentication/login",
  },

  {
    navlabel: true,
    subheader: "EXTRA",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/demo-pages/sample-page",
  },
];

export default Menuitems;
