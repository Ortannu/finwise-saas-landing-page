import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "100K+",
    icon: <BsBarChartFill size={34} className="text-blue-600" />,
    description: "Messages handled every day by AIOrchestrator bots."
  },
  {
    title: "4.9★",
    icon: <BsFillStarFill size={34} className="text-yellow-400" />,
    description: "Average rating from users and store owners."
  },
  {
    title: "100+",
    icon: <PiGlobeFill size={34} className="text-green-500" />,
    description: "Languages supported for instant translation."
  }
];
