// ===== STUDENTS UNDER OBSERVATION =====
export const studentsData = [
  {
    id: 1, name: 'سلمى إبراهيم', level: 'الصف الثالث', age: 9, avatar: 'س',
    status: 'مستقر', riskLevel: 'منخفض',
    psychology: { attention: 78, motivation: 85, emotional: 80 },
    behavior: { classroom: 90, social: 85, participation: 92 },
    risks: { focus: 22, learning: 10, emotional: 15 },
    monthlyProgress: [
      { month: 'يناير', attention: 60, motivation: 65, emotional: 62 },
      { month: 'فبراير', attention: 65, motivation: 70, emotional: 68 },
      { month: 'مارس', attention: 70, motivation: 78, emotional: 74 },
      { month: 'أبريل', attention: 78, motivation: 85, emotional: 80 },
    ],
    sessions: [
      { id: 1, date: '2026-04-28', type: 'متابعة دورية', notes: 'تحسن ملحوظ في الثقة بالنفس. تتفاعل بشكل أفضل مع زميلاتها.', mood: 'جيد' },
      { id: 2, date: '2026-04-14', type: 'جلسة فردية', notes: 'تحتاج دعم إضافي في التعبير عن مشاعرها أمام المجموعة.', mood: 'متوسط' },
    ],
  },
  {
    id: 2, name: 'يوسف عبدالله', level: 'الصف الثالث', age: 9, avatar: 'ي',
    status: 'يحتاج متابعة', riskLevel: 'متوسط',
    psychology: { attention: 55, motivation: 60, emotional: 65 },
    behavior: { classroom: 60, social: 55, participation: 50 },
    risks: { focus: 45, learning: 35, emotional: 30 },
    monthlyProgress: [
      { month: 'يناير', attention: 40, motivation: 45, emotional: 50 },
      { month: 'فبراير', attention: 45, motivation: 50, emotional: 55 },
      { month: 'مارس', attention: 50, motivation: 55, emotional: 60 },
      { month: 'أبريل', attention: 55, motivation: 60, emotional: 65 },
    ],
    sessions: [
      { id: 1, date: '2026-04-27', type: 'جلسة طارئة', notes: 'يعاني من صعوبة في التركيز. يحتاج تعديل بيئة التعلم.', mood: 'ضعيف' },
      { id: 2, date: '2026-04-20', type: 'متابعة دورية', notes: 'بدأ يظهر تحسن طفيف في المشاركة الصفية.', mood: 'متوسط' },
      { id: 3, date: '2026-04-10', type: 'جلسة فردية', notes: 'يحتاج خطة تدخل سلوكي لتحسين الانتباه.', mood: 'ضعيف' },
    ],
  },
  {
    id: 3, name: 'ليلى الخشن', level: 'الصف الثالث', age: 9, avatar: 'ل',
    status: 'حرج', riskLevel: 'عالي',
    psychology: { attention: 40, motivation: 35, emotional: 42 },
    behavior: { classroom: 45, social: 38, participation: 30 },
    risks: { focus: 65, learning: 58, emotional: 55 },
    monthlyProgress: [
      { month: 'يناير', attention: 30, motivation: 28, emotional: 35 },
      { month: 'فبراير', attention: 32, motivation: 30, emotional: 38 },
      { month: 'مارس', attention: 36, motivation: 32, emotional: 40 },
      { month: 'أبريل', attention: 40, motivation: 35, emotional: 42 },
    ],
    sessions: [
      { id: 1, date: '2026-04-29', type: 'جلسة طارئة', notes: 'تراجع حاد في الأداء. تحتاج تدخل عاجل من الفريق التعليمي.', mood: 'ضعيف' },
      { id: 2, date: '2026-04-22', type: 'جلسة فردية', notes: 'علامات قلق واضحة. يُنصح بالتواصل العاجل مع ولي الأمر.', mood: 'ضعيف' },
    ],
  },
  {
    id: 4, name: 'عمر الناصر', level: 'الصف الثالث', age: 9, avatar: 'ع',
    status: 'مستقر', riskLevel: 'منخفض',
    psychology: { attention: 92, motivation: 95, emotional: 90 },
    behavior: { classroom: 95, social: 90, participation: 98 },
    risks: { focus: 5, learning: 3, emotional: 8 },
    monthlyProgress: [
      { month: 'يناير', attention: 82, motivation: 85, emotional: 80 },
      { month: 'فبراير', attention: 85, motivation: 88, emotional: 84 },
      { month: 'مارس', attention: 88, motivation: 92, emotional: 87 },
      { month: 'أبريل', attention: 92, motivation: 95, emotional: 90 },
    ],
    sessions: [
      { id: 1, date: '2026-04-15', type: 'متابعة دورية', notes: 'طالب متفوق ومستقر نفسياً. لا يحتاج تدخل حالياً.', mood: 'ممتاز' },
    ],
  },
  {
    id: 5, name: 'نور الهدى', level: 'الصف الثالث', age: 9, avatar: 'ن',
    status: 'يحتاج متابعة', riskLevel: 'متوسط',
    psychology: { attention: 62, motivation: 68, emotional: 58 },
    behavior: { classroom: 70, social: 65, participation: 60 },
    risks: { focus: 38, learning: 28, emotional: 42 },
    monthlyProgress: [
      { month: 'يناير', attention: 50, motivation: 55, emotional: 45 },
      { month: 'فبراير', attention: 54, motivation: 60, emotional: 50 },
      { month: 'مارس', attention: 58, motivation: 64, emotional: 54 },
      { month: 'أبريل', attention: 62, motivation: 68, emotional: 58 },
    ],
    sessions: [
      { id: 1, date: '2026-04-26', type: 'جلسة فردية', notes: 'تعاني من عدم استقرار عاطفي. تحتاج دعم أسري أكبر.', mood: 'متوسط' },
      { id: 2, date: '2026-04-12', type: 'متابعة دورية', notes: 'تحسن طفيف في الدافعية لكن الجانب العاطفي لا يزال يحتاج عمل.', mood: 'متوسط' },
    ],
  },
  {
    id: 6, name: 'أحمد محمود', level: 'الصف الثالث', age: 9, avatar: 'أ',
    status: 'يحتاج متابعة', riskLevel: 'متوسط',
    psychology: { attention: 58, motivation: 52, emotional: 70 },
    behavior: { classroom: 55, social: 72, participation: 48 },
    risks: { focus: 42, learning: 40, emotional: 25 },
    monthlyProgress: [
      { month: 'يناير', attention: 45, motivation: 40, emotional: 60 },
      { month: 'فبراير', attention: 48, motivation: 44, emotional: 63 },
      { month: 'مارس', attention: 52, motivation: 48, emotional: 66 },
      { month: 'أبريل', attention: 58, motivation: 52, emotional: 70 },
    ],
    sessions: [
      { id: 1, date: '2026-04-25', type: 'جلسة فردية', notes: 'يحتاج استراتيجيات تعلم مختلفة. ذكي لكنه يفقد التركيز بسرعة.', mood: 'متوسط' },
    ],
  },
];

// ===== REPORTS =====
export const reportsData = [
  { id: 1, studentId: 2, studentName: 'يوسف عبدالله', date: '2026-04-27', title: 'تقرير تقييم سلوكي', observations: 'يعاني يوسف من صعوبة مستمرة في التركيز أثناء الحصص الدراسية، خاصة في الفترة الصباحية. يميل إلى الانسحاب من الأنشطة الجماعية.', analysis: 'يبدو أن هناك عوامل بيئية تؤثر على قدرته على التركيز. مستوى القلق مرتفع نسبياً. يحتاج تعديل في بيئة التعلم.', recommendations: 'تقليل المشتتات البصرية حول مقعده. جلسات تدريب على الانتباه (10 دقائق يومياً). التواصل مع ولي الأمر حول الروتين المنزلي.', status: 'مكتمل' },
  { id: 2, studentId: 3, studentName: 'ليلى الخشن', date: '2026-04-29', title: 'تقرير حالة طارئة', observations: 'تراجع حاد في الأداء الأكاديمي والسلوكي خلال الأسبوعين الماضيين. علامات قلق واضحة وانسحاب اجتماعي.', analysis: 'احتمال وجود ضغوط أسرية. مستوى القلق مرتفع جداً. تحتاج تدخل متعدد المستويات.', recommendations: 'اجتماع عاجل مع ولي الأمر. تكثيف الجلسات الفردية إلى مرتين أسبوعياً. توفير بيئة آمنة في الفصل.', status: 'مكتمل' },
  { id: 3, studentId: 5, studentName: 'نور الهدى', date: '2026-04-26', title: 'تقرير متابعة دورية', observations: 'نور تُظهر تحسناً تدريجياً في الدافعية لكن الجانب العاطفي لا يزال يحتاج دعم مستمر.', analysis: 'التحسن في الدافعية مرتبط بالتشجيع الصفي. الجانب العاطفي يتأثر بعوامل خارج المدرسة.', recommendations: 'استمرار التشجيع الإيجابي. إشراكها في أنشطة إبداعية لتعزيز الثقة. متابعة أسبوعية.', status: 'مسودة' },
];

// ===== CONVERSATIONS =====
export const conversationsData = [
  {
    id: 1, name: 'أ. فاطمة الزهراء', role: 'معلمة الصف الثالث', avatar: 'ف', color: 'var(--color-primary)', unread: true,
    messages: [
      { id: 1, text: 'دكتور أحمد، أريد استشارتك بخصوص يوسف. لاحظت تراجع كبير في تركيزه.', sender: 'other', time: '10:00' },
      { id: 2, text: 'شكراً لملاحظتك. هل هذا التراجع مفاجئ أم تدريجي؟', sender: 'self', time: '10:15' },
      { id: 3, text: 'تدريجي خلال الأسبوعين الماضيين. أيضاً بدأ يتجنب المشاركة الصفية.', sender: 'other', time: '10:20' },
      { id: 4, text: 'سأقوم بجلسة فردية معه غداً. أرجو ملاحظة سلوكه مع الأقران أيضاً.', sender: 'self', time: '10:30' },
    ],
  },
  {
    id: 2, name: 'والدة ليلى', role: 'ولية أمر', avatar: 'و', color: 'var(--color-accent)', unread: true,
    messages: [
      { id: 1, text: 'مرحباً دكتور، أنا قلقة جداً على ليلى. لاحظت تغيراً في سلوكها في البيت.', sender: 'other', time: '14:00' },
      { id: 2, text: 'أهلاً بك. نحن أيضاً لاحظنا تراجعاً في المدرسة. هل يمكنك وصف التغييرات؟', sender: 'self', time: '14:15' },
      { id: 3, text: 'أصبحت أكثر انطوائية وترفض الذهاب للمدرسة أحياناً.', sender: 'other', time: '14:20' },
    ],
  },
  {
    id: 3, name: 'والد يوسف', role: 'ولي أمر', avatar: 'و', color: 'var(--color-warning)', unread: false,
    messages: [
      { id: 1, text: 'دكتور أحمد، كيف حال يوسف في المدرسة؟', sender: 'other', time: '16:00' },
      { id: 2, text: 'يوسف يتحسن تدريجياً. أنصح بتطبيق تمارين التركيز التي أرسلتها سابقاً.', sender: 'self', time: '16:30' },
    ],
  },
  {
    id: 4, name: 'أ. منى المرشدة', role: 'مرشدة طلابية', avatar: 'م', color: 'var(--color-info)', unread: false,
    messages: [
      { id: 1, text: 'دكتور، هل لديك ملاحظات جديدة عن طلاب الصف الثالث؟', sender: 'other', time: '11:00' },
      { id: 2, text: 'نعم، سأرسل لك التقرير الشهري نهاية الأسبوع.', sender: 'self', time: '11:20' },
    ],
  },
];

// ===== RECOMMENDATIONS =====
export const recommendationsData = [
  { id: 1, targetType: 'parent', targetName: 'والدة ليلى', studentName: 'ليلى الخشن', text: 'تخصيص وقت يومي للحوار العاطفي مع ليلى. تجنب الضغط الأكاديمي المفرط. ممارسة أنشطة مشتركة ممتعة.', date: '2026-04-29', status: 'جديد', priority: 'عالي' },
  { id: 2, targetType: 'teacher', targetName: 'أ. فاطمة الزهراء', studentName: 'يوسف عبدالله', text: 'تقليل المشتتات حول مقعد يوسف. استخدام التعزيز الإيجابي عند المشاركة. تقسيم المهام إلى أجزاء صغيرة.', date: '2026-04-27', status: 'قيد التنفيذ', priority: 'عالي' },
  { id: 3, targetType: 'parent', targetName: 'والدة نور', studentName: 'نور الهدى', text: 'تشجيع نور على التعبير عن مشاعرها. ممارسة أنشطة إبداعية يومياً. تجنب المقارنة مع الأقران.', date: '2026-04-26', status: 'قيد التنفيذ', priority: 'متوسط' },
  { id: 4, targetType: 'teacher', targetName: 'أ. فاطمة الزهراء', studentName: 'أحمد محمود', text: 'استخدام أساليب التعلم البصري مع أحمد. السماح له بالحركة المنظمة أثناء الحصة. تقديم تعليمات واضحة ومختصرة.', date: '2026-04-25', status: 'مكتمل', priority: 'متوسط' },
];

// ===== ALERTS =====
export const alertsData = [
  { id: 1, studentId: 3, studentName: 'ليلى الخشن', type: 'critical', text: 'تراجع حاد في الأداء وعلامات قلق مرتفعة. يحتاج تدخل عاجل.', date: '2026-04-29', read: false },
  { id: 2, studentId: 2, studentName: 'يوسف عبدالله', type: 'warning', text: 'استمرار صعوبة التركيز رغم التدخلات. يحتاج تعديل الخطة العلاجية.', date: '2026-04-27', read: false },
  { id: 3, studentId: 5, studentName: 'نور الهدى', type: 'warning', text: 'عدم استقرار عاطفي متكرر. يُنصح بتكثيف المتابعة.', date: '2026-04-26', read: true },
  { id: 4, studentId: 6, studentName: 'أحمد محمود', type: 'info', text: 'تحسن في المشاركة الصفية بعد تطبيق التوصيات.', date: '2026-04-25', read: true },
];

// ===== EMOTIONAL TREND (DASHBOARD) =====
export const emotionalTrend = [
  { week: 'أسبوع 1', avg: 55 },
  { week: 'أسبوع 2', avg: 58 },
  { week: 'أسبوع 3', avg: 62 },
  { week: 'أسبوع 4', avg: 65 },
  { week: 'أسبوع 5', avg: 60 },
  { week: 'أسبوع 6', avg: 68 },
];

export const behaviorTrend = [
  { week: 'أسبوع 1', positive: 60, negative: 40 },
  { week: 'أسبوع 2', positive: 62, negative: 38 },
  { week: 'أسبوع 3', positive: 65, negative: 35 },
  { week: 'أسبوع 4', positive: 68, negative: 32 },
  { week: 'أسبوع 5', positive: 64, negative: 36 },
  { week: 'أسبوع 6', positive: 72, negative: 28 },
];

// ===== AUTO-REPLIES =====
export const autoReplies = [
  'شكراً لتواصلك. سأراجع الحالة وأرد عليك قريباً.',
  'سأقوم بتقييم إضافي وأحدد لك موعداً للمناقشة.',
  'ملاحظاتك مهمة جداً. سأدرجها في التقرير القادم.',
  'أنصح بالاستمرار في تطبيق التوصيات والمتابعة معي أسبوعياً.',
];
