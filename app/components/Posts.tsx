import { getSortedPostsData } from '@/lib/posts';
import ListItem from './ListItem';

export default function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className='relative placeholder:mt-6 mx-auto max-w-2xl'>
      <h1 className='text-4xl font-bold '>Blog</h1>
      <ul className='w-full'>
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
