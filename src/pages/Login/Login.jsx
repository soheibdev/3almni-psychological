import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, AlertCircle, Brain } from 'lucide-react';
import { useAuth } from '../../services/AuthContext';
import './Login.css';

const Login = () => {
  const nav = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  if (isAuthenticated) { nav('/', { replace: true }); return null; }
  const handleLogin = (e) => { e.preventDefault(); setError(''); const r = login(email, password); if (r.success) nav('/'); else setError(r.error); };

  return (
    <div className="login-page">
      <div className="login-card card">
        <div className="login-logo"><Brain size={44} color="var(--color-primary)" /><h1>عَلِّمْني</h1><h2>بوابة الأخصائي النفسي</h2></div>
        {error && <div className="login-error"><AlertCircle size={16} />{error}</div>}
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group"><label>البريد الإلكتروني</label><div className="input-wrap"><Mail size={16} className="input-ic" /><input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="أدخل بريدك الإلكتروني" required /></div></div>
          <div className="form-group"><label>كلمة المرور</label><div className="input-wrap"><Lock size={16} className="input-ic" /><input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="أدخل كلمة المرور" required /></div></div>
          <button type="submit" className="btn btn-primary login-btn"><LogIn size={18} />تسجيل الدخول</button>
        </form>
        <div className="login-hint"><p>بيانات الدخول التجريبية</p><code>psychologist@gmail.com / psy@123</code></div>
      </div>
    </div>
  );
};
export default Login;
