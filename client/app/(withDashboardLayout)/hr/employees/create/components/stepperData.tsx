import { FaInfo, FaInfoCircle, FaKey, FaUser, FaUsers } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export const stepperData = [
  {
    name: "Basic info",
    icon: <FaUser className="lg:text-lg text-xs"/>,
  },
  {
    name: "Salary and bank info",
    icon: <FaKey className="lg:text-lg text-xs"/>,
  },
  {
    name: "Personal information",
    icon: <FaInfoCircle className="lg:text-lg text-xs"/>,
  },
  {
    name: "Biological info contact",
    icon: <MdContactMail className="lg:text-lg text-xs"/>,
  },
  {
    name: "Others",
    icon: <FaUsers className="lg:text-lg text-xs"/>,
  },
  {
    name: "Supervisor",
    icon: <FaInfo className="lg:text-lg text-xs"/>,
  },
];
