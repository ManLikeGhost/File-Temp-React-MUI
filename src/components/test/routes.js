import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import AccountSettings from "../profile/accountSettings";
import ContentSection from "../profile/contentSection";



const routes = [
  {
    path: "/settings",
    name: "Account Settings",
    icon: Dashboard,
    component: AccountSettings,
    layout: "/profile"
  },
  {
    path: "/listings",
    name: "Content Section",
    icon: Person,
    component: ContentSection,
    layout: "/profile"
  },
  
  
];

export default routes;