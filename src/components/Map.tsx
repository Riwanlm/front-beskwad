import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import type { TEvent } from "../Accueil";

export const Map = ({ events }: { events: TEvent[] | undefined }) => {

  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {

    if (events) {
      console.log(events);
    }

    if (mapRef.current) {
      return;
    }

    const map = L.map('map').setView([46.656458, 2.437566], 6);
    mapRef.current = map;

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapRef.current);


    events?.forEach((e) => {
      console.log(e);
      const marker = L.marker([Number(e.latitude), Number(e.longitude)]).addTo(map);
      marker.bindPopup(`Titre de l'évènement ${e.title}`)
    })


    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [events]);

  return <div className="h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5 mb-10 rounded-xl" id="map"></div>
}