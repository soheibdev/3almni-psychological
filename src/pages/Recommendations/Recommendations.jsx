import { Lightbulb, CheckCircle, Clock, AlertCircle, Users, GraduationCap } from 'lucide-react';
import { recommendationsData } from '../../data/mockData';
import './Recommendations.css';

const Recommendations = () => {
  const forParents = recommendationsData.filter(r => r.targetType === 'parent');
  const forTeachers = recommendationsData.filter(r => r.targetType === 'teacher');

  const statusIcon = (s) => s === 'مكتمل' ? <CheckCircle size={16} color="var(--color-success)" /> : s === 'قيد التنفيذ' ? <Clock size={16} color="var(--color-warning)" /> : <AlertCircle size={16} color="var(--color-danger)" />;
  const statusBadge = (s) => s === 'مكتمل' ? 'badge-success' : s === 'قيد التنفيذ' ? 'badge-warning' : 'badge-danger';

  const renderList = (items) => items.map(rec => (
    <div key={rec.id} className="rec-card card">
      <div className="rec-head">
        {statusIcon(rec.status)}
        <div className="rec-info"><strong>{rec.studentName}</strong><span>إلى: {rec.targetName}</span></div>
        <span className={`badge ${statusBadge(rec.status)}`}>{rec.status}</span>
      </div>
      <p className="rec-text">{rec.text}</p>
      <div className="rec-foot"><span className={`badge ${rec.priority === 'عالي' ? 'badge-danger' : 'badge-info'}`}>أولوية: {rec.priority}</span><span className="rec-date">{rec.date}</span></div>
    </div>
  ));

  return (
    <div className="rec-page">
      <h2 className="page-title"><Lightbulb size={24} />التوصيات والإرشادات</h2>
      <div className="rec-grid">
        <div><h3><Users size={18} />نصائح لأولياء الأمور</h3>{renderList(forParents)}</div>
        <div><h3><GraduationCap size={18} />تعليمات للمعلمين</h3>{renderList(forTeachers)}</div>
      </div>
    </div>
  );
};
export default Recommendations;
