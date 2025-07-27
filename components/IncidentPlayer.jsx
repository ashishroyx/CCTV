"use client";
import Image from "next/image";

export default function IncidentPlayer({ incident }) {
  if (!incident) {
    return (
      <div className=" flex items-center justify-center text-gray-400 text-lg">
        Select an incident to view details
      </div>
    );
  }

  return (
    <div className="flex ">
      
      <div className="relative w-full h-[530px] bg-black rounded-xl overflow-hidden shadow-md">
        <Image
          src={incident.thumbnailUrl || "/placeholder.png"}
          alt="Incident Footage"
          width={800}
          height={100}
          className="object-cover w-full h-full"
        />

        
        <div className="absolute bottom-4 right-4 flex gap-3 z-10">
          <div className="relative w-[140px] h-[80px] rounded-lg overflow-hidden border border-gray-700">
            <Image
              src={incident.thumbnailUrl || "/placeholder.png"}
              alt="Camera angle 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-[140px] h-[80px] rounded-lg overflow-hidden border border-gray-700">
            <Image
              src={"/thumb3.jpg"}
              alt="Camera angle 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  );
}
