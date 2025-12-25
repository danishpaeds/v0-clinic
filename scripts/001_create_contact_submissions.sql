-- Create contact_submissions table to store all form submissions
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  message text not null,
  submitted_at timestamp with time zone default now(),
  status text default 'new' check (status in ('new', 'contacted', 'closed')),
  notes text
);

-- Enable Row Level Security
alter table public.contact_submissions enable row level security;

-- Create indexes for better query performance
create index if not exists contact_submissions_submitted_at_idx on public.contact_submissions(submitted_at desc);
create index if not exists contact_submissions_status_idx on public.contact_submissions(status);
create index if not exists contact_submissions_email_idx on public.contact_submissions(email);

-- RLS Policies: Allow public to insert (anyone can submit form)
create policy "Anyone can submit contact form"
  on public.contact_submissions for insert
  with check (true);

-- Note: For viewing submissions, you'll need authentication
-- For now, we'll allow reading for development. In production, restrict this to admin users only.
create policy "Public can view their own submissions by email"
  on public.contact_submissions for select
  using (true);

-- Add comment to table
comment on table public.contact_submissions is 'Stores contact form submissions from the website';
