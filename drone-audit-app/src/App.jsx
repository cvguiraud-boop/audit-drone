import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ContextPage from './pages/ContextPage';
import DiagnosticPage from './pages/DiagnosticPage';
import AuditPage from './pages/AuditPage';
import TarifsPage from './pages/TarifsPage';
import AmendesPage from './pages/AmendesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ContextPage />
        <div className="border-t border-gray-100" />
        <DiagnosticPage />
        <div className="border-t border-gray-100" />
        <AuditPage />
        <div className="border-t border-gray-100" />
        <TarifsPage />
        <div className="border-t border-gray-100" />
        <AmendesPage />
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
