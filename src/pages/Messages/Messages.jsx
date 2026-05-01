import { useState, useEffect, useRef } from 'react';
import { conversationsData, autoReplies } from '../../data/mockData';
import { MessageCircle, Send, Search, Clock, CheckCheck, UserCircle } from 'lucide-react';
import './Messages.css';

const Messages = () => {
  const [conversations, setConversations] = useState(conversationsData);
  const [activeId, setActiveId] = useState(conversations[0]?.id);
  const [input, setInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const chatEndRef = useRef(null);
  const active = conversations.find(c => c.id === activeId);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [active?.messages?.length]);

  const handleSend = () => {
    if (!input.trim()) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    setConversations(prev => prev.map(c => c.id === activeId ? { ...c, messages: [...c.messages, { id: Date.now(), text: input, sender: 'self', time }] } : c));
    setInput('');
    setTimeout(() => {
      const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
      const t = new Date();
      setConversations(prev => prev.map(c => c.id === activeId ? { ...c, messages: [...c.messages, { id: Date.now() + 1, text: reply, sender: 'other', time: `${t.getHours()}:${String(t.getMinutes()).padStart(2, '0')}` }] } : c));
    }, 2000);
  };

  const filtered = conversations.filter(c => c.name.includes(searchTerm) || c.role.includes(searchTerm));

  return (
    <div className="messages-page">
      <h2 className="page-title"><MessageCircle size={24} />الرسائل</h2>
      <div className="msg-layout">
        <div className="contacts-col">
          <div className="contacts-search"><Search size={14} className="cs-icon" /><input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="بحث..." /></div>
          {filtered.map(c => (
            <div key={c.id} className={`contact ${c.id === activeId ? 'contact-active' : ''}`} onClick={() => setActiveId(c.id)}>
              <div className="c-av" style={{ background: c.color }}>{c.avatar}</div>
              <div className="c-info"><strong>{c.name}</strong><span className="c-role">{c.role}</span><span className="c-preview">{c.messages[c.messages.length - 1]?.text.slice(0, 35)}...</span></div>
              {c.unread && <span className="c-unread"></span>}
            </div>
          ))}
        </div>
        <div className="chat-col">
          {active && (<>
            <div className="chat-top"><div className="ct-av" style={{ background: active.color }}><UserCircle size={20} color="white" /></div><div><strong>{active.name}</strong><span>{active.role}</span></div></div>
            <div className="chat-messages">
              {active.messages.map(m => (
                <div key={m.id} className={`msg ${m.sender === 'self' ? 'msg-self' : 'msg-other'}`}>
                  <p>{m.text}</p><span className="msg-time"><Clock size={10} />{m.time}{m.sender === 'self' && <CheckCheck size={12} />}</span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
            <div className="chat-bottom"><input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="اكتب رسالتك..." /><button className="send-btn" onClick={handleSend}><Send size={18} /></button></div>
          </>)}
        </div>
      </div>
    </div>
  );
};
export default Messages;
