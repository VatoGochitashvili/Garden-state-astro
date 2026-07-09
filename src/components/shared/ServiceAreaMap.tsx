import { useEffect, useRef } from "react";
import { locations as ALL_LOCATIONS } from "@/data/locations";

const SLUG_BY_NAME = new Map(ALL_LOCATIONS.map((l) => [l.name, l.slug]));
const slugify = (name: string) => SLUG_BY_NAME.get(name) ?? name.toLowerCase().replace(/\s+/g, "-");

// Location dots: [lat, lng, name] for all NJ service locations
const SERVICE_LOCATIONS: [number, number, string][] = [
  // Camden County
  [39.894, -75.073, "Audubon"], [39.904, -75.065, "Audubon Park"], [39.862, -75.057, "Barrington"],
  [39.868, -75.094, "Bellmawr"], [39.791, -74.929, "Berlin"], [39.809, -74.923, "Berlin Township"],
  [39.876, -75.110, "Brooklawn"], [39.926, -75.120, "Camden"], [39.934, -75.002, "Cherry Hill"],
  [39.721, -74.893, "Chesilhurst"], [39.812, -74.984, "Clementon"], [39.917, -75.069, "Collingswood"],
  [39.835, -74.963, "Gibbsboro"], [39.895, -75.114, "Gloucester City"], [39.784, -75.007, "Gloucester Township"],
  [39.878, -75.064, "Haddon Heights"], [39.902, -75.072, "Haddon Township"], [39.899, -75.037, "Haddonfield"],
  [39.868, -75.018, "Hi-Nella"], [39.820, -75.000, "Laurel Springs"], [39.865, -75.022, "Lawnside"],
  [39.818, -75.000, "Lindenwold"], [39.857, -75.026, "Magnolia"], [39.953, -75.061, "Merchantville"],
  [39.878, -75.094, "Mount Ephraim"], [39.906, -75.079, "Oaklyn"], [39.972, -75.060, "Pennsauken"],
  [39.790, -74.984, "Pine Hill"], [39.793, -74.973, "Pine Valley"], [39.851, -75.072, "Runnemede"],
  [39.843, -75.024, "Somerdale"], [39.822, -75.011, "Stratford"], [39.905, -74.989, "Tavistock"],
  [39.793, -74.927, "Waterford Township"], [39.700, -74.900, "Winslow Township"], [39.921, -75.104, "Woodlynne"],
  [39.846, -74.946, "Voorhees"],
  // Burlington County
  [39.952, -74.896, "Marlton"], [39.879, -74.825, "Medford"], [39.952, -74.896, "Mount Laurel"],
  [39.967, -74.946, "Moorestown"], [40.002, -74.994, "Cinnaminson"], [39.953, -75.002, "Maple Shade"],
  [39.996, -74.787, "Mount Holly"], [40.025, -74.876, "Willingboro"], [40.020, -74.953, "Delran"],
  [40.027, -74.961, "Riverside"], [40.016, -74.974, "Riverton"], [40.003, -75.028, "Palmyra"],
  [40.013, -74.828, "Westampton"], [39.987, -74.810, "Hainesport"], [39.958, -74.802, "Lumberton"],
  [39.843, -74.826, "Medford Lakes"], [40.050, -74.897, "Edgewater Park"],
  [40.072, -74.866, "Burlington City"], [40.063, -74.845, "Burlington Township"],
  [40.113, -74.815, "Florence"], [40.143, -74.710, "Bordentown City"], [40.138, -74.706, "Bordentown Township"],
  [39.999, -74.805, "Eastampton"], [39.964, -74.764, "Springfield Township"],
  [39.858, -74.694, "Tabernacle"], [39.907, -74.704, "Southampton Township"],
  // Gloucester County
  [39.740, -75.050, "Washington Township"], [39.841, -75.115, "Deptford"], [39.849, -75.146, "West Deptford"],
  [39.838, -75.153, "Woodbury"], [39.820, -75.156, "Woodbury Heights"], [39.703, -75.112, "Glassboro"],
  [39.731, -75.128, "Pitman"], [39.789, -75.183, "Mantua"], [39.800, -75.150, "Wenonah"],
  [39.869, -75.181, "National Park"], [39.836, -75.244, "Paulsboro"], [39.748, -75.311, "Swedesboro"],
  [39.720, -75.306, "Woolwich Township"], [39.789, -75.202, "East Greenwich"],
  [39.640, -75.009, "Monroe Township"], [39.657, -75.092, "Clayton"], [39.793, -75.358, "Logan Township"],
  // Mercer County
  [40.221, -74.756, "Trenton"], [40.183, -74.738, "Hamilton"], [40.264, -74.806, "Ewing"],
  [40.260, -74.726, "Lawrence Township"], [40.198, -74.618, "Robbinsville"],
  // Salem County
  [39.699, -75.477, "Carneys Point"], [39.727, -75.462, "Penns Grove"], [39.657, -75.517, "Pennsville"],
  [39.720, -75.414, "Oldmans Township"], [39.644, -75.326, "Pilesgrove"], [39.649, -75.320, "Woodstown"],
  // Atlantic County
  [39.643, -74.799, "Hammonton"], [39.693, -74.998, "Williamstown"],
];

const CAMDEN_CENTER: [number, number] = [39.926, -75.120];
const FORTY_MILES_METERS = 40 * 1609.34;

export function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    Promise.all([import("leaflet"), import("leaflet/dist/leaflet.css" as string)]).then(([L]) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const map = L.map(mapRef.current, {
        center: CAMDEN_CENTER,
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      L.circle(CAMDEN_CENTER, {
        radius: FORTY_MILES_METERS,
        color: "#1a6b3c",
        fillColor: "#1a6b3c",
        fillOpacity: 0.08,
        weight: 2,
        dashArray: "6 4",
      }).addTo(map);

      const dotIcon = L.divIcon({
        html: `<div style="width:10px;height:10px;background:#1a6b3c;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.4)"></div>`,
        className: "",
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });

      const hqIcon = L.divIcon({
        html: `<div style="width:16px;height:16px;background:#e6a817;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.5)"></div>`,
        className: "",
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      SERVICE_LOCATIONS.forEach(([lat, lng, name]) => {
        const isCamden = name === "Camden";
        const slug = slugify(name);
        const href = `/locations/${slug}`;

        const marker = L.marker([lat, lng], {
          icon: isCamden ? hqIcon : dotIcon,
          keyboard: true,
          title: `${name}, NJ — view locksmith services`,
          alt: `${name}, NJ`,
        })
          .addTo(map)
          .bindTooltip(
            `<strong>${name}, NJ</strong><br/><span style="font-size:11px;color:#1a6b3c;font-weight:600">Click to view services →</span>`,
            { direction: "top", offset: [0, -8], opacity: 0.95 },
          );

        const el = marker.getElement();
        if (el) {
          el.style.cursor = "pointer";
          el.setAttribute("role", "link");
          el.setAttribute("aria-label", `Locksmith services in ${name}, NJ`);
        }

        marker.on("mouseover", () => marker.openTooltip());
        marker.on("mouseout", () => marker.closeTooltip());
        marker.on("click", (e: { originalEvent?: MouseEvent }) => {
          const oe = e.originalEvent;
          if (oe && (oe.ctrlKey || oe.metaKey || oe.button === 1)) {
            window.open(href, "_blank", "noopener");
          } else {
            window.location.href = href;
          }
        });
      });

      mapInstanceRef.current = map;
    });

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={mapRef} style={{ height: "480px", width: "100%", borderRadius: "1rem", overflow: "hidden" }} />
      <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 text-sm z-[1000]">
        <p className="font-bold text-foreground mb-2 text-xs uppercase tracking-wide">Map Legend</p>
        <div className="flex items-center gap-2 mb-1">
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#e6a817", border: "2px solid #fff", flexShrink: 0 }} />
          <span className="text-foreground text-xs">Camden (HQ)</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#1a6b3c", border: "2px solid #fff", flexShrink: 0 }} />
          <span className="text-foreground text-xs">Service location</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-0 w-6 border-t-2 border-dashed shrink-0" style={{ borderColor: "#1a6b3c" }} />
          <span className="text-foreground text-xs">~40 mile radius</span>
        </div>
      </div>
    </div>
  );
}
