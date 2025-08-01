# Manual Testing Guide for Newsletter and Contact Forms

## Prerequisites
1. Make sure the development server is running: `npm run dev`
2. Open http://localhost:3001 in your browser
3. Ensure you have valid Supabase credentials in `.env.local`

## Newsletter Form Testing

### Test Case 1: Valid Email Subscription
1. Scroll to the "Get Early Access" section on the homepage
2. Enter a valid email address (e.g., `test@example.com`)
3. Click "Join the Spice Journey" button
4. **Expected Result**: 
   - Button shows "Joining..." briefly
   - Success message appears: "Thank you for subscribing! Check your email for a 10% discount code."
   - Email field is cleared
   - Button shows "Welcome to the family! 🌶️"

### Test Case 2: Duplicate Email Subscription
1. Use the same email address from Test Case 1
2. Click "Join the Spice Journey" button
3. **Expected Result**: 
   - Error message appears: "You are already subscribed to our newsletter!"
   - Email field is NOT cleared

### Test Case 3: Invalid Email Format
1. Enter an invalid email (e.g., `invalid-email`)
2. Click "Join the Spice Journey" button
3. **Expected Result**: 
   - Browser validation should prevent submission
   - Form should show "Please enter a valid email address"

## Contact Form Testing

### Test Case 1: Valid Contact Form Submission
1. Scroll to the "Questions?" section on the homepage
2. Fill in all fields:
   - Name: `John Doe`
   - Email: `john@example.com`
   - Message: `I'm interested in your sambal products!`
3. Click "Send Message" button
4. **Expected Result**:
   - Button shows "Sending your message..." briefly
   - Success message appears: "Thank you for your message! We'll get back to you within 24 hours."
   - All form fields are cleared
   - Button shows "Message sent successfully! ✓"

### Test Case 2: Empty Form Submission
1. Leave all fields empty
2. Click "Send Message" button
3. **Expected Result**:
   - Browser validation should prevent submission
   - Required field indicators should appear

### Test Case 3: Invalid Email in Contact Form
1. Fill in:
   - Name: `Jane Doe`
   - Email: `invalid-email`
   - Message: `Test message`
2. Click "Send Message" button
3. **Expected Result**:
   - Browser validation should prevent submission
   - Email field should show validation error

## Backend Integration Testing

### Database Verification
1. After successful submissions, check your Supabase dashboard
2. Verify records appear in:
   - `newsletter_subscribers` table (for newsletter signups)
   - `contact_messages` table (for contact form submissions)

### Email Testing (if configured)
1. Check if welcome emails are sent for newsletter subscriptions
2. Check if admin notification emails are sent for contact form submissions
3. Check if confirmation emails are sent to customers

## Error Handling Testing

### Test Case 1: Network Error Simulation
1. Disconnect from internet or block the API calls
2. Try submitting either form
3. **Expected Result**:
   - Error message: "Something went wrong. Please try again later."

### Test Case 2: Server Error Simulation
1. Temporarily break the Supabase connection (invalid credentials)
2. Try submitting either form
3. **Expected Result**:
   - Error message: "Something went wrong. Please try again later."

## Performance Testing

### Test Case 1: Form Responsiveness
1. Test forms on different screen sizes (mobile, tablet, desktop)
2. Verify forms are accessible and usable on all devices

### Test Case 2: Multiple Rapid Submissions
1. Try clicking submit button multiple times quickly
2. **Expected Result**:
   - Button should be disabled during submission
   - Only one submission should occur

## Accessibility Testing

### Test Case 1: Keyboard Navigation
1. Use Tab key to navigate through form fields
2. Use Enter key to submit forms
3. **Expected Result**:
   - All form elements should be accessible via keyboard
   - Focus indicators should be visible

### Test Case 2: Screen Reader Testing
1. Use a screen reader to test form labels and error messages
2. **Expected Result**:
   - All form fields should have proper labels
   - Error messages should be announced

## Notes
- All form submissions should be logged in the browser console for debugging
- Check the Network tab in browser dev tools to see API calls
- Monitor the Supabase logs for any backend errors
- Test with different browsers (Chrome, Firefox, Safari, Edge)
