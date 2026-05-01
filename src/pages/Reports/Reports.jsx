import { useState } from 'react';
import { FileText, PlusCircle, Edit2, CheckCircle, Clock, Save } from 'lucide-react';
import { reportsData as initialReports } from '../../data/mockData';
import './Reports.css';

const Reports = () => {
  const [reports, setReports] = useState(initialReports);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ studentName: '', title: '', observations: '', analysis: '', recommendations: '', status: 'مسودة' });

  const openNew = () => { setEditing(null); setForm({ studentName: '', title: '', observations: '', analysis: '', recommendations: '', status: 'مسودة' }); setShowModal(true); };
  const openEdit = (r) => { setEditing(r); setForm(r); setShowModal(true); };
  const handleSave = () => {
    if (!form.title || !form.observations) return;
    if (editing) { setReports(reports.map(r => r.id === editing.id ? { ...form, id: r.id, date: r.date } : r)); }
    else { setReports([{ ...form, id: Date.now(), date: new Date().toISOString().split('T')[0] }, ...reports]); }
    setShowModal(false);
  };

  return (
    <div className="reports-page">
      <div className="page-header"><h2 className="page-title"><FileText size={24} />التقارير</h2><button className="btn btn-primary" onClick={openNew}><PlusCircle size={16} />إنشاء تقرير</button></div>
      <div className="reports-list">
        {reports.map(r => (
          <div key={r.id} className="report-card card">
            <div className="rc-header">
              <div><h3>{r.title}</h3><span className="rc-meta">{r.studentName} • {r.date}</span></div>
              <div className="rc-actions">
                <span className={`badge ${r.status === 'مكتمل' ? 'badge-success' : 'badge-warning'}`}>{r.status === 'مكتمل' ? <CheckCircle size={12} /> : <Clock size={12} />}{r.status}</span>
                <button className="btn btn-outline btn-sm" onClick={() => openEdit(r)}><Edit2 size={14} />تعديل</button>
              </div>
            </div>
            <div className="rc-section"><strong>الملاحظات:</strong><p>{r.observations}</p></div>
            <div className="rc-section"><strong>التحليل:</strong><p>{r.analysis}</p></div>
            <div className="rc-section"><strong>التوصيات:</strong><p>{r.recommendations}</p></div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-card card" onClick={e => e.stopPropagation()}>
            <h3>{editing ? <><Edit2 size={18} />تعديل تقرير</> : <><PlusCircle size={18} />إنشاء تقرير جديد</>}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="form-row">
                <div className="form-group"><label>اسم الطالب</label><input value={form.studentName} onChange={e => setForm({ ...form, studentName: e.target.value })} placeholder="اسم الطالب" /></div>
                <div className="form-group"><label>الحالة</label><select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}><option>مسودة</option><option>مكتمل</option></select></div>
              </div>
              <div className="form-group"><label>عنوان التقرير</label><input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="عنوان التقرير" /></div>
              <div className="form-group"><label>الملاحظات</label><textarea rows={3} value={form.observations} onChange={e => setForm({ ...form, observations: e.target.value })} placeholder="الملاحظات السريرية..." /></div>
              <div className="form-group"><label>التحليل</label><textarea rows={3} value={form.analysis} onChange={e => setForm({ ...form, analysis: e.target.value })} placeholder="التحليل النفسي..." /></div>
              <div className="form-group"><label>التوصيات</label><textarea rows={3} value={form.recommendations} onChange={e => setForm({ ...form, recommendations: e.target.value })} placeholder="التوصيات..." /></div>
              <div className="modal-actions"><button className="btn btn-primary" onClick={handleSave}><Save size={16} />حفظ</button><button className="btn btn-outline" onClick={() => setShowModal(false)}>إلغاء</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Reports;
