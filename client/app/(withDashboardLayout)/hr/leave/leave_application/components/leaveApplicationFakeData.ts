export const fakeData = [
  {
    sl: 1,
    employeeName: "John Doe",
    type: "Sick Leave",
    applyDate: "2024-11-20",
    leaveStartDate: "2024-11-21",
    leaveEndDate: "2024-11-23",
    days: 3,
    reason: "Fever and cold",
    approvedDate: "2024-11-22",
    approvedStartDate: "2024-11-21",
    approvedEndDate: "2024-11-23",
    approvedDays: 3,
    hardCopy: true,
    manageComments: "Approved by HR",
    status: "Approved",
  },
  {
    sl: 2,
    employeeName: "Jane Smith",
    type: "Casual Leave",
    applyDate: "2024-11-15",
    leaveStartDate: "2024-11-25",
    leaveEndDate: "2024-11-26",
    days: 2,
    reason: "Personal work",
    approvedDate: "2024-11-18",
    approvedStartDate: "2024-11-25",
    approvedEndDate: "2024-11-26",
    approvedDays: 2,
    hardCopy: false,
    manageComments: "Leave approved",
    status: "Approved",
  },
  {
    sl: 3,
    employeeName: "Robert Brown",
    type: "Annual Leave",
    applyDate: "2024-11-10",
    leaveStartDate: "2024-12-01",
    leaveEndDate: "2024-12-15",
    days: 15,
    reason: "Vacation",
    approvedDate: null,
    approvedStartDate: null,
    approvedEndDate: null,
    approvedDays: 0,
    hardCopy: true,
    manageComments: "Pending approval",
    status: "Pending",
  },
  {
    sl: 4,
    employeeName: "Emily Johnson",
    type: "Maternity Leave",
    applyDate: "2024-10-01",
    leaveStartDate: "2024-11-01",
    leaveEndDate: "2025-01-31",
    days: 92,
    reason: "Maternity",
    approvedDate: "2024-10-15",
    approvedStartDate: "2024-11-01",
    approvedEndDate: "2025-01-31",
    approvedDays: 92,
    hardCopy: true,
    manageComments: "Approved as per policy",
    status: "Approved",
  },
  {
    sl: 5,
    employeeName: "Chris Evans",
    type: "Emergency Leave",
    applyDate: "2024-11-23",
    leaveStartDate: "2024-11-24",
    leaveEndDate: "2024-11-24",
    days: 1,
    reason: "Family emergency",
    approvedDate: null,
    approvedStartDate: null,
    approvedEndDate: null,
    approvedDays: 0,
    hardCopy: false,
    manageComments: "Awaiting manager approval",
    status: "Pending",
  },
];