import { TSidebarMenus } from "@/app/types";
import {
  FaBell,
  FaCreditCard,
  FaHome,
  FaIndustry,
  FaNewspaper,
  FaPlane,
  FaStar,
  FaTasks,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GiTrophy } from "react-icons/gi";
import { HiBuildingLibrary } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";

export const Menus: TSidebarMenus[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHome className="text-[17px] text-gray-700" />,
  },

  {
    name: "Attendance",
    icon: <FaUser className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Attendance form",
        path: "/attendance_form",
      },
      {
        title: "Monthly attendance",
        path: "/monthly_attendance",
      },
      {
        title: "Missing attendance",
        path: "/missing_attendance",
      },
    ],
  },

  {
    name: "Award",
    icon: <GiTrophy className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Award list",
        path: "/award_list",
      },
    ],
  },

  {
    name: "Department",
    icon: <HiBuildingLibrary className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Department",
        path: "/department",
      },
      {
        title: "Sub department",
        path: "/sub_department",
      },
    ],
  },

  {
    name: "Employee",
    icon: <FaUsers className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Position",
        path: "/position",
      },
      {
        title: "Employee",
        path: "/employee",
      },
      {
        title: "Employee performance",
        path: "/employee_performance",
      },
    ],
  },

  {
    name: "Leave",
    icon: <FaPlane className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Weekly holiday",
        path: "/weekly_holiday",
      },
      {
        title: "Holiday",
        path: "/holiday",
      },
      {
        title: "Leave application",
        path: "/leave_application",
      },
    ],
  },

  {
    name: "Loan",
    icon: <FaCreditCard className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Loan list",
        path: "/Loan_list",
      },
    ],
  },

  {
    name: "Notice board",
    icon: <FaBell className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Notice",
        path: "/notice",
      },
    ],
  },

  {
    name: "Payroll",
    icon: <FaCreditCard className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Salary advance",
        path: "/salary_advance",
      },
      {
        title: "Salary generate",
        path: "/salary_generate",
      },
      {
        title: "Manage employee salary",
        path: "/manage_employee_salary",
      },
    ],
  },

  {
    name: "Procurement",
    icon: <FaIndustry className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Request",
        path: "/Request",
      },
      {
        title: "Quotation",
        path: "/Quotation",
      },
      {
        title: "Bid analysis",
        path: "/bid_analysis",
      },
      {
        title: "Purchase order",
        path: "/purchase_order",
      },
      {
        title: "Goods received",
        path: "/goods_received",
      },
      {
        title: "Vendors",
        path: "/vendors",
      },
      {
        title: "Committees",
        path: "/committees",
      },
      {
        title: "Units",
        path: "/units",
      },
    ],
  },

  {
    name: "Project management",
    icon: <FaTasks className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Client",
        path: "/client",
      },
      {
        title: "Projects",
        path: "/projects",
      },
      {
        title: "Manage tasks",
        path: "/manage_tasks",
      },
      {
        title: "Reports",
        path: "/reports",
      },
      {
        title: "Team members",
        path: "/team_members",
      },
    ],
  },

  {
    name: "Recruitment",
    icon: <FaNewspaper className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Candidate list",
        path: "/candidate_list",
      },
      {
        title: "Candidate shortlist",
        path: "/candidate_shortlist",
      },
      {
        title: "Interview",
        path: "/interview",
      },
      {
        title: "Candidate selection",
        path: "/candidate_selection",
      },
    ],
  },

  {
    name: "Reports",
    icon: <FaIndustry className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Attendance report",
        path: "/attendance_report",
      },
      {
        title: "Leave report",
        path: "/leave_report",
      },
      {
        title: "Employee reports",
        path: "/employee_reports",
      },
      {
        title: "Payroll",
        path: "/payroll",
      },
      {
        title: "Adhoc report",
        path: "/adhoc_report",
      },
    ],
  },

  {
    name: "Reward points",
    icon: <FaStar className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Point settings",
        path: "/point_settings",
      },
      {
        title: "Point categories",
        path: "/point_categories",
      },
      {
        title: "Management points",
        path: "/management_points",
      },
      {
        title: "Collaborative points",
        path: "/collaborative_points",
      },
      {
        title: "Attendance points",
        path: "/attendance_points",
      },
      {
        title: "Employee points",
        path: "/employee_points",
      },
    ],
  },

  {
    name: "Setup rules",
    icon: <FaMessage className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Rules",
        path: "/Rules",
      },
    ],
  },

  {
    name: "Settings",
    path: "/settings",
    icon: <IoIosSettings className="text-[17px] text-gray-700" />,
  },

  {
    name: "Message",
    icon: <FaMessage className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "New",
        path: "/new",
      },
      {
        title: "Inbox",
        path: "/inbox",
      },
      {
        title: "Sent",
        path: "/sent",
      },
    ],
  },
];
