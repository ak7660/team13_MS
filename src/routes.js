// import
import Dashboard from "views/Dashboard/Dashboard";
import EventsCalendar from "views/Dashboard/EventsCalendar";
import Tables from "views/Dashboard/Tables";
import Billing from "views/Dashboard/Billing";
import RTLPage from "views/Dashboard/RTL";
import Profile from "views/Dashboard/Profile";
import SignIn from "views/Auth/SignIn.js";
import SignUp from "views/Auth/SignUp.js";
import TaskDelegation from "views/Dashboard/TaskDelegation";
import Leaderboard from "views/Dashboard/Leaderboard";
import Analytics from "views/Dashboard/Analytics";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/homepage", // homepage
    name: "Homepage",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/events-dashboard",  // events calendar page - redirect to sign up for and for checking RSVP events
    name: "Events Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: EventsCalendar,
    layout: "/admin",
  },
  {
    path: "/leaderboard",  // leaderboard
    name: "Leaderboard",
    icon: <StatsIcon color="inherit" />,
    component: Leaderboard,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: <StatsIcon color="inherit" />,
  //   component: Tables,
  //   layout: "/admin",
  // },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   icon: <CreditIcon color="inherit" />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support-page",
  //   name: "RTL",
  //   icon: <SupportIcon color="inherit" />,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    name: "Admin Options",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/add-and-manage-events", // add and manage events
        name: "Add & Manage Events",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/task-delegation-system", // task delegation
        name: "Task Delegation System",
        icon: <DocumentIcon color="inherit" />,
        component: TaskDelegation,
        layout: "/admin",
      },
      {
        path: "/data-analytics-dashboard", // data analytics dashboard
        name: "Data Analytics Dashboard",
        icon: <RocketIcon color="inherit" />,
        component: Analytics,
        layout: "/admin",
      },
      {
        path: "/signin",  // sign in route
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",  // sign up route
        name: "Sign Up",
        icon: <RocketIcon color="inherit" />,
        secondaryNavbar: true,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];

export default dashRoutes;