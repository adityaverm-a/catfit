import Dashboard from "./Dasboard";
import Profile from "./Profile";
import Stats from "./Stats";

export const data = [
    {
        id: '1',
        title: 'Dashboard',
        component: Dashboard,
        route:'/me'
    },
    {
        id: '2',
        title: 'Habit Tracker',
        component: Stats,
        route:'/stat'
    },
    {
        id: '3',
        title: 'Profile',
        component: Profile,
        route:'/profile'
    },
]