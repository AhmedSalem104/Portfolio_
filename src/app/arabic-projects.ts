export const ARABIC_PROJECTS: Record<string, { title: string; description: string; highlights?: string[] }> = {
  'SNA — Engineering Industries Platform': {
    title: 'SNA — منصة للصناعات الهندسية',
    description: 'طورت منصة مؤسسية متعددة اللغات لشركة SNA للصناعات الهندسية باستخدام Next.js وTypeScript وPrisma وMySQL. أنجزت لوحة إدارة آمنة وREST APIs وإدارة المنتجات والمحتوى ودمج Cloudinary للوسائط، مع تحسين المحتوى لمحركات البحث والإجابات والبحث التوليدي (SEO وAEO وGEO).',
    highlights: ['موقع متعدد اللغات لإدارة المنتجات والمحتوى التحريري', 'لوحة إدارة آمنة وواجهات REST API', 'دمج Cloudinary لإدارة صور المنتجات والمحتوى', 'تحسينات SEO وAEO وGEO لزيادة الوصول'],
  },
  'Adawi — Legal Services Platform': {
    title: 'عدوي — منصة للخدمات القانونية',
    description: 'طورت منصة خدمات قانونية متجاوبة تبدأ بالعربية باستخدام Laravel وFilament وLivewire وBlade وMySQL. بنيت نظام CMS ولوحة إدارة للخدمات والمقالات والباقات وطلبات العملاء، مع صلاحيات حسب الدور ومصادقة متعددة العوامل ونشر بإصدارات مع إمكانية التراجع.',
    highlights: ['واجهة عربية متجاوبة تدعم اتجاه RTL', 'نظام CMS للخدمات والمقالات والباقات وطلبات العملاء', 'صلاحيات حسب الدور ومصادقة متعددة العوامل', 'نشر بإصدارات وإمكانية التراجع مع تحسين SEO وAEO وGEO'],
  },
  'Voltyks API — EV Charging Platform': {
    title: 'Voltyks API — منصة شحن السيارات الكهربائية',
    description: 'صممت نظامًا خلفيًا إنتاجيًا لسوق شحن السيارات الكهربائية، موزعًا على ست طبقات وفق Clean Architecture. استخدمت CQRS هجينًا مع EF Core 8 للكتابة وDapper 2.1 للقراءة السريعة، وخدمات شحن لحظية عبر SignalR وRedis. دمجت Paymob Intention API وApple Pay وترميز البطاقات والتحقق من Webhooks باستخدام HMAC-SHA512 وفق متطلبات PCI، ونشرته على Azure.',
    highlights: ['معمارية نظيفة بست طبقات: API والتطبيق والنواة والبنية التحتية والبيانات ولوحة الإدارة', 'ثلاثة مراكز SignalR: ChargingRequestHub وNotificationHub وProcessHub', '١٨ متحكمًا تشمل المصادقة والشواحن والمركبات والمدفوعات والتقارير', 'JWT وتجديد الرموز وتسجيل Google وFacebook عبر OAuth 2.0 ورموز OTP عبر Twilio', 'Firebase Admin SDK 3.3 للإشعارات عبر المنصات', 'Azure Blob Storage لصور المنتجات'],
  },
  'Voltyks Admin Dashboard': {
    title: 'لوحة إدارة Voltyks',
    description: 'بنيت لوحة إدارة حديثة لمنصة شحن السيارات الكهربائية Voltyks باستخدام Angular 20 ومكونات Standalone، مع تحليلات لحظية عبر SignalR وتوليد تقارير PDF. تضم أكثر من ٢٥ وحدة للمستخدمين والشواحن والعلامات والمركبات والمتجر والمدفوعات والرسوم والبروتوكولات والشكاوى والتقارير والإشعارات والنسخ الاحتياطي والإدارة.',
    highlights: ['أكثر من ٢٥ وحدة منظمة حسب الوظائف', 'تحديثات لحظية عبر @microsoft/signalr 10', 'تحليلات باستخدام Chart.js 4 وng2-charts', 'تقارير PDF باستخدام jsPDF وhtml2canvas', 'طبقة أساسية للحراس والاعتراضات والنماذج والخدمات', 'نشر على Vercel مع إعداد مستقل لـGitHub Pages'],
  },
  'Sekka API — Smart Delivery Backend': {
    title: 'سِكّة API — نظام التوصيل الذكي',
    description: 'طورت نظامًا خلفيًا إنتاجيًا يضم أكثر من ٥٧٩ نقطة API و٨٣ خدمة و٨٢ جدول قاعدة بيانات و١١ خدمة خلفية وأربعة مراكز SignalR وأكثر من ٤٥٢ نموذج DTO. نفذته باستخدام .NET 8 وClean Architecture عبر ستة مشاريع، مع FluentValidation وإصدارات API وتخزين Redis الموزع وتكامل Firebase FCM.',
    highlights: ['ستة مشاريع: API والتطبيق والنواة والبنية التحتية والبيانات ولوحة الإدارة', 'إصدارات API باستخدام Asp.Versioning.Mvc وApiExplorer', 'أربعة مراكز SignalR لتتبع الطلبات والمحادثة والتنبيهات والإشعارات', '١١ خدمة خلفية للمهام المجدولة والتسويات وتحليل RFM والتسعير والتحليلات', 'أربع طبقات Middleware للأخطاء واللغة والصيانة وتسجيل الطلبات', 'اعتراضات EF Core للتدقيق والحذف المنطقي وتهيئة البيانات'],
  },
  'Sekka Admin Panel': {
    title: 'لوحة إدارة سِكّة',
    description: 'طورت لوحة إدارة باستخدام Angular 21 ومكونات Standalone وAngular CLI 21.2، مع مراقبة تشغيل لحظية ولوحات Chart.js. أعددت النشر الإنتاجي على Vercel وربط النظام الخلفي عبر proxy.conf.json.',
    highlights: ['Angular 21.2 بمكونات Standalone', 'مراقبة العمليات لحظيًا عبر لوحات Chart.js', 'إعداد proxy.conf.json لربط النظام الخلفي', 'ملف vercel.json للنشر الإنتاجي'],
  },
  'Sekka Landing Page': {
    title: 'الصفحة التعريفية لسِكّة',
    description: 'بنيت صفحة تسويقية بالعربية والإنجليزية باستخدام HTML5 وCSS3 وJavaScript مباشرة، مع نظام ترجمة مخصص i18n.js وتبديل الوضع الفاتح والداكن عبر theme.js، ونشرتها على Vercel.',
    highlights: ['نظام ترجمة مخصص للمحتوى العربي والإنجليزي', 'تبديل الوضع الفاتح والداكن عبر theme.js', 'تنفيذ مباشر دون إطار عمل'],
  },
  'LogiFit — Fitness & Logistics App': {
    title: 'LogiFit — تطبيق اللياقة والخدمات اللوجستية',
    description: 'طورت تطبيقًا متكاملًا للياقة والخدمات اللوجستية باستخدام Angular 18 وPrimeNG 17. يعرض التحليلات عبر ngx-charts، ويولد تقارير PDF وWord قابلة للتنزيل، ويدعم تعدد اللغات بواسطة ngx-translate.',
    highlights: ['تحليلات باستخدام @swimlane/ngx-charts 21', 'تقارير PDF وWord قابلة للتنزيل', 'مكتبة مكونات PrimeNG 17', 'دعم اللغات المتعددة عبر ngx-translate'],
  },
  'E-Commerce Web App': {
    title: 'تطبيق تجارة إلكترونية',
    description: 'طورت واجهة تجارة إلكترونية متكاملة باستخدام Angular 17 مع Server-Side Rendering لتحسين SEO وسرعة ظهور التفاعل. يعمل خادم Express مخصص على تقديم SSR، مع تكامل Stripe للدفع ومصادقة JWT ودعم تعدد اللغات.',
    highlights: ['Angular 17 SSR مع خادم Express مخصص', 'تكامل مدفوعات Stripe', 'مصادقة JWT باستخدام jwt-decode', 'ترجمة عبر ngx-translate وhttp-loader', 'واجهة تستخدم carousel وspinner وtoastr وsweetalert2'],
  },
  'E-Commerce APIs — .NET 8 Layered Backend': {
    title: 'واجهات التجارة الإلكترونية — .NET 8',
    description: 'بنيت نظامًا خلفيًا بمعمارية طبقية تضم Core وInfrastructure وServices وShared وAPI، مع نمطي Repository وUnit of Work باستخدام Entity Framework Core. توفر REST APIs للمصادقة والمنتجات والفئات والسلة والطلبات.',
    highlights: ['معمارية طبقية: Core وInfrastructure وServices وShared وAPI', 'نمطي Repository وUnit of Work باستخدام EF Core', 'واجهات REST للمصادقة والمنتجات والفئات والسلة والطلبات', 'توثيق Swagger وOpenAPI عبر Swashbuckle 6.6'],
  },
  'ECommerceAPi — Clean Architecture Backend': {
    title: 'ECommerceAPi — نظام خلفي بمعمارية نظيفة',
    description: 'نفذت إصدارًا بديلًا للنظام الخلفي للتجارة الإلكترونية بمعمارية Clean Architecture تشمل Domain وPersistence وPresentation وServices وServices.Abstractions وShared. استخدمت AssemblyReference لاكتشاف الأنواع عبر المشاريع.',
    highlights: ['Clean Architecture عبر Domain وPersistence وPresentation وServices', 'نمط AssemblyReference لاكتشاف الأنواع بين المشاريع', 'تفعيل InvariantGlobalization للتوافق مع AOT', 'تهيئة قاعدة البيانات عبر DbInitializer'],
  },
  'E-Commerce — Angular Front-End': { title: 'التجارة الإلكترونية — واجهة Angular', description: 'النسخة الأولى لواجهة تجارة إلكترونية باستخدام Angular، مع دمج مدفوعات Stripe والتكامل مع REST APIs.' },
  'Social App — Angular 17 SSR': { title: 'تطبيق اجتماعي — Angular 17 SSR', description: 'منصة تواصل اجتماعي تستخدم Angular 17 SSR وخادم Express مخصص وTailwind CSS ومكونات Flowbite، مع مصادقة JWT عبر jwt-decode 4 وإشعارات واجهة باستخدام ngx-toastr 19 وngx-spinner 17.' },
  'Personal Portfolio': { title: 'الموقع الشخصي', description: 'موقع شخصي حديث ومتاح للجميع بُني كتجربة Angular سريعة بصفحة واحدة. يضم نموذج تواصل عبر FormSubmit مع بديل بالبريد، وتصفية المشاريع، واحترام تفضيل تقليل الحركة، وواجهة متجاوبة.' },
  'Maintenance Management System': {
    title: 'نظام إدارة الصيانة', description: 'طورت نظام إدارة صيانة لشركة تخدم السيارات والمعدات باستخدام ASP.NET MVC وEntity Framework بأسلوب Code-First. صممت واجهات متعددة تشمل النوافذ المنبثقة والعرض المسطح والتفاصيل، ودمجت Crystal Reports وصلاحيات RBAC مع مبادئ SOLID.',
    highlights: ['ASP.NET MVC مع EF Code-First', 'واجهات متعددة: منبثقة ومسطحة ورئيسية مع تفاصيل', 'تقارير أعمال مفصلة عبر Crystal Reports', 'صلاحيات RBAC لحماية المستخدمين'],
  },
  'Diet To Door (V1 & V2)': { title: 'Diet To Door — الإصداران الأول والثاني', description: 'منصة لتوصيل الطعام الصحي طورتها على مرحلتين. تضم وحدات DataAccess وDataMapping وأداة NumbersToTexts ووحدة التقارير.' },
  'Quiz App': { title: 'تطبيق اختبارات', description: 'تطبيق اختبارات تفاعلي بأسئلة متغيرة ونظام درجات ومؤقت، طُور باستخدام JavaScript مباشرة.' },
  'QR Code Generator': { title: 'مولّد رموز QR', description: 'أداة لإنشاء رموز QR مخصصة من النصوص أو الروابط باستخدام JavaScript مباشرة.' },
  'Weather App': { title: 'تطبيق الطقس', description: 'تطبيق يعرض بيانات الطقس الحية عبر Fetch API وخدمة OpenWeather الخارجية.' },
};
