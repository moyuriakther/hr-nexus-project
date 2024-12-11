import { USER_ROLE } from "@/app/constants";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";
const user=getUserFromLocalStorage()
export   const noticeTableHeader = [
    "SI",
    "Notice type",
    "Description",
    "Notice date",
    "Notice by",
   `${user?.role === USER_ROLE.ADMIN ? "Action" : ""}`,
  ];

  export const noticeModalInputFiled= [
    {
      name: "noticeType",
      label: "Notice type",
      type: "text",
      placeholder: "Notice type",
      required: true,
    },
    {
      name: "description",
      label: "Notice description",
      type: "text",
      placeholder: "Notice description",
      required: true,
    },
    // {
    //   name: "noticeDate",
    //   label: "Notice date",
    //   type: "date",
    //   placeholder: "Notice date",
    //   required: true,
    // },
    // {
    //   name: "noticeAttachment",
    //   label: "Notice attachment",
    //   type: "file",
    //   placeholder: "Choose File",
    //   required: true,
    // },
    {
      name: "noticeBy",
      label: "Notice by",
      type: "text",
      placeholder: "Notice by",
      required: true,
    },
  ];