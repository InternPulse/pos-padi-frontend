import { Stack } from "@chakra-ui/react";

//Icons

import { LuLayoutDashboard, LuScrollText } from "react-icons/lu";
import { IoPeopleOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { GiSwipeCard } from "react-icons/gi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { GoGear } from "react-icons/go";

//Utilities
import NavButton from "./NavButton";
import { NavLink, useLocation } from "react-router-dom";

function Navigation({ userRole }) {
  const currentPath = useLocation().pathname;

  const navItems = [
    {
      icon: <LuLayoutDashboard />,
      text: "Dashboard",
      destination: "/dashboard",
      authorizedGroup: ["admin", "agent"],
    },
    {
      icon: <LuScrollText />,
      text: "Transactions",
      destination: "/transactions",
      authorizedGroup: ["admin", "agent"],
    },
    {
      icon: <IoPeopleOutline />,
      text: "Agents",
      destination: "/agents",
      authorizedGroup: ["admin"],
    },
    {
      icon: <GrGroup />,
      text: "Customers",
      destination: "/customers",
      authorizedGroup: ["admin", "agent"],
    },
    {
      icon: <GiSwipeCard />,
      text: "Terminals",
      destination: "/terminals",
      authorizedGroup: ["admin"],
    },
    {
      icon: <RiQuestionnaireLine />,
      text: "Disputes",
      destination: "/disputes",
      authorizedGroup: ["admin", "agent"],
    },
    {
      icon: <GoGear />,
      text: "Settings",
      destination: "/settings",
      authorizedGroup: ["admin", "agent"],
    },
  ];

  return (
    <Stack direction={"column"}>
      {navItems
        .filter((navItem) => navItem.authorizedGroup.includes(userRole))
        .map((navItem) => {
          return (
            <NavLink to={navItem.destination}>
              <NavButton
                text={navItem.text}
                icon={navItem.icon}
                isSelected={currentPath.includes(navItem.text.toLowerCase())}
              />
            </NavLink>
          );
        })}
    </Stack>
  );
}

export default Navigation;
