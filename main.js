(()=>{const b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
if(b&&n){b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus()}})}
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});els.forEach(el=>io.observe(el))}else els.forEach(el=>el.classList.add('in'));
const f=document.getElementById('enquiry');
if(f){const nx=document.getElementById('f-next');try{nx.value=new URL('thank-you.html',location.href).href}catch(e){}
const st=document.getElementById('f-status'),btn=document.getElementById('f-submit');
f.addEventListener('submit',e=>{if(!f.checkValidity()){e.preventDefault();f.reportValidity();st.textContent='Please complete the required fields.';st.classList.add('err');return}
if(f.elements['_honey'].value){e.preventDefault();return}
const area=f.elements['Area of support'].value,co=f.elements['Company'].value.trim();
f.elements['_subject'].value='New project enquiry: '+area+(co?' / '+co:'');
st.classList.remove('err');st.textContent='Sending your enquiry...';btn.disabled=true;});
window.addEventListener('pageshow',()=>{btn.disabled=false})}})();
