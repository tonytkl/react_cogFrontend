import { NavLink } from "react-router-dom";
import { getSdgColor } from "../../../utils/sdgColor";

type Props = {
  title: string;
  link: string;
  icon: React.ReactNode;
  iconDark: React.ReactNode;
  sdg: string;
};

export const SidebarItem = ({ title, link, icon, iconDark, sdg }: Props) => {
  let bgColor_600 = getSdgColor(sdg, "600");
  return (
    <NavLink to={link}>
      {({ isActive }) => (
        <div
          className={`flex items-center justify-center rounded border border-transparent p-2 lg:justify-start ${isActive ? bgColor_600 + " text-white" : ""}`}
        >
          {isActive ? iconDark : icon}
          <p className={`ml-2 hidden font-bold lg:block`}>{title}</p>
        </div>
      )}
    </NavLink>
  );
};
