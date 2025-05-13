export default function Leadership() {
  const leaders = [
    { name: "Yaseen A. Ghani Jakura", role: "Chairman, Technical & Skill Development Committee" },
    { name: "M Rafeeq Dawood Lakhi & Junaid Malkani", role: "Chairman, SRL Commercify" },
    { name: "Dr. Abdul Sattar A. Wahid Gatta", role: "General Secretary" },
  ];

  return (
    <section className="py-16 bg-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-neon">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border border-neon">
              <h3 className="text-xl font-bold mb-2 text-yellow">{leader.name}</h3>
              <p className="text-orange">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}