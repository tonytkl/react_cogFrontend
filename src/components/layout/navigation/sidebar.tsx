import { SidebarItem } from "./sidebarItem";
import {
  RiHomeLine,
  RiHomeFill,
  RiUserFollowLine,
  RiUserFollowFill,
  RiUserAddLine,
  RiUserAddFill,
  RiBookLine,
  RiBookFill,
  RiUserLine,
  RiUserFill,
} from "react-icons/ri";
import {
  IoFlagOutline,
  IoFlagSharp,
  IoDocumentTextOutline,
  IoDocumentText,
} from "react-icons/io5";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import {
  FaCalendar,
  FaRegCalendar,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa6";
import { MdOutlineVerifiedUser, MdVerifiedUser } from "react-icons/md";
import { getSdgColor } from "../../../utils/sdgColor";

type Props = {
  sdg: string;
};

const Sidebar = ({ sdg }: Props) => {
  const bgColor = getSdgColor(sdg, "100");
  return (
    <div
      className={`flex min-h-screen flex-col space-y-1 ${bgColor} p-1 lg:w-48 lg:p-4`}
    >
      <SidebarItem
        title="Home"
        link="/"
        icon={<RiHomeLine />}
        iconDark={<RiHomeFill />}
        sdg={sdg}
      />
      <SidebarItem
        title="Challenge"
        link="/challenge"
        icon={<IoFlagOutline />}
        iconDark={<IoFlagSharp />}
        sdg={sdg}
      />
      <SidebarItem
        title="Groups"
        link="/groups"
        icon={<BsPeople />}
        iconDark={<BsPeopleFill />}
        sdg={sdg}
      />
      <SidebarItem
        title="Followers"
        link="/follower"
        icon={<RiUserFollowLine />}
        iconDark={<RiUserFollowFill />}
        sdg={sdg}
      />
      <SidebarItem
        title="Following"
        link="/following"
        icon={<RiUserAddLine />}
        iconDark={<RiUserAddFill />}
        sdg={sdg}
      />
      <SidebarItem
        title="Event"
        link="/event"
        icon={<FaRegCalendar />}
        iconDark={<FaCalendar />}
        sdg={sdg}
      />
      <SidebarItem
        title="Learn"
        link="/learn"
        icon={<RiBookLine />}
        iconDark={<RiBookFill />}
        sdg={sdg}
      />
      <SidebarItem
        title="My Profile"
        link="/profile"
        icon={<RiUserLine />}
        iconDark={<RiUserFill />}
        sdg={sdg}
      />
      <SidebarItem
        title="Saved"
        link="/saved"
        icon={<FaRegBookmark />}
        iconDark={<FaBookmark />}
        sdg={sdg}
      />
      <SidebarItem
        title="Research Repository"
        link="/research"
        icon={<IoDocumentTextOutline />}
        iconDark={<IoDocumentText />}
        sdg={sdg}
      />
      <SidebarItem
        title="Verified Scientists"
        link="/scientists"
        icon={<MdOutlineVerifiedUser />}
        iconDark={<MdVerifiedUser />}
        sdg={sdg}
      />
    </div>
  );
};

export default Sidebar;
