import moment from "moment";

export const allNotifications = [
  {
    id: 1,
    title: "New Message From Support",
    subtitle: "Ticket #58402 Has Been Updated",
    type: "message",
    color: "purple",
    isRead: false,
    time: "May 4, 2025 11:00:00 AM", //moment().subtract(2, "days").toISOString(),
    name: "Fombe Fri Eukeria",
  },
  {
    id: 2,
    title: "Daily Settlement Complete",
    subtitle: "₦350,000 credited to your business account.",
    type: "task",
    color: "green",
    isRead: false,
    time: "April 28, 2025 11:20:00 AM", // moment().subtract(10, "hours").toISOString(),
  },
  {
    id: 3,
    title: "Transaction Failed",
    subtitle:
      "Card Declined for 5,000 At Terminal GH39532 (Reasons Insufficient Funds).",
    type: "transaction",
    color: "red",
    isRead: false,
    time: "April 25, 2025 08:20:00 AM", //moment().subtract(2, "hours").toISOString(),
    name: "Quin Darlington",
  },
  {
    id: 4,
    title: "New User Added",
    subtitle: "Agent Ochei Funmilayo Has Been Added To Terminal LSJH525",
    type: "user-add",
    color: "green",
    isRead: true,
    time: "April 23, 2025 11:20:00 AM", //moment().subtract(7, "days").toISOString(),
    name: "Ochei Funmilayo",
  },
  {
    id: 5,
    title: "Terminal Disconnected",
    subtitle: "Terminal 3GSL303 Went Offline",
    type: "terminal",
    color: "red",
    isRead: false,
    time: "April 20, 2025 09:00:00 AM", // moment().subtract(1, "day").toISOString(),
    name: "Egbagbe Damilola",
  },
];

/*
  {
    "id": "2c5cf101-bcc0-41ca-b04d-4d669078eb6b",
    "user_id": "9e6042de-d90d-475e-a7cb-cb9f2dfa24a3",
    "title": "New Transaction",
    "message": "Withdrawal of NGN 30,000 successful",
    "data": {},
    "delivered_at": "2025-05-08T13:31:04.074Z",
    "type": "Withdrawal",
    "read": false,
    "created_at": "2025-05-08T13:31:04.074Z",
    "read_at": null
  },
  
  */

export function transformNotifications(notifications){
  return notifications.map(item => {
    return (
      {
        id: item.id,
        title: item.title,
        subtitle: item.message,
        type: item.type,
        isRead: item.read,
        time: item.created_at,
        recipient_id: item.user_id
      }
    )
  })
}
