import { About } from "../pages/about";
import { Home } from "../pages/home";

const router = Object.freeze([
    { name: "Home", path: "/", component: Home },
    { name: "About", path: "/about", component: About },
]);

export { router };