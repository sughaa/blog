import FetchMarkdown from '../features/FetchMarkdown'

function Home() {
  return (
    <section>
      <h1>Welcome to My Blog</h1>
      <p>Read my latest posts.</p>
      <FetchMarkdown />
    </section>
  );
}

export default Home;