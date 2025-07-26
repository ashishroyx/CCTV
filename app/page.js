// "use client";
// import { useState } from "react";
// import IncidentList from "@/components/IncidentList";
// import IncidentPlayer from "@/components/IncidentPlayer";

// export default function Home() {
//   const [selectedIncident, setSelectedIncident] = useState(null);
//   return (
//     <main className="h-full w-full bg-black">
//       <div className="flex gap-4 p-4">
//         <div className="w-[70%] h-[30%] ">
//           <IncidentPlayer incident={selectedIncident} />
//       </div>
//         </div>
//         <div className="w-[30%] h-[20%] ">
//           <IncidentList onIncidentSelect={setSelectedIncident} />
//         </div>
      
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import IncidentList from "../components/IncidentList";
import IncidentPlayer from "../components/IncidentPlayer";

export default function Home() {
  const [selectedIncident, setSelectedIncident] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex gap-6 p-6">
      {/* Left: Incident Player */}
      <div className="flex-[2] bg-[#121212] rounded-xl p-4 shadow-md ">
        <IncidentPlayer incident={selectedIncident} />
      </div>

      {/* Right: Incident List */}
      <div className="flex-[1.4]">
        <IncidentList onIncidentSelect={setSelectedIncident} />
      </div>
    </div>
  );
}