import Tool from "@/assets/images/address-card-solid.svg";
import Logout from "@/assets/images/arrow-right-from-bracket-solid.svg";
import About from "@/assets/images/award-solid.svg";
import Privacy from "@/assets/images/toolbox-solid.svg";
import wallet from "@/assets/images/wallet-solid.svg";

import Bar from "@/assets/images/bars-staggered-solid.svg";
import Chart from "@/assets/images/chart-column-solid.svg";
import Dashboard from "@/assets/images/slack-brands.svg";
import User from "@/assets/images/user-solid.svg";

export const DataMenuProfile = [
  {
    name: "Wallet",
    path: "Home",
    src: wallet,
  },
  {
    name: "Tool",
    path: "Home",
    src: Tool,
  },
  {
    name: "Privacy",
    path: "Home",
    src: Privacy,
  },
  {
    name: "About",
    path: "Home",
    src: About,
  },
  {
    name: "Logout",
    path: "Logout",
    src: Logout,
  },
];

export const DataMenuFooter = [
  {
    icon: Dashboard,
    pathName: "Home",
  },
  {
    icon: Chart,
    pathName: "Home",
  },
  {
    icon: Bar,
    pathName: "Home",
  },
  {
    icon: User,
    pathName: "Profile",
  },
];
