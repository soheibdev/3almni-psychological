import { useParams, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import { ArrowRight, Brain, Activity, AlertTriangle, TrendingUp, Calendar, FileText, PlusCircle } from 'lucide-react';
import { studentsData } from '../../data/mockData';
import { useState } from 'react';
import './StudentDetail.css';

const StudentDetail = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const student = studentsData.find(s => s.id === Number(id));
  const [sessions, setSessions] = useState(student?.sessions || []);
  const [showAddSession, setShowAddSession] = useState(false);
  const [newSession, setNewSession] = useState({ type: 'متابعة دورية', notes: '', mood: 'متوسط' });

  if (!student) return <div className="card"><p>لم يتم العثور على الطالب</p></div>;

  const radarData = [
    { metric: 'الانتباه', value: student.psychology.attention },
    { metric: 'الدافعية', value: student.psychology.motivation },
    { metric: 'العاطفي', value: student.psychology.emotional },
    { metric: 'السلوك الصفي', value: student.behavior.classroom },
    { metric: 'التفاعل', value: student.behavior.social },
    { metric: 'المشاركة', value: student.behavior.participation },
  ];

  const handleAddSession = () => {
    if (!newSession.notes) return;
    const session = { id: Date.now(), date: new Date().toISOString().split('T')[0], ...newSession };
    setSessions([session, ...sessions]);
    setShowAddSession(false);
    setNewSession({ type: 'متابعة دورية', notes: '', mood: 'متوسط' });
  };

  const moodColor = (mood) => mood === 'ممتاز' ? 'var(--color-success)' : mood === 'جيد' ? 'var(--color-accent)' : mood === 'متوسط' ? 'var(--color-warning)' : 'var(--color-danger)';

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => nav('/students')}><ArrowRight size={18} />العودة للقائمة</button>

      {/* Hero */}
      <div className="detail-hero card">
        <div className="dh-avatar">{student.avatar}</div>
        <div className="dh-info"><h2>{student.name}</h2><p>{student.level} • {student.age} سنوات</p></div>
        <div className="dh-stats">
          <div className="dh-stat"><span className="dh-val" style={{ color: 'var(--color-primary)' }}>{student.psychology.attention}%</span><span>انتباه</span></div>
          <div className="dh-stat"><span className="dh-val" style={{ color: 'var(--color-accent)' }}>{student.psychology.motivation}%</span><span>دافعية</span></div>
          <div className="dh-stat"><span className="dh-val" style={{ color: 'var(--color-warning)' }}>{student.psychology.emotional}%</span><span>عاطفي</span></div>
        </div>
        <span className={`badge badge-${student.riskLevel === 'عالي' ? 'danger' : student.riskLevel === 'متوسط' ? 'warning' : 'success'}`}>{student.riskLevel}</span>
      </div>

      <div className="detail-grid">
        {/* Psychological Profile (Radar) */}
        <div className="card">
          <h3><Brain size={18} />الملف النفسي</h3>
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={radarData}>
              <PolarGrid gridType="polygon" />
              <PolarAngleAxis dataKey="metric" fontSize={12} />
              <Radar dataKey="value" stroke="var(--color-primary)" fill="rgba(74,111,165,0.2)" strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Risk Indicators */}
        <div className="card">
          <h3><AlertTriangle size={18} />مؤشرات المخاطر</h3>
          <div className="risk-meters">
            <div className="risk-row"><span>ضعف التركيز</span><div className="risk-bar"><div style={{ width: `${student.risks.focus}%`, background: student.risks.focus > 40 ? 'var(--color-danger)' : student.risks.focus > 25 ? 'var(--color-warning)' : 'var(--color-success)' }}></div></div><span className="risk-pct">{student.risks.focus}%</span></div>
            <div className="risk-row"><span>صعوبة التعلم</span><div className="risk-bar"><div style={{ width: `${student.risks.learning}%`, background: student.risks.learning > 40 ? 'var(--color-danger)' : student.risks.learning > 25 ? 'var(--color-warning)' : 'var(--color-success)' }}></div></div><span className="risk-pct">{student.risks.learning}%</span></div>
            <div className="risk-row"><span>مشاكل عاطفية</span><div className="risk-bar"><div style={{ width: `${student.risks.emotional}%`, background: student.risks.emotional > 40 ? 'var(--color-danger)' : student.risks.emotional > 25 ? 'var(--color-warning)' : 'var(--color-success)' }}></div></div><span className="risk-pct">{student.risks.emotional}%</span></div>
          </div>
          <div className="risk-summary">
            {student.riskLevel === 'عالي' && <div className="rs-alert rs-critical"><AlertTriangle size={16} />حالة حرجة - يحتاج تدخل فوري</div>}
            {student.riskLevel === 'متوسط' && <div className="rs-alert rs-warn"><AlertTriangle size={16} />يحتاج متابعة مستمرة</div>}
            {student.riskLevel === 'منخفض' && <div className="rs-alert rs-ok"><Activity size={16} />وضع مستقر</div>}
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="card detail-wide">
          <h3><TrendingUp size={18} />تتبع التقدم</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={student.monthlyProgress}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
              <YAxis hide domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="attention" stroke="var(--color-primary)" strokeWidth={2.5} name="الانتباه" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="motivation" stroke="var(--color-accent)" strokeWidth={2.5} name="الدافعية" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="emotional" stroke="var(--color-warning)" strokeWidth={2.5} name="العاطفي" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sessions / Follow-up */}
        <div className="card detail-wide">
          <div className="section-header"><h3><Calendar size={18} />سجل الجلسات</h3><button className="btn btn-primary btn-sm" onClick={() => setShowAddSession(true)}><PlusCircle size={14} />إضافة جلسة</button></div>
          <div className="sessions-list">
            {sessions.map(ses => (
              <div key={ses.id} className="session-item">
                <div className="ses-dot" style={{ background: moodColor(ses.mood) }}></div>
                <div className="ses-body">
                  <div className="ses-head"><strong>{ses.type}</strong><span className="ses-date"><Calendar size={12} />{ses.date}</span></div>
                  <p>{ses.notes}</p>
                  <span className="ses-mood" style={{ color: moodColor(ses.mood) }}>الحالة: {ses.mood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Session Modal */}
      {showAddSession && (
        <div className="modal-overlay" onClick={() => setShowAddSession(false)}>
          <div className="modal-card card" onClick={e => e.stopPropagation()}>
            <h3><PlusCircle size={18} />إضافة جلسة جديدة</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="form-group"><label>نوع الجلسة</label><select value={newSession.type} onChange={e => setNewSession({ ...newSession, type: e.target.value })}><option>متابعة دورية</option><option>جلسة فردية</option><option>جلسة طارئة</option></select></div>
              <div className="form-group"><label>الحالة المزاجية</label><select value={newSession.mood} onChange={e => setNewSession({ ...newSession, mood: e.target.value })}><option>ممتاز</option><option>جيد</option><option>متوسط</option><option>ضعيف</option></select></div>
              <div className="form-group"><label>ملاحظات الجلسة</label><textarea rows={4} value={newSession.notes} onChange={e => setNewSession({ ...newSession, notes: e.target.value })} placeholder="اكتب ملاحظاتك عن الجلسة..." /></div>
              <div className="modal-actions"><button className="btn btn-primary" onClick={handleAddSession}>حفظ</button><button className="btn btn-outline" onClick={() => setShowAddSession(false)}>إلغاء</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default StudentDetail;
