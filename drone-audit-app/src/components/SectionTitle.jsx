export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2a4a] flex items-center gap-3">
        <span className="w-1.5 h-8 bg-[#e63030] rounded-full inline-block shrink-0" />
        {children}
      </h2>
      {subtitle && <p className="text-gray-500 mt-2 ml-5">{subtitle}</p>}
    </div>
  );
}
