"use client";
import React, { useState } from "react";

const students = [
  {
    no: 1,
    id: "OMJ-DMO-001",
    name: "Farhat",
    father: "Abdul samad",
    fullName: "Farhat D/O Abdul samad",
  },
  {
    no: 2,
    id: "OMJ-DMO-002",
    name: "Hiba Asif",
    father: "Asif Sattar",
    fullName: "Hiba Asif D/O Asif Sattar",
  },
  {
    no: 3,
    id: "OMJ-DMO-003",
    name: "Ruqayyadawra",
    father: "Farooqdawra",
    fullName: "Ruqayyadawra D/O Farooqdawra",
  },
  {
    no: 4,
    id: "OMJ-DMO-004",
    name: "Aroosa Abdul Rahim",
    father: "Abdul Rahim",
    fullName: "Aroosa Abdul Rahim D/O Abdul Rahim",
  },
  {
    no: 5,
    id: "OMJ-DMO-005",
    name: "Shifa",
    father: "AbdulSattar",
    fullName: "Shifa D/O AbdulSattar",
  },
  {
    no: 6,
    id: "OMJ-DMO-006",
    name: "Hina Arshad",
    father: "Arshad",
    fullName: "Hina Arshad D/O Arshad",
  },
  {
    no: 7,
    id: "OMJ-DMO-007",
    name: "Atiya",
    father: "Faisal jakhura",
    fullName: "Atiya D/O Faisal jakhura",
  },
  {
    no: 8,
    id: "OMJ-DMO-008",
    name: "Siddiqa usama",
    father: "M.Usama",
    fullName: "Siddiqa usama D/O M.Usama",
  },
  {
    no: 9,
    id: "OMJ-DMO-009",
    name: "Arsa",
    father: "M.Iqbal",
    fullName: "Arsa D/O M.Iqbal",
  },
  {
    no: 10,
    id: "OMJ-DMO-010",
    name: "Areesha Amin",
    father: "Amin Ismail Vayani",
    fullName: "Areesha Amin D/O Amin Ismail Vayani",
  },
  {
    no: 11,
    id: "OMJ-DMO-011",
    name: "Bisma kath",
    father: "M.Shahid kath",
    fullName: "Bisma kath D/O M.Shahid kath",
  },
  {
    no: 12,
    id: "OMJ-DMO-012",
    name: "ayesha",
    father: "adnan iqbal",
    fullName: "ayesha D/O adnan iqbal",
  },
  {
    no: 13,
    id: "OMJ-DMO-013",
    name: "Huma Shoukat",
    father: "Wajid Ali",
    fullName: "Huma Shoukat D/O Wajid Ali",
  },
  {
    no: 14,
    id: "OMJ-DMO-014",
    name: "Zarmeen",
    father: "Ahmed Vayani",
    fullName: "Zarmeen D/O Ahmed Vayani",
  },
  {
    no: 15,
    id: "OMJ-DMO-015",
    name: "Wajiha Abdul latif",
    father: "Muhammad Ebrahim pasta",
    fullName: "Wajiha Abdul latif D/O Muhammad Ebrahim pasta",
  },
  {
    no: 16,
    id: "OMJ-DMO-016",
    name: "Hina Bano",
    father: "Abdul Majeed",
    fullName: "Hina Bano D/O Abdul Majeed",
  },
  {
    no: 17,
    id: "OMJ-DMO-017",
    name: "Namra",
    father: "Arif",
    fullName: "Namra D/O Arif",
  },
  {
    no: 18,
    id: "OMJ-DMO-018",
    name: "Ghazala",
    father: "Abdul Qadir",
    fullName: "Ghazala D/O Abdul Qadir",
  },
  {
    no: 19,
    id: "OMJ-DMO-019",
    name: "Umra",
    father: "Muhammad Arif",
    fullName: "Umra D/O Muhammad Arif",
  },
  {
    no: 20,
    id: "OMJ-DMO-020",
    name: "Mrs yasmeen",
    father: "Muhammad Hanif",
    fullName: "Mrs yasmeen D/O Muhammad Hanif",
  },
  {
    no: 21,
    id: "OMJ-DMO-021",
    name: "Mariam",
    father: "Abdul Rasheed",
    fullName: "Mariam D/O Abdul Rasheed",
  },
  {
    no: 22,
    id: "OMJ-DMO-022",
    name: "Eshaal Rao",
    father: "Rao khurram jamil",
    fullName: "Eshaal Rao D/O Rao khurram jamil",
  },
  {
    no: 23,
    id: "OMJ-DMO-023",
    name: "Ruquia kath",
    father: "M.Amin kath",
    fullName: "Ruquia kath D/O M.Amin kath",
  },
  {
    no: 24,
    id: "OMJ-DMO-024",
    name: "Erum",
    father: "M.Riaz Jiwani",
    fullName: "Erum D/O M.Riaz Jiwani",
  },
  {
    no: 25,
    id: "OMJ-DMO-025",
    name: "Haiqa Suriya",
    father: "M.Ali",
    fullName: "Haiqa Suriya D/O M.Ali",
  },
  {
    no: 26,
    id: "OMJ-DMO-026",
    name: "Sadia Kiran",
    father: "M.Rafiq Gaba",
    fullName: "Sadia Kiran D/O M.Rafiq Gaba",
  },
  {
    no: 27,
    id: "OMJ-DMO-027",
    name: "Syeda Najma Qadri",
    father: "Maqsood Ahmed",
    fullName: "Syeda Najma Qadri D/O Maqsood Ahmed",
  },
  {
    no: 28,
    id: "OMJ-DMO-028",
    name: "Nabeera Gaba",
    father: "M.Shakeel Gaba",
    fullName: "Nabeera Gaba D/O M.Shakeel Gaba",
  },
  {
    no: 29,
    id: "OMJ-DMO-029",
    name: "Nimrah",
    father: "Muhammad Irfan",
    fullName: "Nimrah D/O Muhammad Irfan",
  },
  {
    no: 30,
    id: "OMJ-DMO-030",
    name: "Shifa",
    father: "Kamran ahmed",
    fullName: "Shifa D/O Kamran ahmed",
  },
  {
    no: 31,
    id: "OMJ-DMO-031",
    name: "Aisha",
    father: "Junejo",
    fullName: "Aisha D/O Junejo",
  },
  {
    no: 32,
    id: "OMJ-DMO-032",
    name: "Farfa",
    father: "M.Anis",
    fullName: "Farfa D/O M.Anis",
  },
  {
    no: 33,
    id: "OMJ-DMO-033",
    name: "Rabia Basit",
    father: "Abdul Basit",
    fullName: "Rabia Basit D/O Abdul Basit",
  },
  {
    no: 34,
    id: "OMJ-DMO-034",
    name: "Mrs Hadeeka",
    father: "Abdul Sattar",
    fullName: "Mrs Hadeeka D/O Abdul Sattar",
  },
  {
    no: 35,
    id: "OMJ-DMO-035",
    name: "Sandal Jawed Suriya",
    father: "Jawed Suriya",
    fullName: "Sandal Jawed Suriya D/O Jawed Suriya",
  },
  {
    no: 36,
    id: "OMJ-DMO-036",
    name: "Urooj Fatima",
    father: "M.Irfan",
    fullName: "Urooj Fatima D/O M.Irfan",
  },
];

export default function StudentCards() {
  const [search, setSearch] = useState("");

  const filtered = students.filter((s) =>
    (s.name + s.id + s.father + s.fullName)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const downloadCard = (no) => {
    const link = document.createElement("a");
    link.href = `/${no}.png`;
    link.download = `${no}.png`;
    link.click();
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-[#450693] text-center">
        OMJ Digital Marketing – Student Cards
      </h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by Name / ID / Father Name..."
        className="w-full mb-6 p-3 border rounded-lg shadow-sm text-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((s) => (
          <div
            key={s.id}
            className="shadow-xl rounded-xl border border-[#450693] hover:shadow-2xl transition-all bg-[#450693]/30"
          >
            <img
              src={`/${s.no}.png`}
              alt={s.name}
              className="w-full rounded-lg border"
            />

            <div className="mt-4 p-2 text-[#450693] space-y-1 text-lg">
              <p>
                <strong>Roll Number:</strong> {s.id}
              </p>
              <p>
                <strong>Name:</strong> {s.name}
              </p>
              <p>
                <strong>Father/Husband:</strong> {s.father}
              </p>
              {/* <p>
                <strong>Full Name:</strong> {s.fullName}
              </p> */}
            </div>

            <button
              onClick={() => downloadCard(s.no)}
              className="mt-4 w-full bg-[#450693] text-white py-2  rounded-lg text-lg font-medium cursor-pointer hover:bg-[#450693]/50 transition"
            >
              Download Student Identity Card
            </button>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-xl">
          No results found.
        </p>
      )}
    </div>
  );
}
