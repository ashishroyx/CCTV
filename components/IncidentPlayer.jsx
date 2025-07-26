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
      {/* Main Video Frame with Thumbnails Overlayed */}
      <div className="relative w-full h-[530px] bg-black rounded-xl overflow-hidden shadow-md">
        <Image
          src={incident.thumbnailUrl || "/placeholder.png"}
          alt="Incident Footage"
          width={800}
          height={100}
          className="object-cover w-full h-full"
        />

        {/* Thumbnail Strip Positioned Bottom Right */}
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

      {/* Camera Info
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-1">{incident.type}</h2>
          <p className="text-sm text-gray-400">{incident.camera?.location}</p>
        </div>
      </div> */}
    </div>
  );
}
