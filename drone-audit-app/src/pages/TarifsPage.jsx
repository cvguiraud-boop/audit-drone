import SectionTitle from '../components/SectionTitle';
import { PRICING_PLANS, OPTIONS } from '../data/content';
import { Check } from 'lucide-react';

function PricingCard({ plan }) {
  return (
    <div
      className={`rounded-xl border overflow-hidden transition-shadow hover:shadow-lg flex flex-col ${
        plan.featured ? 'border-[#1a2a4a] border-2 ring-2 ring-[#1a2a4a]/10' : 'border-gray-200'
      }`}
    >
      <div
        className={`px-5 py-4 ${plan.featured ? 'bg-[#e63030]' : 'bg-[#1a2a4a]'} text-white`}
      >
        <div className="font-bold text-base">{plan.label}</div>
        <div className="text-xs opacity-75 mt-0.5">{plan.subtitle}</div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-3xl font-extrabold text-[#1a2a4a]">{plan.price} €</span>
          <span className="text-gray-400 text-sm">TTC</span>
        </div>
        <div className="text-xs text-gray-400 mb-4">{plan.duration} · à domicile ou en visio</div>
        <ul className="flex flex-col gap-2 flex-1 mb-5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <Check size={15} className="text-green-600 mt-0.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="block text-center bg-[#1a2a4a] hover:bg-[#e63030] text-white py-2.5 rounded-lg font-semibold text-sm transition-colors"
        >
          Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <section id="tarifs" className="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Accessibles pour un pilote loisirs, rentables pour nous, cohérents avec le marché.">
        Tarifs
      </SectionTitle>

      {/* Promo band */}
      <div className="bg-gradient-to-r from-[#e63030] to-red-700 text-white rounded-xl px-6 py-4 mb-8 text-center font-semibold text-sm">
        Offre de lancement : <strong>–20%</strong> sur le premier audit &nbsp;|&nbsp;
        Parrainage : <strong>–10%</strong> pour le parrain et le filleul
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>

      <h3 className="text-lg font-bold text-[#1a2a4a] mb-4">Options complémentaires</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {OPTIONS.map((opt) => (
          <div key={opt.label} className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex justify-between items-start gap-4">
            <div>
              <div className="font-semibold text-sm text-[#1a2a4a] mb-1">{opt.label}</div>
              <div className="text-xs text-gray-500">{opt.description}</div>
            </div>
            <div className="text-[#e63030] font-bold text-base whitespace-nowrap">
              {opt.price} €{opt.period ?? ''} TTC
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
