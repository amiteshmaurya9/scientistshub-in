import Head from "next/head";
import "./styles/home.css"; // Import custom CSS

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scientists Hub - Home</title>
        <meta name="description" content="Explore Science, Technology, and Innovation at Scientists Hub." />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <h1>Scientists Hub</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Articles</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Explore Science & Technology</h2>
        <p>Discover articles on the latest innovations and scientific breakthroughs.</p>
      </header>

      {/* Featured Articles */}
      <section className="articles">
        <div className="article-card">
          <h3>The Future of AI</h3>
          <p>How artificial intelligence is shaping the world.</p>
        </div>
        <div className="article-card">
          <h3>Space Exploration</h3>
          <p>New discoveries and missions beyond Earth.</p>
        </div>
        <div className="article-card">
          <h3>Quantum Computing</h3>
          <p>A look into the future of computational power.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Scientists Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
