const officers = [
  { name: "Jane Doe", role: "President" },
  { name: "John Smith", role: "Vice President" },
  { name: "Emily Brown", role: "Treasurer" },
];

export default function Officers() {
  return (
    <section id="officers" className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8 text-center">Club Officers</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {officers.map(officer => (
            <div key={officer.name} className="bg-white shadow rounded-xl p-6 text-center">
              <h4 className="text-xl font-semibold">{officer.name}</h4>
              <p className="text-gray-600">{officer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
