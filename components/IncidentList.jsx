"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle, AlertTriangle, Camera, Clock } from "lucide-react";

export default function IncidentList({ onIncidentSelect }) {
  const [incidents, setIncidents] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    fetch("/api/incidents")
      .then((res) => res.json())
      .then((data) => {
        const unresolved = data.filter((item) => !item.resolved);
        const resolved = data.filter((item) => item.resolved);
        setIncidents(unresolved);
        setResolvedCount(resolved.length);
      });
  }, []);

  const handleResolve = async (id) => {
    setIncidents((prev) => prev.filter((item) => item.id !== id));
    await fetch(`/api/incidents/${id}/resolve`, { method: "PATCH" });
  };

  return (
    <div className="bg-[#121212] text-white flex flex-col p-6 rounded-xl shadow-md">
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="text-red-500" />
          <h2 className="text-xl font-semibold">
            {incidents.length} Unresolved Incidents
          </h2>
        </div>
        <div className="flex items-center gap-2 text-sm bg-[#1e1e1e] px-3 py-1 rounded-full text-green-400">
          <CheckCircle size={16} />
          <span>{resolvedCount} resolved incidents</span>
        </div>
      </div>

      
      <div className="overflow-y-auto space-y-4 pr-2 custom-scrollbar" style={{ maxHeight: "456px" }}>
        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="flex items-start bg-[#1a1a1a] rounded-lg p-3 gap-4 hover:bg-[#222] transition"
            onClick={() => onIncidentSelect?.(incident)}
          >
            
            <div className="w-24 h-16 relative rounded overflow-hidden shrink-0">
              <Image
                src={incident.thumbnailUrl || "/placeholder.png"}
                alt="Incident thumbnail"
                fill
                className="object-cover"
              />
            </div>

            
         <div className="flex-1">
  <div className="flex items-center gap-2">
    <span className="text-sm font-semibold flex items-center gap-1">
      {incident.type === "Unauthorized Access" && (
        <Image
          src="/door.png" 
          alt="Unauthorized"
          width={16}
          height={16}
        />
      )}
      {incident.type === "Gun Threat" && (
        <Image
          src="/gun.png" 
          alt="Gun Threat"
          width={16}
          height={16}
        />
      )}
      {incident.type}
    </span>
  </div>

<div className="flex items-center text-xs text-gray-400 mt-1 gap-2">
  <Image
    src="/Vector.png" 
    alt="Camera Icon"
    width={14}
    height={14}
  />
  {incident.camera?.location || "Unknown Camera"}
</div>

  <div className="flex items-center text-xs text-gray-400 mt-1 gap-2">
    <Clock size={14} />
    {formatTime(incident.tsStart)} - {formatTime(incident.tsEnd)} on{" "}
    {formatDate(incident.tsStart)}
  </div>
</div>

            
            <button
  onClick={(e) => {
    e.stopPropagation();
    handleResolve(incident.id);
  }}
  className="flex items-center gap-2 text-yellow-400 font-semibold text-base px-2 py-1 rounded-md hover:brightness-110 transition duration-200"
>
  Resolve
  <span className="text-lg">›</span>
</button>

          </div>
        ))}
      </div>
    </div>
  );
}


function formatDate(iso) {
  const date = new Date(iso);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
function formatTime(iso) {
  const date = new Date(iso);
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
