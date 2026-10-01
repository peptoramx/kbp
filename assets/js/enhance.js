'use strict';
const industryContent={
 industry:{service:1,es:['Industria que se transforma.','Equipamiento, capacidad instalada y expansión. Estructuramos el proyecto y su capacidad de pago antes de presentarlo a una fuente de inversión.'],en:['Industry in transformation.','Equipment, operating capacity and expansion. We structure the project and its repayment capacity before presenting it to an investment source.']},
 agroindustry:{service:8,es:['Capital al ritmo de tu producción.','Agricultura, ganadería, pesca y acuicultura. Integramos el ciclo productivo, los costos y la comercialización en un expediente financiero coherente.'],en:['Capital at the pace of production.','Agriculture, livestock, fisheries and aquaculture. We bring production cycles, costs and sales together in a coherent financing package.']},
 trade:{service:0,es:['Negocios que no se detienen.','Inventarios, insumos, distribución y cuentas por cobrar. Analizamos tu ciclo de caja para estructurar el capital de trabajo que tu operación necesita.'],en:['Business that keeps moving.','Inventory, inputs, distribution and receivables. We assess your cash cycle to structure the working capital your operations need.']}
};
let activeIndustry='industry';
const industryImage=document.getElementById('industry-image'),industryCopy=document.getElementById('industry-copy');
function showIndustry(name){
 if(!industryContent[name])return;activeIndustry=name;const content=industryContent[name],language=content[currentLang];
 document.querySelectorAll('[data-industry]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.industry===name)));
 industryImage.src='assets/img/'+name+'-1200.webp';industryImage.srcset='assets/img/'+name+'-640.webp 640w, assets/img/'+name+'-1200.webp 1200w';
 const number=Object.keys(industryContent).indexOf(name)+1;
 industryCopy.replaceChildren();const count=document.createElement('span');count.className='industry-count';count.setAttribute('aria-hidden','true');count.textContent='0'+number+' / 03';const heading=document.createElement('h3');heading.textContent=language[0];const description=document.createElement('p');description.textContent=language[1];const link=document.createElement('a');link.className='btn gold';link.href='#service-'+content.service;link.textContent=currentLang==='es'?'Explorar solución ↗':'Explore solution ↗';industryCopy.append(count,heading,description,link);
 industryCopy.classList.remove('is-entering');requestAnimationFrame(()=>industryCopy.classList.add('is-entering'));
}
document.querySelectorAll('[data-industry]').forEach(b=>b.addEventListener('click',()=>showIndustry(b.dataset.industry)));
document.addEventListener('kabepe:language',()=>showIndustry(activeIndustry));showIndustry(activeIndustry);
if('IntersectionObserver' in window){new IntersectionObserver(entries=>entries.forEach(entry=>document.body.classList.toggle('past-hero',!entry.isIntersecting&&entry.boundingClientRect.bottom<0)),{threshold:0}).observe(document.getElementById('inicio'));}
if(!reduced&&'IntersectionObserver' in window){
 document.documentElement.classList.add('motion-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('section:not(.hero):not(#glosario) .section-head, .route-heading, .gallery-heading, .about-quote').forEach(el=>{el.classList.add('scroll-reveal');observer.observe(el);});
}
