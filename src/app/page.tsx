
import { Code, Bot, Zap, BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Code className="w-8 h-8 text-indigo-400" />
          <span className="text-xl font-bold">AI Code Assistant</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </nav>
        <button className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-colors font-semibold">
          Get Started
        </button>
      </header>

      <main>
        <section className="relative flex flex-col items-center justify-center text-center py-32 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-gray-900" />
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500">
              Your AI Coding Partner
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
              Supercharge your development workflow with an intelligent assistant that writes, debugs, and explains code for you.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <button className="px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-transform hover:scale-105 font-semibold">
                Try it Now
              </button>
              <button className="px-6 py-3 rounded-md bg-gray-700 hover:bg-gray-600 transition-transform hover:scale-105 font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 px-4 bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Powerful Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-6">
                  <Bot className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Code Generation</h3>
                <p className="text-gray-400">Generate boilerplate, functions, and entire components in seconds, in any language or framework.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Instant Debugging</h3>
                <p className="text-gray-400">Find and fix bugs automatically, with clear explanations of the problem and the solution.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 mb-6">
                  <BrainCircuit className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Code Explanation</h3>
                <p className="text-gray-400">Understand complex code snippets with ease, thanks to natural language explanations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="py-12 px-8 bg-gray-800/50 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">&copy; 2024 AI Code Assistant. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
