import {
  IconLayoutDashboard,
  IconMoodHappy,
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
    subheader: "EXTRA",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
];

export default Menuitems;
