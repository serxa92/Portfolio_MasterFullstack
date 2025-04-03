import "./style.css";
import { changeTheme } from "../components/Navbar";
import { linkPage } from "../utils/linkPage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Home } from "../pages/Home/Home";
import { Projects } from "../pages/Projects/Projects";
import { Divider } from "../components/Divider";
import { AboutMe } from "../pages/AboutMe/AboutMe";

const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homelink", Home);
linkPage("#projectslink", Projects);
linkPage("#aboutme", AboutMe);

Home();

changeTheme();

footer.insertAdjacentHTML("beforebegin", Divider());