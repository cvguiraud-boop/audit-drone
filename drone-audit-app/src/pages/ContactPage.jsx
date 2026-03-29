import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <section id="contact" className="bg-[#1a2a4a] text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-extrabold mb-3">Organisez votre audit</h2>
      <p className="text-white/80 max-w-lg mx-auto mb-8 text-base">
        Diagnostic gratuit de 15 minutes par téléphone pour qualifier votre besoin. Puis
        rendez-vous à domicile ou en visio, selon votre convenance.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="mailto:contact@glocal-defense.com"
          className="flex items-center gap-2 bg-[#e63030] hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold text-base transition-colors"
        >
          <Mail size={18} />
          Nous contacter par email
        </a>
        <a
          href="tel:+33000000000"
          className="flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white px-8 py-3 rounded-full font-bold text-base transition-colors"
        >
          <Phone size={18} />
          Appel gratuit (15 min)
        </a>
      </div>

      <p className="text-white/50 text-sm">Premier diagnostic téléphonique gratuit – sans engagement</p>
    </section>
  );
}
