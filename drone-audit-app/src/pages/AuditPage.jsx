import SectionTitle from '../components/SectionTitle';
import { AUDIT_STEPS } from '../data/content';

export default function AuditPage() {
  return (
    <section id="audit" className="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Un accompagnement clé en main, adapté à votre profil et à votre matériel.">
        Notre démarche d'audit – 4 étapes
      </SectionTitle>

      <div className="flex flex-col gap-4">
        {AUDIT_STEPS.map((step) => (
          <div
            key={step.num}
            className="flex gap-5 items-start bg-gray-50 border border-gray-200 rounded-xl p-5"
          >
            <div className="w-10 h-10 rounded-full bg-[#1a2a4a] text-white flex items-center justify-center font-extrabold text-base shrink-0">
              {step.num}
            </div>
            <div>
              <h4 className="font-bold text-[#1a2a4a] mb-1">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
