export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#1a2a4a] to-[#2d4a7a] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto leading-tight mb-4">
        Pilotez en toute légalité.<br />
        <span className="text-red-400">Évitez les amendes.</span>
      </h1>
      <p className="text-lg text-white/85 max-w-xl mx-auto mb-8">
        La réglementation européenne EASA est pleinement applicable en France. La majorité des
        pilotes de loisirs est en infraction <strong>sans le savoir</strong>. Nous vous
        accompagnons pour mettre votre drone en conformité.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {['Diagnostic personnalisé', 'Accompagnement pas-à-pas', 'Kit de documentation fourni'].map(
          (b) => (
            <span
              key={b}
              className="bg-white/15 border border-white/30 px-5 py-2 rounded-full text-sm font-semibold"
            >
              {b}
            </span>
          )
        )}
        <span className="bg-red-600/80 border border-red-500 px-5 py-2 rounded-full text-sm font-semibold">
          Amendes : 135€ à 750€
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#tarifs"
          className="bg-[#e63030] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-red-700 transition-colors"
        >
          Voir les tarifs
        </a>
        <a
          href="#contact"
          className="bg-white/10 border border-white/30 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-white/20 transition-colors"
        >
          Diagnostic gratuit (15 min)
        </a>
      </div>
    </section>
  );
}
