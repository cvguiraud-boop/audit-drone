import SectionTitle from '../components/SectionTitle';
import { DRONE_PROFILES } from '../data/content';

function Cell({ value }) {
  if (value === true || value === 'Obligatoire')
    return <span className="text-green-700 font-bold">Oui</span>;
  if (value === false || value === null)
    return <span className="text-gray-300">Non</span>;
  return <span className="text-amber-600 font-semibold">{value}</span>;
}

const ROWS = [
  { key: 'weight', label: 'Poids' },
  { key: 'sub', label: 'Sous-catégorie' },
  { key: 'formation', label: 'Formation obligatoire' },
  { key: 'enregExploitant', label: 'Enregistrement exploitant' },
  { key: 'enregUAS', label: 'Enregistrement drone (UAS)' },
  { key: 'marquage', label: 'Marquage FRA' },
  { key: 'eID', label: 'Identification électronique' },
  { key: 'balise', label: 'Balise signalement' },
  { key: 'observateur', label: 'Observateur FPV' },
];

export default function DiagnosticPage() {
  return (
    <section id="diagnostic" className="py-16 px-6 max-w-6xl mx-auto">
      <SectionTitle subtitle="Avant toute démarche, nous identifions précisément votre drone et ses obligations.">
        Diagnostic différencié selon votre drone
      </SectionTitle>

      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-[#1a2a4a] text-white">
              <th className="text-left px-4 py-3 font-semibold">Obligation</th>
              {DRONE_PROFILES.map((p) => (
                <th key={p.id} className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                  {p.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row.key} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap border-b border-gray-100">
                  {row.label}
                </td>
                {DRONE_PROFILES.map((p) => (
                  <td key={p.id} className="px-4 py-3 border-b border-gray-100">
                    <Cell value={p[row.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
