import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './Layout.css';
const Layout = () => (<div className="app-layout"><Sidebar /><div className="main-area"><Header /><main className="main-content"><Outlet /></main></div></div>);
export default Layout;
