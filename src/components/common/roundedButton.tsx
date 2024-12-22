import { getSdgColor } from "../../utils/sdgColor";

type Props = {
  sdg: string;
  children: React.ReactNode;
};
export const RoundedButton = ({ sdg, children }: Props) => {
  const bgColor = getSdgColor(sdg, "200");
  return (
    <button
      className={`flex aspect-square h-8 items-center justify-center rounded-full md:h-10 lg:h-12 ${bgColor} transition-all hover:shadow-lg`}
    >
      {children}
    </button>
  );
};
