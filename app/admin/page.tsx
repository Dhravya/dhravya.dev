import type { Metadata } from 'next';
import { auth } from 'lib/auth';
import { queryBuilder } from 'lib/planetscale';
import { redirect } from 'next/navigation';
import Form from './form';

export const metadata: Metadata = {
  title: 'Admin',
};

export default async function GuestbookPage() {
  const session = await auth();
  if (session?.user?.email !== 'dhravyashah@gmail.com') {
    redirect('/');
  }

  const entries = await queryBuilder
    .selectFrom('guestbook')
    .select(['id', 'body', 'created_by', 'updated_at'])
    .orderBy('id', 'asc')
    .limit(500)
    .execute();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">admin</h1>
      <Form entries={entries} />
    </section>
  );
}
