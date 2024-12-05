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

export const employeesMenu: TSidebarMenus[] = [
  {
    name: "Attendance",
    icon: <FaUser className="text-[17px] text-gray-700" />,
    children: [
      // {
      //   title: "Attendance form",
      //   path: "/hr/attendances/create",
      // },
      {
        title: "Attendance List",
        path: "/hr/attendances/attendance-list",
      },
      {
        title: "Daily attendance",
        path: "/hr/attendances/create/daily",
      },
    ],
  },
  {
    name: "Leave",
    icon: <FaPlane className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Weekly holiday",
        path: "/hr/leave/weekly_holiday",
      },
      {
        title: "Holiday",
        path: "/hr/leave/holiday",
      },
      {
        title: "Leave application",
        path: "/hr/leave/leave_application",
      },
    ],
  },
  {
    name: "Project management",
    icon: <FaTasks className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Client",
        path: "/hr/Project_management/client",
      },
      {
        title: "Projects",
        path: "/hr/Project_management/projects",
      },
      {
        title: "Manage tasks",
        path: "/hr/Project_management/manage_tasks",
      },
      {
        title: "Reports",
        path: "/hr/Project_management/reports",
      },
      {
        title: "Team members",
        path: "/hr/Project_management/team_members",
      },
    ],
  },

  {
    name: "Recruitment",
    icon: <FaNewspaper className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Candidate list",
        path: "/hr/recruitment/candidate_list",
      },
      {
        title: "Candidate shortlist",
        path: "/hr/recruitment/candidate_shortlist",
      },
      {
        title: "Interview",
        path: "/hr/recruitment/interview",
      },
      {
        title: "Candidate selection",
        path: "/hr/recruitment/candidate_selection",
      },
    ],
  },
];

export const Menus: TSidebarMenus[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaHome className="text-[17px] text-gray-700" />,
  },

  {
    name: "Award",
    icon: <GiTrophy className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Award list",
        path: "/hr/award/award_list",
      },
    ],
  },

  {
    name: "Department",
    icon: <HiBuildingLibrary className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Department",
        path: "/hr/department/department",
      },
      {
        title: "Sub department",
        path: "/hr/department/sub_department",
      },
    ],
  },

  {
    name: "Employee",
    icon: <FaUsers className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Position",
        path: "/hr/employees/position",
      },
      {
        title: "Employee",
        path: "/hr/employees/employee",
      },
      {
        title: "Employee performance",
        path: "/hr/employees/employee_performance",
      },
    ],
  },

  {
    name: "Loan",
    icon: <FaCreditCard className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Loan list",
        path: "/hr/loan",
      },
    ],
  },

  {
    name: "Notice board",
    icon: <FaBell className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Notice",
        path: "/hr/notice_board/notice",
      },
    ],
  },

  {
    name: "Payroll",
    icon: <FaCreditCard className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Salary advance",
        path: "/hr/payroll/salary_advance",
      },
      {
        title: "Salary generate",
        path: "/hr/payroll/salary_generate",
      },
      {
        title: "Manage employee salary",
        path: "/hr/payroll/manage_employee_salary",
      },
    ],
  },
  {
    name: "Project management",
    icon: <FaTasks className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Client",
        path: "/hr/Project_management/client",
      },
      {
        title: "Projects",
        path: "/hr/Project_management/projects",
      },
      {
        title: "Manage tasks",
        path: "/hr/Project_management/manage_tasks",
      },
      {
        title: "Reports",
        path: "/hr/Project_management/reports",
      },
      {
        title: "Team members",
        path: "/hr/Project_management/team_members",
      },
    ],
  },

  {
    name: "Procurement",
    icon: <FaIndustry className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Request",
        path: "/hr/procurement/Request",
      },
      {
        title: "Quotation",
        path: "/hr/procurement/quotation",
      },
      {
        title: "Bid analysis",
        path: "/hr/procurement/bid_analysis",
      },
      {
        title: "Purchase order",
        path: "/hr/procurement/purchase_order",
      },
      {
        title: "Goods received",
        path: "/hr/procurement/goods_received",
      },
      {
        title: "Vendors",
        path: "/hr/procurement/vendors",
      },
      {
        title: "Committees",
        path: "/hr/procurement/committees",
      },
      {
        title: "Units",
        path: "/hr/procurement/units",
      },
    ],
  },

  {
    name: "Reports",
    icon: <FaIndustry className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Attendance report",
        path: "/hr/reports/attendance-report",
      },
      {
        title: "Leave report",
        path: "/hr/reports/leave-report",
      },
      {
        title: "Employee reports",
        path: "/hr/reports/employee-reports",
      },
    ],
  },

  {
    name: "Reward points",
    icon: <FaStar className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Point settings",
        path: "/hr/reward_points/point_settings",
      },
      {
        title: "Point categories",
        path: "/hr/reward_points/point_categories",
      },
      {
        title: "Management points",
        path: "/hr/reward_points/management_points",
      },
      {
        title: "Collaborative points",
        path: "/hr/reward_points/collaborative_points",
      },
      {
        title: "Attendance points",
        path: "/hr/reward_points/attendance_points",
      },
      {
        title: "Employee points",
        path: "/hr/reward_points/employee_points",
      },
    ],
  },

  {
    name: "Recruitment",
    icon: <FaNewspaper className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Candidate list",
        path: "/hr/recruitment/candidate_list",
      },
      {
        title: "Candidate shortlist",
        path: "/hr/recruitment/candidate_shortlist",
      },
      {
        title: "Interview",
        path: "/hr/recruitment/interview",
      },
      {
        title: "Candidate selection",
        path: "/hr/recruitment/candidate_selection",
      },
    ],
  },

  {
    name: "Setup rules",
    icon: <FaMessage className="text-[17px] text-gray-700" />,
    children: [
      {
        title: "Rules",
        path: "hr/setup_rules/rules",
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
