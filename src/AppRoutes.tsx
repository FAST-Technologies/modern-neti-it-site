// import ApiAuthorzationRoutes from './Components/Logic/API/ApiAuthorizationRoutes.tsx';
import Teams from "./Components/UI/Teams/Teams.tsx";
import AboutUs from "./Components/UI/AboutUs/AboutUs.tsx";
import InformationBlock from "./Components/UI/InformationBlock/InformationBlock.tsx";
import JoinUs from "./Components/UI/JoinUs/JoinUs.tsx";
import News from "./Components/UI/News/News.tsx";
import OurBlog from "./Components/UI/OurBlog/OurBlog.tsx";
import OurProjects from "./Components/UI/OurProjects/OurProjects.tsx";
import Repository from "./Components/UI/Repository/Repository.tsx";
import StartPage from "./Components/UI/StartPage/StartPage.tsx";


export interface routes {
    path?: string
    index?:boolean
    requireAuth?: boolean
    element: JSX.Element
}


const AppRoutes: routes[] = [
    {
        index: true,
        element: <Teams/>
    },
    {
        path: '/aboutus',
        requireAuth: false,
        element: <AboutUs/>
    },
    {
        path: '/information',
        requireAuth: false,
        element: <InformationBlock/>
    },
    {
        path: '/joinus',
        requireAuth: false,
        element: <JoinUs/>
    },
    {
        path: '/news',
        requireAuth: false,
        element: <News/>
    },
    {
        path: '/ourblog',
        requireAuth: false,
        element: <OurBlog/>
    },
    {
        path: '/ourprojects',
        requireAuth: false,
        element: <OurProjects/>
    },
    {
        path: '/repository',
        requireAuth: false,
        element: <Repository/>
    },
    {
        path: '/startpage',
        requireAuth: false,
        element: <StartPage/>
    },
    // {
    //     path: '/api',
    //     requireAuth: true,
    //     element: Proxy
    // },
    // ...ApiAuthorzationRoutes
];

export default AppRoutes;