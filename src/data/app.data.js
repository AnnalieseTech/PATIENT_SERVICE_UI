import { AiFillHome } from "react-icons/ai";
import { SiReasonstudios } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserNurse } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";

export const notificationData = [
  {
    id: 1,
    text: "New Patient Registration",
    time: "1 minute ago",
    url: "/",
    avatar: "/static/img/upload.jpeg",
    alt: "item 1",
  },
];

export const sideListItems = [
  { id: 1, text: "Home", icon: <AiFillHome size={24} /> },
  { id: 2, text: "Patients", icon: <FaUsers size={24} /> },
  { id: 3, text: "Hospitals", icon: <FaRegHospital size={24} /> },
  { id: 4, text: "Physicians", icon: <FaUserDoctor size={24} /> },
  { id: 5, text: "Nurses", icon: <FaUserNurse size={24} /> },
  { id: 6, text: "Appointments", icon: <RiCalendarScheduleLine size={24} /> },
];

export const userProfileItems = [
  { id: 1, text: "Sign out", icon: <SiReasonstudios size={24} /> },
  { id: 2, divider: true },
];
