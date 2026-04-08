/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Brands from './components/Brands';
import Partnership from './components/Partnership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-ocean selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <History />
        <Brands />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
