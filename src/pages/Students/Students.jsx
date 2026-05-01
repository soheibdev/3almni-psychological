import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, Eye, AlertTriangle, Shield } from 'lucide-react';
import { studentsData } from '../../data/mockData';
import './Students.css';

const Students = () => {
  const nav = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const filtered = studentsData.filter(s => {
    const matchSearch = s.name.includes(search);
    if (filter === 'all') return matchSearch;
    if (filter === 'critical') return matchSearch && s.riskLevel === 'عالي';
    if (filter === 'watch') return matchSearch && s.riskLevel === 'متوسط';
    return matchSearch && s.riskLevel === 'منخفض';
  });

  const riskBadge = (level) => {
    if (level === 'عالي') return <span className="badge badge-danger"><AlertTriangle size={12} />عالي</span>;
    if (level === 'متوسط') return <span className="badge badge-warning"><Eye size={12} />متوسط</span>;
    return <span className="badge badge-success"><Shield size={12} />منخفض</span>;
  };

  return (
    <div className="students-page">
      <h2 className="page-title"><Users size={24} />الطلاب تحت المراقبة</h2>
      <div className="students-toolbar">
        <div className="search-box"><Search size={16} className="sb-icon" /><input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="بحث بالاسم..." /></div>
        <div className="filter-tabs">
          <button className={`ftab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>الكل ({studentsData.length})</button>
          <button className={`ftab ${filter === 'critical' ? 'active' : ''}`} onClick={() => setFilter('critical')}>حرج ({studentsData.filter(s => s.riskLevel === 'عالي').length})</button>
          <button className={`ftab ${filter === 'watch' ? 'active' : ''}`} onClick={() => setFilter('watch')}>متابعة ({studentsData.filter(s => s.riskLevel === 'متوسط').length})</button>
          <button className={`ftab ${filter === 'stable' ? 'active' : ''}`} onClick={() => setFilter('stable')}>مستقر ({studentsData.filter(s => s.riskLevel === 'منخفض').length})</button>
        </div>
      </div>
      <div className="students-grid">
        {filtered.map(s => (
          <div key={s.id} className={`student-card card risk-${s.riskLevel === 'عالي' ? 'high' : s.riskLevel === 'متوسط' ? 'med' : 'low'}`} onClick={() => nav(`/students/${s.id}`)}>
            <div className="sc-header">
              <div className="sc-avatar">{s.avatar}</div>
              <div className="sc-name"><h4>{s.name}</h4><span>{s.level} • {s.age} سنوات</span></div>
              {riskBadge(s.riskLevel)}
            </div>
            <div className="sc-meters">
              <div className="sc-meter"><span>الانتباه</span><div className="sc-bar"><div style={{ width: `${s.psychology.attention}%`, background: 'var(--color-primary)' }}></div></div><span className="sc-pct">{s.psychology.attention}%</span></div>
              <div className="sc-meter"><span>الدافعية</span><div className="sc-bar"><div style={{ width: `${s.psychology.motivation}%`, background: 'var(--color-accent)' }}></div></div><span className="sc-pct">{s.psychology.motivation}%</span></div>
              <div className="sc-meter"><span>العاطفي</span><div className="sc-bar"><div style={{ width: `${s.psychology.emotional}%`, background: 'var(--color-warning)' }}></div></div><span className="sc-pct">{s.psychology.emotional}%</span></div>
            </div>
            <div className="sc-footer"><span>{s.sessions.length} جلسات</span><span className="sc-status">{s.status}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Students;
