# الموقع الشخصي - أحمد سالم

موقع شخصي بتصميم تحريري فاتح يعرض خبرات أحمد سالم كمطور Full-Stack متخصص في .NET وAngular.

## التقنيات

- Angular 20 بنظام Standalone Components
- TypeScript Strict
- Tailwind CSS 3
- FormSubmit لإرسال نموذج التواصل مع بديل `mailto:` عند الفشل
- Jasmine وKarma للاختبارات

## التشغيل محليًا

```bash
npm install
npm start
```

ثم افتح `http://localhost:4200/`.

## التحقق

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

## نموذج التواصل

النموذج يرسل البيانات بصيغة JSON إلى FormSubmit. يجب تفعيل البريد مرة واحدة من رسالة التأكيد التي ترسلها الخدمة. راجع `CONTACT_FORM_SETUP.md`.

## السيرة الذاتية

ملف السيرة القابل للتحميل موجود في `public/assets/cv/Ahmed_Salem_CV.pdf`.
