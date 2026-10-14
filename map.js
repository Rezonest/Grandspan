(async()=>{const svg=d3.select('#world');if(svg.empty())return;
const W=960,H=470,proj=d3.geoEquirectangular().scale(153).translate([W/2,H/2+40]),path=d3.geoPath(proj);
const g=svg.append('g');
try{const w=await (await fetch('vendor/land-110m.json')).json();
const land=topojson.feature(w,w.objects.land);
// dot-matrix land
const step=7,pts=[];for(let x=0;x<W;x+=step)for(let y=0;y<H;y+=step){const ll=proj.invert([x,y]);if(ll&&ll[1]>-58&&d3.geoContains(land,ll))pts.push([x,y])}
g.selectAll('circle.d').data(pts).join('circle').attr('cx',d=>d[0]).attr('cy',d=>d[1]).attr('r',1.6).attr('fill','rgba(159,205,236,.34)');}catch(e){}
const hq=[73.85,18.62];
const L=[
{n:'London',c:[-0.12,51.5],t:'self'},{n:'Frankfurt',c:[8.68,50.11],t:'est'},{n:'Singapore',c:[103.82,1.35],t:'est'},{n:'Perth',c:[115.86,-31.95],t:'est'},
{n:'Nairobi',c:[36.82,-1.29],t:'est'},{n:'Accra',c:[-0.19,5.6],t:'est'},{n:'Guatemala City',c:[-90.51,14.63],t:'jv'},
{n:'Abu Dhabi',c:[54.37,24.45],t:'up'},{n:'Orlando',c:[-81.38,28.54],t:'up'},{n:'Ottawa',c:[-75.7,45.42],t:'up'},{n:'Brasília',c:[-47.88,-15.79],t:'up'}];
const col={self:'#ffffff',est:'#9fcdec',jv:'#d9a441',up:'rgba(255,255,255,.75)'};
const arcs=svg.append('g');
L.forEach((d,i)=>{const p=arcs.append('path').datum({type:'LineString',coordinates:[hq,d.c]}).attr('d',path).attr('fill','none')
.attr('stroke',d.t==='up'?'rgba(255,255,255,.28)':d.t==='jv'?'rgba(217,164,65,.55)':'rgba(159,205,236,.5)').attr('stroke-width',d.t==='self'?1.6:1).attr('stroke-dasharray',d.t==='up'?'3 4':null);
if(d.t!=='up'&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const len=p.node().getTotalLength();p.attr('stroke-dasharray',len).attr('stroke-dashoffset',len).transition().delay(300+i*120).duration(1100).ease(d3.easeCubicOut).attr('stroke-dashoffset',0)}});
const pins=svg.append('g');
const [hx,hy]=proj(hq);pins.append('circle').attr('cx',hx).attr('cy',hy).attr('r',9).attr('fill','rgba(255,255,255,.18)');
pins.append('circle').attr('cx',hx).attr('cy',hy).attr('r',4.5).attr('fill','#fff');
pins.append('text').attr('x',hx+10).attr('y',hy+16).text('Pune · HQ').attr('fill','#fff').attr('font-size',12).attr('font-weight',600).attr('font-family','Archivo, sans-serif');
L.forEach(d=>{const [x,y]=proj(d.c);
if(d.t==='up')pins.append('circle').attr('cx',x).attr('cy',y).attr('r',4).attr('fill','none').attr('stroke',col.up).attr('stroke-width',1.4).attr('stroke-dasharray','2 2');
else{pins.append('circle').attr('cx',x).attr('cy',y).attr('r',d.t==='self'?6:4).attr('fill',col[d.t]);if(d.t==='self')pins.append('circle').attr('cx',x).attr('cy',y).attr('r',11).attr('fill','none').attr('stroke','rgba(255,255,255,.5)')}
const left=['Ottawa','Orlando','Guatemala City','Brasília','Accra','London'].includes(d.n);
pins.append('text').attr('x',x+(left?-9:9)).attr('y',y+(d.n==='Frankfurt'?-6:d.n==='London'?-8:4)).attr('text-anchor',left?'end':'start').text(d.n)
.attr('fill',d.t==='up'?'rgba(255,255,255,.7)':'#fff').attr('font-size',d.t==='self'?13:11.5).attr('font-weight',d.t==='self'?700:500).attr('font-family','Archivo, sans-serif');});
})();
