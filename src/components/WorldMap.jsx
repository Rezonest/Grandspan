import { useEffect, useRef, useState } from 'react';

const DOT = 'rgba(159,205,236,.34)';
const PIN = { self: '#ffffff', est: '#9fcdec', jv: '#d9a441', up: 'rgba(255,255,255,.75)' };
const ARC = { self: 'rgba(159,205,236,.5)', est: 'rgba(159,205,236,.5)', jv: 'rgba(217,164,65,.55)', up: 'rgba(255,255,255,.28)' };

function Pin({ d }) {
  if (d.type === 'up') {
    return <circle cx={d.x} cy={d.y} r="4" fill="none" stroke={PIN.up} strokeWidth="1.4" strokeDasharray="2 2" />;
  }
  return (
    <>
      <circle cx={d.x} cy={d.y} r={d.type === 'self' ? 6 : 4} fill={PIN[d.type]} />
      {d.type === 'self' && <circle cx={d.x} cy={d.y} r="11" fill="none" stroke="rgba(255,255,255,.5)" />}
    </>
  );
}

export default function WorldMap() {
  // Geometry is precomputed and loaded as its own chunk once the page is interactive.
  const [map, setMap] = useState(null);
  const scroller = useRef(null);
  useEffect(() => {
    let live = true;
    import('../data/worldMap.js').then(m => { if (live) setMap(m.default); });
    return () => { live = false; };
  }, []);

  // On narrow screens the map pans sideways; start it centred on London–Pune.
  useEffect(() => {
    const el = scroller.current;
    // 0.6 ≈ midpoint of London (x≈480) and Pune (x≈677) across the 960-wide map.
    if (map && el.scrollWidth > el.clientWidth) el.scrollLeft = el.scrollWidth * 0.6 - el.clientWidth / 2;
  }, [map]);

  return (
    <div className="map-scroll" ref={scroller} role="region" tabIndex={0} aria-label="World map, scroll sideways to see all locations">
    <svg id="world" viewBox="0 0 960 470" role="img" aria-label="World map showing Tenaro network locations">
      {map && (
        <>
          <path d={map.dots} stroke={DOT} strokeWidth="3.2" strokeLinecap="round" />
          <g fill="none">
            {map.locations.map((d, i) => d.type === 'up'
              ? <path key={d.name} d={d.arc} stroke={ARC.up} strokeWidth="1" strokeDasharray="3 4" />
              : <path key={d.name} className="map-arc" d={d.arc} pathLength="1" stroke={ARC[d.type]} strokeWidth={d.type === 'self' ? 1.6 : 1} style={{ animationDelay: `${300 + i * 120}ms` }} />)}
          </g>
          <g fontFamily="Archivo, sans-serif">
            <circle cx={map.hq[0]} cy={map.hq[1]} r="9" fill="rgba(255,255,255,.18)" />
            <circle cx={map.hq[0]} cy={map.hq[1]} r="4.5" fill="#fff" />
            <text x={map.hq[0] + 10} y={map.hq[1] + 16} fill="#fff" fontSize="12" fontWeight="600">Pune · HQ</text>
            {map.locations.map(d => (
              <g key={d.name}>
                <Pin d={d} />
                <text
                  x={d.x + (d.labelLeft ? -9 : 9)}
                  y={d.y + d.labelDy}
                  textAnchor={d.labelLeft ? 'end' : 'start'}
                  fill={d.type === 'up' ? 'rgba(255,255,255,.7)' : '#fff'}
                  fontSize={d.type === 'self' ? 13 : 11.5}
                  fontWeight={d.type === 'self' ? 700 : 500}
                >{d.name}</text>
              </g>
            ))}
          </g>
        </>
      )}
    </svg>
    </div>
  );
}
