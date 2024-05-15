
import { MdDashboard, MdPeopleAlt } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaIdCard } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { GiOpenBook } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { GrPersonalComputer } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { MdPayment } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { RiAdminLine } from "react-icons/ri";

type SidebarItemType = { 
  title: string; 
  path: string; 
  icon?: JSX.Element; 
  items?: Isubitem[]; 
}

type Isubitem= {
  title: string;
  path: string;
  icon?: JSX.Element
  items?: Isubsubitem[];
};

type Isubsubitem= {
  title: string;
  path: string;
};
export const items:SidebarItemType[]=[
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title:"Teacher",
    path:"/dashboard/taecher",
   icon:<GiTeacher/>,
   items:[
    {
      title:"Teacher's List",
      path:"/dashboard/teacher/teacher_list"
    },
   ]
  },
  { 
    title:"Student",
    path:"/dashboard/student",
    icon: <PiStudentFill/>,
    items:[
      {
        title:"Student List",
        path:"/dashboard/student/student_list",
      },
      {
        title:"Student Timetable",
        path:"/dashboard/student/student_timetable",
      },
      {
        title:"Student Attendance Report",
        path:"/dashboard/student/student_attendance_report",
      },
      {
        title:"Upload Certificates",
        path:"/dashboard/student/upload_certificates",
      },
      {
        title:"Student Quick View",
        path:"/dashboard/student/student_view",
      },
      {
        title:"Promotion Report",
        path:"/dashboard/student/promote_list",
      },
      {
        title:"Student Leave",
        path:"/dashboard/student/student_leave",
      },
      {
        title:"Student Leave Category",
        path:"/dashboard/student/student_leave_category",
      },
      {
        title:"Student Profile Photo Export",
        path:"/dashboard/student/student_photo_export",
      },
    ]

  },
  {
    title: "Admission Management",
    path: "/dashboard/Admission-Management",
    icon: <MdPeopleAlt />,
    items: [
      {
        title: "Admit Student",
        path: "/dashboard/Admission-Management/Admit-student",
      },
      {
        title: "Admission Request",
        path: "/dashboard/Admission-Management/Admission-request",
      },
      {
        title: "Admission Inquiries",
        path: "/dashboard/Admission-inquiries",
        items: [
          {
            title: "Manage Inquiries",
            path: "/dashboard/Admission-Management/Admission-inquiries/Manage-inquiries",
          },
          {
            title: "Send SMS To Inquiries",
            path: "/dashboard/Admission-Management/Admission-inquiries/Send-SMS",
          },
        ],
      },
      {
        title: "Print Admission Form",
        path: "/dashboard/Admission-Management/Print-Admission-Forms",
      },
    ],
  },
  {
    title: "Student Management",
    path: "/dashboard/Student-Management",
    icon: <PiStudentFill />,
    items: [
      {
        title: "Student Birthdays",
        path: "/dashboard/Student-Managemet/Student-Birthdays",
      },
      {
        title: "Student Information",
        path: "/dashboard/Student-Managemet/Student-information",
      },
      {
        title: "Student Promotion",
        path: "/dashboard/Student-Managemet/Student-Promotion",
      },
      {
        title: "Student Transfer",
        path: "/dashboard/Student-Managemet/Student-Transfer",
      },
    ],
  },
  {
    title: "Staff Management",
    path: "/dashboard/Staff-Management",
    icon: <MdPeopleAlt />,
  },
  {
    title: "ID Card Printing",
    path: "/dashboard/ID-card",
    icon: <FaIdCard />,
    items: [
      {
        title: "ID Card Settings",
        path: "/dashboard/ID-card/ID-card-settings",
      },
      {
        title: "ID Card Settings",
        path: "/dashboard/ID-card/Print-staff-card",
      },
      {
        title: "ID Card Settings",
        path: "/dashboard/ID-card/Print-student-card",
      },
    ],
  },
  {
    title: "Accountants",
    path: "/dashboard/Accountants",
    icon: <IoMdPerson />,
  },
  {
    title: "Parent Complaints",
    path: "/dashboard/Parent-Messages",
    icon: <FaInbox />,
  },
  {
    title: "Classes",
    path: "/dashboard/Classes",
    icon: <FaBuildingColumns />,
    items: [
      {
        title: "Mange Classes",
        path: "/dashboard/Classes/Manage-classes",
      },
      {
        title: "Manage Sections",
        path: "/dashboard/Classes/Manage-sections",
      },
    ],
  },
  {
    title: "Subjects",
    path: "/dashboard/Subjects",
    icon: <GiOpenBook />,
  },
  {
    title: "Manage Attendance",
    path: "/dashboard/Mange-attendance",
    icon: <GoGraph />,
    items: [
      {
        title: "Student Attendance",
        path: "/dashboard/Mange-attendance/Students-Attendance",
      },
      {
        title: "Staff Attendance",
        path: "/dashboard/Mange-attendance/Staff-Attendance",
      },
    ],
  },
  {
    title: "Online Classes",
    path: "/dashboard/Online-classes",
    icon: <GrPersonalComputer />,
  },
  {
    title: "Timetable Management",
    path: "/dashboard/Timetable-Management",
    icon: <SlCalender />,
  },
  {
    title: "Fee Payment",
    path: "/dashboard/Fee-payment",
    icon: <MdPayment />,
  },
  {
    title: "Admin",
    path: "/dashboard/admin",
    icon: <RiAdminLine/>,
  },
]