import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, MessageCircle, Lightbulb, AlertTriangle, LogOut, Brain } from 'lucide-react';
import { useAuth } from '../services/AuthContext';
import { alertsData } from '../data/mockData';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();
  const unreadAlerts = alertsData.filter(a => !a.read).length;
  const menuItems = [
    { name: 'لوحة التحكم', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'الطلاب', icon: <Users size={20} />, path: '/students' },
    { name: 'التقارير', icon: <FileText size={20} />, path: '/reports' },
    { name: 'الرسائل', icon: <MessageCircle size={20} />, path: '/messages' },
    { name: 'التوصيات', icon: <Lightbulb size={20} />, path: '/recommendations' },
    { name: 'التنبيهات', icon: <AlertTriangle size={20} />, path: '/alerts', badge: unreadAlerts },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Brain size={28} />
        <h1>عَلِّمْني</h1>
        <p>الأخصائي النفسي</p>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map((item, i) => (
          <NavLink key={i} to={item.path} end={item.path === '/'} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <span className="s-icon">{item.icon}</span>
            <span className="s-text">{item.name}</span>
            {item.badge > 0 && <span className="s-badge">{item.badge}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="sidebar-link logout-btn" onClick={logout}>
          <span className="s-icon"><LogOut size={20} /></span>
          <span className="s-text">تسجيل الخروج</span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
