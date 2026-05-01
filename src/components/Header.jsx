import { Bell, Search } from 'lucide-react';
import './Header.css';
const Header = () => (
  <header className="header">
    <div className="header-search">
      <Search size={16} className="search-icon" />
      <input type="text" placeholder="بحث عن طالب أو تقرير..." />
    </div>
    <div className="header-right">
      <button className="notif-btn"><Bell size={18} /><span className="notif-dot"></span></button>
      <div className="user-pill">
        <div className="user-av">أ</div>
        <span>د. أحمد النفسي</span>
      </div>
    </div>
  </header>
);
export default Header;
