import { useState } from 'react';
import { AlertTriangle, CheckCircle, Eye, Info, Bell } from 'lucide-react';
import { alertsData as initialAlerts } from '../../data/mockData';
import './Alerts.css';

const Alerts = () => {
  const [alerts, setAlerts] = useState(initialAlerts);
  const markRead = (id) => setAlerts(alerts.map(a => a.id === id ? { ...a, read: true } : a));
  const markAllRead = () => setAlerts(alerts.map(a => ({ ...a, read: true })));

  const typeIcon = (type) => {
    if (type === 'critical') return <AlertTriangle size={20} color="var(--color-danger)" />;
    if (type === 'warning') return <Eye size={20} color="var(--color-warning)" />;
    return <Info size={20} color="var(--color-info)" />;
  };

  const typeBg = (type) => {
    if (type === 'critical') return 'var(--color-danger-light)';
    if (type === 'warning') return 'rgba(232,168,56,0.06)';
    return 'rgba(91,143,212,0.06)';
  };

  const unreadCount = alerts.filter(a => !a.read).length;

  return (
    <div className="alerts-page">
      <div className="page-header">
        <h2 className="page-title"><Bell size={24} />التنبيهات ({unreadCount} جديد)</h2>
        {unreadCount > 0 && <button className="btn btn-outline btn-sm" onClick={markAllRead}><CheckCircle size={14} />تحديد الكل كمقروء</button>}
      </div>
      <div className="alerts-list">
        {alerts.map(alert => (
          <div key={alert.id} className={`alert-card card ${!alert.read ? 'alert-unread' : ''}`} style={{ borderRight: `3px solid ${alert.type === 'critical' ? 'var(--color-danger)' : alert.type === 'warning' ? 'var(--color-warning)' : 'var(--color-info)'}` }} onClick={() => markRead(alert.id)}>
            <div className="ac-icon" style={{ background: typeBg(alert.type) }}>{typeIcon(alert.type)}</div>
            <div className="ac-body">
              <strong>{alert.studentName}</strong>
              <p>{alert.text}</p>
              <span className="ac-date">{alert.date}</span>
            </div>
            {!alert.read && <span className="ac-dot"></span>}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Alerts;
