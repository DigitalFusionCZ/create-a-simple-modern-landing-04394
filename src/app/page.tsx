export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-400">InnovateAI</div>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <section className="hero-section max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-400">
            Unlocking the Future with Cutting-Edge AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            InnovateAI is at the forefront of artificial intelligence, building solutions that redefine possibilities and drive unprecedented growth for businesses worldwide.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
            Get Started Today
          </button>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} InnovateAI. All rights reserved.</p>
      </footer>
    </div>
  );
}