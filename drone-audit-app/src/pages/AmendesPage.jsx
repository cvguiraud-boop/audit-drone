import SectionTitle from '../components/SectionTitle';
import { FINES } from '../data/content';

const LEVEL_CLASSES = {
  low: 'text-amber-600 font-semibold',
  mid: 'text-orange-600 font-bold',
  high: 'text-red-600 font-bold',
  extreme: 'text-red-900 font-extrabold',
};

export default function AmendesPage() {
  return (
    <section id="amendes" className="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Décret n° 2019-1253 du 28 novembre 2019 — applicable en 2026.">
        Amendes pour infractions à la réglementation drone
      </SectionTitle>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-red-900 text-white">
              <th className="text-left px-4 py-3 font-semibold">Infraction</th>
              <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Amende forfaitaire</th>
              <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">Maximum</th>
              <th className="text-left px-4 py-3 font-semibold">Public concerné</th>
            </tr>
          </thead>
          <tbody>
            {FINES.map((fine, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-3 border-b border-gray-100 text-gray-700">{fine.infraction}</td>
                <td className={`px-4 py-3 border-b border-gray-100 ${LEVEL_CLASSES[fine.level]}`}>
                  {fine.forfait}
                </td>
                <td className={`px-4 py-3 border-b border-gray-100 ${LEVEL_CLASSES[fine.level]}`}>
                  {fine.max}
                </td>
                <td className="px-4 py-3 border-b border-gray-100 text-gray-500 text-xs">
                  {fine.public}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
