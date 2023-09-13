import { NavLink } from "react-router-dom";

import "./SidebarItem.css";

type SideBarItem = {
    iconStyles?: any;
    Icon?: any;
    text?: string;
    to?: any;
}

const SidebarItem = ({ iconStyles, Icon, text, to }: SideBarItem) => {
  return (
    <NavLink
      to={to}
      className="flex items-start px-10 text-white py-5 sidebarNav"
    >
      {Icon && <Icon size="25" className="mr-2" {...iconStyles} />}

      <span>{text}</span>
    </NavLink>
  );
};

export default SidebarItem;