import SectionTitle from '../components/SectionTitle';
import { GraduationCap, ClipboardList, Tag, Gamepad2 } from 'lucide-react';

const ISSUES = [
  {
    icon: <GraduationCap size={32} className="text-[#1a2a4a]" />,
    title: 'Formation',
    desc: 'Absence du certificat A1/A3 ou du BAPD A2 selon la classe du drone.',
  },
  {
    icon: <ClipboardList size={32} className="text-[#1a2a4a]" />,
    title: 'Enregistrement',
    desc: "Défaut d'immatriculation sur la plateforme AlphaTango (DGAC).",
  },
  {
    icon: <Tag size={32} className="text-[#1a2a4a]" />,
    title: 'Marquage',
    desc: "Absence du numéro d'exploitant FRA-XXXXX sur l'appareil.",
  },
  {
    icon: <Gamepad2 size={32} className="text-[#1a2a4a]" />,
    title: 'Spécificités FPV',
    desc: 'Vol en immersion sans observateur — infraction systématique.',
  },
];

export default function ContextPage() {
  return (
    <section id="context" className="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="La grande majorité des pilotes de loisirs se retrouve de bonne foi en infraction.">
        Contexte & Objectif
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {ISSUES.map((item) => (
          <div
            key={item.title}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6"
          >
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-bold text-[#1a2a4a] mb-1">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg px-6 py-4 text-red-800 text-sm">
        <strong className="text-red-600">Bon à savoir :</strong> Notre offre d'audit vous
        accompagne pas-à-pas pour mettre en conformité votre pratique, éviter les amendes
        (135€ à 750€) et piloter en toute sérénité.
      </div>
    </section>
  );
}
