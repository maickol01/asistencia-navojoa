export function NavojoaLogo() {
  return (
    <div className="flex flex-col items-center">
      {/* Navojoa Shield SVG */}
      <div className="mb-4">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="object-contain"
        >
          {/* Shield outline */}
          <path
            d="M60 10 L85 20 L85 50 Q85 80 60 110 Q35 80 35 50 L35 20 Z"
            fill="#daa55b"
            stroke="#b8935a"
            strokeWidth="2"
          />

          {/* Cross/Religious symbol */}
          <rect x="55" y="25" width="10" height="30" fill="white" />
          <rect x="45" y="35" width="30" height="10" fill="white" />

          {/* Base/Foundation lines */}
          <rect x="40" y="70" width="40" height="3" fill="white" />
          <rect x="42" y="75" width="36" height="3" fill="white" />
          <rect x="44" y="80" width="32" height="3" fill="white" />
          <rect x="46" y="85" width="28" height="3" fill="white" />

          {/* Side decorative elements */}
          <circle cx="45" cy="30" r="3" fill="white" />
          <circle cx="75" cy="30" r="3" fill="white" />

          {/* Decorative bottom pattern */}
          <polygon points="50,90 60,95 70,90 65,100 55,100" fill="white" />
        </svg>
      </div>

      {/* NAVOJOA text */}
      <div className="text-center">
        <h2 className="text-[#daa55b] font-bold text-2xl mb-1">NAVOJOA</h2>
        <p className="text-[#daa55b] font-medium text-sm">AL SIGUIENTE NIVEL</p>
        <div className="text-[#daa55b] text-lg font-bold">»</div>
      </div>
    </div>
  );
}
