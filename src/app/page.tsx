"use client";

import { useState } from "react";
import { LocationIcon } from "@/components/icons/LocationIcon";
import { NavojoaLogo } from "@/components/NavojoaLogo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLocationConfirmation = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      // Request geolocation
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocalización no disponible"));
          return;
        }

        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        });
      });

      const { latitude, longitude } = position.coords;

      // Simulate API call to register attendance
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setMessage(`✓ Asistencia confirmada en: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);

    } catch (error) {
      setIsSuccess(false);
      if (error instanceof GeolocationPositionError) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setMessage("❌ Acceso a ubicación denegado. Active los permisos de ubicación.");
            break;
          case error.POSITION_UNAVAILABLE:
            setMessage("❌ Ubicación no disponible. Verifique su conexión.");
            break;
          case error.TIMEOUT:
            setMessage("❌ Tiempo de espera agotado. Intente nuevamente.");
            break;
          default:
            setMessage("❌ Error al obtener ubicación.");
        }
      } else {
        setMessage("❌ Error al confirmar asistencia. Intente nuevamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfb]">
      {/* Header */}
      <header className="bg-[#642515] h-14 flex items-center justify-center">
        <h1 className="text-white text-center font-medium text-lg">
          Confirmar ubicación de asistencia
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-6 py-8">
        <div className="bg-white shadow-lg p-8 w-full max-w-sm rounded-[14px] my-[30px]">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <NavojoaLogo />
          </div>

          {/* Button */}
          <button
            onClick={handleLocationConfirmation}
            disabled={isLoading}
            className={`w-full py-2.5 px-4 rounded-full flex items-center justify-center gap-2 font-medium text-sm transition-all duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : isSuccess
                ? "bg-green-600 hover:bg-green-700"
                : "bg-[#642515] hover:bg-[#7a2f1f]"
            } text-white`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span className="text-xs">OBTENIENDO UBICACIÓN...</span>
              </>
            ) : (
              <>
                <LocationIcon />
                PRESIONE AQUÍ
              </>
            )}
          </button>

          {/* Message Display */}
          {message && (
            <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
              isSuccess
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}>
              {message}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
