import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Users, AlertTriangle, FileText, Activity, TrendingUp, Eye, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { studentsData, alertsData, reportsData, emotionalTrend, behaviorTrend } from '../../data/mockData';
import './Dashboard.css';

const Dashboard = () => {
  const nav = useNavigate();
  const totalStudents = studentsData.length;
  const needAttention = studentsData.filter(s => s.riskLevel !== 'منخفض').length;
  const criticalAlerts = alertsData.filter(a => !a.read).length;
  const totalReports = reportsData.length;

  return (
    <div className="dash-page">
      <h2 className="page-title"><Activity size={24} />لوحة التحكم</h2>

      {/* KPI Row */}
      <div className="kpi-row">
        <div className="kpi card"><div className="kpi-ic" style={{ background: 'rgba(74,111,165,0.1)' }}><Users size={22} color="var(--color-primary)" /></div><div className="kpi-val">{totalStudents}</div><div className="kpi-lbl">طلاب تحت المراقبة</div></div>
        <div className="kpi card"><div className="kpi-ic" style={{ background: 'rgba(232,168,56,0.1)' }}><Eye size={22} color="var(--color-warning)" /></div><div className="kpi-val">{needAttention}</div><div className="kpi-lbl">يحتاجون متابعة</div></div>
        <div className="kpi card"><div className="kpi-ic" style={{ background: 'var(--color-danger-light)' }}><AlertTriangle size={22} color="var(--color-danger)" /></div><div className="kpi-val">{criticalAlerts}</div><div className="kpi-lbl">تنبيهات نشطة</div></div>
        <div className="kpi card"><div className="kpi-ic" style={{ background: 'rgba(76,175,125,0.1)' }}><FileText size={22} color="var(--color-success)" /></div><div className="kpi-val">{totalReports}</div><div className="kpi-lbl">تقارير منجزة</div></div>
      </div>

      {/* Charts Row */}
      <div className="charts-row">
        <div className="card chart-card">
          <h3><TrendingUp size={18} />الاتجاه العاطفي (أسبوعي)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={emotionalTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="week" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip />
              <Area type="monotone" dataKey="avg" stroke="var(--color-primary)" fill="rgba(74,111,165,0.15)" strokeWidth={2.5} name="المتوسط العاطفي" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="card chart-card">
          <h3>التغيرات السلوكية</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={behaviorTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="week" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="positive" fill="var(--color-accent)" radius={[4,4,0,0]} name="إيجابي" barSize={24} />
              <Bar dataKey="negative" fill="var(--color-danger)" radius={[4,4,0,0]} name="سلبي" barSize={24} opacity={0.6} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="bottom-grid">
        {/* Active Alerts */}
        <div className="card">
          <div className="section-header"><h3><AlertTriangle size={18} />تنبيهات مهمة</h3><button className="btn btn-outline btn-sm" onClick={() => nav('/alerts')}>عرض الكل</button></div>
          {alertsData.filter(a => !a.read).map(alert => (
            <div key={alert.id} className={`alert-item alert-${alert.type}`}>
              <AlertTriangle size={16} />
              <div className="alert-body"><strong>{alert.studentName}</strong><p>{alert.text}</p><span className="alert-date">{alert.date}</span></div>
            </div>
          ))}
        </div>

        {/* Students Needing Attention */}
        <div className="card">
          <div className="section-header"><h3><Users size={18} />طلاب يحتاجون متابعة</h3><button className="btn btn-outline btn-sm" onClick={() => nav('/students')}>عرض الكل</button></div>
          {studentsData.filter(s => s.riskLevel !== 'منخفض').map(student => (
            <div key={student.id} className="student-row" onClick={() => nav(`/students/${student.id}`)}>
              <div className="sr-avatar">{student.avatar}</div>
              <div className="sr-info"><strong>{student.name}</strong><span>{student.level}</span></div>
              <span className={`badge badge-${student.riskLevel === 'عالي' ? 'danger' : 'warning'}`}>{student.riskLevel}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
