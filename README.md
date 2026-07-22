# Ahmed Salem - Portfolio

A modern product-style personal portfolio for Ahmed Salem, Senior Full-Stack Developer (.NET and Angular).

## Stack

- Angular 20 standalone components
- TypeScript strict mode
- Tailwind CSS 3
- FormSubmit contact delivery with `mailto:` fallback
- Jasmine and Karma

## Local development

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Verification

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

## Contact form

The form posts JSON to FormSubmit. The destination address must be activated once from the confirmation email sent by FormSubmit. See `CONTACT_FORM_SETUP.md`.

## CV

The downloadable CV is stored at `public/assets/cv/Ahmed_Salem_CV.pdf`.
