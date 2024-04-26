import Posts from './components/Posts';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='mb-10'>Hello, Clint!</h1>
      <Posts />
    </main>
  );
}
