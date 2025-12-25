-- Create admin user via Supabase Auth
-- Email: connect@drvrushni.com
-- Password: butterflyV@123password

-- Note: This SQL approach creates the user record, but Supabase Auth
-- requires additional setup. The recommended approach is:
-- 1. Use Supabase Dashboard: Authentication > Users > Add User
-- 2. Or run this from your application using Supabase Admin client

-- For reference, the user creation SQL structure:
-- INSERT INTO auth.users (
--   instance_id,
--   id,
--   aud,
--   role,
--   email,
--   encrypted_password,
--   email_confirmed_at,
--   recovery_sent_at,
--   last_sign_in_at,
--   raw_app_meta_data,
--   raw_user_meta_data,
--   created_at,
--   updated_at,
--   confirmation_token,
--   email_change,
--   email_change_token_new,
--   recovery_token
-- ) VALUES ...

-- IMPORTANT: Direct insertion into auth.users is not recommended
-- Please create the user via one of these methods:

-- METHOD 1 (Recommended): Supabase Dashboard
-- 1. Go to https://supabase.com/dashboard/project/[your-project-id]
-- 2. Navigate to Authentication > Users
-- 3. Click "Add User"
-- 4. Email: connect@drvrushni.com
-- 5. Password: butterflyV@123password
-- 6. Auto Confirm User: Yes

-- METHOD 2: Using Supabase Admin SDK (from Node.js)
-- const { data, error } = await supabase.auth.admin.createUser({
--   email: 'connect@drvrushni.com',
--   password: 'butterflyV@123password',
--   email_confirm: true
-- })

SELECT 'Please create admin user via Supabase Dashboard or Admin SDK' as message;
