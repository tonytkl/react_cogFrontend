import { RiHeartAdd2Line } from "react-icons/ri";
import { MdMailOutline, MdNotificationsNone } from "react-icons/md";

import { getSdgColor } from "../../../utils/sdgColor";
import { RoundedButton } from "../../common/roundedButton";
import { Link } from "react-router";

type Props = {
  sdg: string;
};

const Topbar = ({ sdg }: Props) => {
  const bgColor_100 = getSdgColor(sdg, "100");
  const bgColor_600 = getSdgColor(sdg, "600");

  return (
    <div className={`flex p-2 md:p-3 lg:p-4 ${bgColor_100} w-full`}>
      <Link to="/">
        <img src="/full_logo.png" alt="logo" className="hidden h-12 lg:block" />
        <img src="/small_logo.png" alt="logo" className="h-12 lg:hidden" />
      </Link>

      <div className="grow"></div>
      <input
        type="text"
        placeholder="Search community of Guardians"
        className="lg:max-w-1/2 hidden grow rounded-full bg-white px-4 py-1 md:block"
      />
      <div className="grow"></div>

      <div className="flex items-center space-x-2">
        <button
          className={`ml-auto flex h-8 items-center justify-center rounded-full font-bold text-white hover:underline md:h-10 lg:h-12 ${bgColor_600} px-4 py-1 shadow-xl`}
        >
          <RiHeartAdd2Line className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6" />
          <p className="ml-2 hidden lg:block">Donate</p>
        </button>
        <RoundedButton sdg={sdg}>
          <MdMailOutline className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6" />
        </RoundedButton>
        <RoundedButton sdg={sdg}>
          <MdNotificationsNone className="h-3 w-3 md:h-4 md:w-4 lg:h-6 lg:w-6" />
        </RoundedButton>
        <RoundedButton sdg={sdg}>img</RoundedButton>
      </div>
    </div>
  );
};

export default Topbar;
