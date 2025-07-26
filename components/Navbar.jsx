import { ChevronDown } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-gradient-to-r from-[#111] to-[#222] text-white flex items-center justify-between px-6 shadow">
      
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="logo1.png"
          alt="Logo"
          className="w-8 h-8 object-contain"
        />
        <span className="text-xl font-semibold">MANDLACX</span>
      </div>

      {/* Center: Navigation */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <div className="flex items-center space-x-1 text-yellow-400">
          <img src="dashboard.png" alt="Dashboard" className="w-4 h-4" />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src="camera.png" alt="Cameras" className="w-4 h-4" />
          <span>Cameras</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src="scene.png" alt="Scenes" className="w-4 h-4" />
          <span>Scenes</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src="incident.png" alt="Incidents" className="w-4 h-4" />
          <span>Incidents</span>
        </div>
        <div className="flex items-center space-x-1">
          <img src="user.png" alt="Users" className="w-4 h-4" />
          <span>Users</span>
        </div>
      </div>

      {/* Right: User Info */}
      <div className="flex items-center space-x-3">
        <img
          src="ME1.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="text-sm">
          <div className="font-medium">Mohammed Ajhas</div>
          <div className="text-gray-300 text-xs">ajhas@mandlac.com</div>
        </div>
       <ChevronDown className="w-4 h-4 text-white" />
      </div>
    </nav>
  );
}
