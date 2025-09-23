"use client";

import { useState } from "react";
import { LocationIcon } from "@/components/icons/LocationIcon";

const getDistanceFromLatLonInMeters = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371e3; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres
  return d;
}

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

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      const locations = [
        { latitude: 27.069833, longitude: -109.446472 },
        { latitude: 27.062917, longitude: -109.417139 }
      ];
      const maxDistanceInMeters = 70;

      const isWithinRange = locations.some(location => {
        const distance = getDistanceFromLatLonInMeters(latitude, longitude, location.latitude, location.longitude);
        return distance <= maxDistanceInMeters;
      });

      if (isWithinRange) {
        // Simulate API call to register attendance
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSuccess(true);
        setMessage(`✓ Asistencia confirmada. Redirigiendo al formulario...`);

        // Generate token
        const token = Date.now().toString(36) + Math.random().toString(36).substring(2);

        // Format coordinates
        const coordinates = `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;

        // Construct URL
        const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSccmdHm9GGU6lKjLQhRV6yH99kLVrJ40FJ8enI2tU84ysQD0A/viewform?usp=pp_url&entry.386190676=${token}&entry.481357669=${encodeURIComponent(coordinates)}&pageHistory=0,1`;

        // Redirect
        window.location.href = formUrl;

      } else {
        setIsSuccess(false);
        setMessage(`❌ No se encuentra en ninguna de las ubicaciones permitidas.`);
      }

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
    <div className="min-h-screen bg-[#f4f4f4] flex flex-col">
      {/* Header */}
      <header className="bg-[#642515] h-14 flex items-center justify-center">
        <h1 className="font-Source Sans Pro text-white text-center font-medium text-lg italic">
          Confirmar ubicación de asistencia
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-start flex-grow p-4 pt-16">
        <div className="bg-white shadow-md px-10 py-16 w-full max-w-lg rounded-lg">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src="/folleto.jpg" alt="Folleto del programa de alumbrado público" className="w-full" />
          </div>

          {/* Button */}
          <button
            onClick={handleLocationConfirmation}
            disabled={isLoading}
            className={`w-full py-1.5 px-4 rounded-full flex items-center justify-center gap-2 font-medium text-sm transition-all duration-200 ${
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
