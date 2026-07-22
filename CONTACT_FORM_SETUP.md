# Contact form setup

The contact form uses FormSubmit's AJAX endpoint and sends messages to `ahmedsalem1041998@gmail.com`.

## One-time activation

1. Run the site locally or open the deployed site.
2. Submit a valid test message.
3. Open the activation email sent by FormSubmit to the recipient inbox.
4. Confirm the form endpoint.
5. Submit another message and verify delivery.

## Runtime behavior

- Email and message are required.
- The message must contain at least 5 characters.
- The submit button is disabled while the form is incomplete or sending.
- Success and error notifications are announced through an `aria-live` region.
- If delivery fails, the user's email client opens with the message prefilled.
- The website does not persist submitted form data.

## Implementation

The integration lives in `src/app/pages/contact/contact.ts`. No EmailJS dependency or public key is required.
