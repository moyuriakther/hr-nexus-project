import { TSidebarMenus } from "@/app/types";
import { GrProjects } from "react-icons/gr";
import { MdArticle } from "react-icons/md";

export const Menus: TSidebarMenus[] = [
  {
    name: "Project-Management",
    icon: <GrProjects className="text-xl" />,
    children: [
      {
        title: "Dashboard",
        path: "/dashboard",
      },
      {
        title: "Blog",
        path: "/attendance",
      },
    ],
  },

  {
    name: "Phone-Management",
    icon: <MdArticle className="text-xl" />,
    children: [
      {
        title: "Project",
        path: "/ashboard",
      },
      {
        title: "Award",
        path: "/award",
      },
    ],
  },

  {
    name: "Department",
    icon: <MdArticle className="text-xl" />,
    children: [
      {
        title: "Project",
        path: "/ashboard",
      },
      {
        title: "Award",
        path: "/award",
      },
    ],
  },

  {
    name: "Employee",
    icon: <MdArticle className="text-xl" />,
    children: [
      {
        title: "Project",
        path: "/ashboard",
      },
      {
        title: "Award",
        path: "/award",
      },
    ],
  },

  {
    name: "Leave",
    icon: <MdArticle className="text-xl" />,
    children: [
      {
        title: "Project",
        path: "/ashboard",
      },
      {
        title: "Award",
        path: "/award",
      },
    ],
  },

  {
    name: "Loan",
    icon: <MdArticle className="text-xl" />,
    children: [
      {
        title: "Project",
        path: "/ashboard",
      },
      {
        title: "Award",
        path: "/award",
      },
      {
        title: "Project",
        path: "/ashboard",
      },
      {
        title: "Award",
        path: "/award",
      },
    ],
  },
];
