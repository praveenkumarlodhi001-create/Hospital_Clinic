const $=s=>document.querySelector(s);
$("#year").textContent=new Date().getFullYear();
$("#menuBtn").addEventListener("click",()=>$("#mobileNav").classList.toggle("open"));
$("#mobileNav").querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>$("#mobileNav").classList.remove("open")));
const reviews=[
{quote:"The team made me feel comfortable from the moment I arrived. Everything was explained clearly, and I felt listened to.",name:"Aarav S."},
{quote:"A calm, welcoming experience. I appreciated how thoughtfully the doctor walked me through every next step.",name:"Mira K."},
{quote:"Booking was simple and the staff were kind and organised. The whole visit felt personal.",name:"Dev R."}
];let reviewIndex=0;
function showReview(){const r=reviews[reviewIndex];$("#quoteText").textContent=r.quote;$("#quoteName").textContent=r.name;$("#reviewNumber").textContent=`0${reviewIndex+1} / 03`}
$("#nextReview").addEventListener("click",()=>{reviewIndex=(reviewIndex+1)%reviews.length;showReview()});
$("#prevReview").addEventListener("click",()=>{reviewIndex=(reviewIndex+reviews.length-1)%reviews.length;showReview()});
const dateInput=$("#visitDate"),today=new Date();dateInput.min=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split("T")[0];
const toast=(msg)=>{const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove("show"),3000)};
$("#appointmentForm").addEventListener("submit",e=>{e.preventDefault();const data=new FormData(e.currentTarget);const name=data.get("name").trim();$("#formFeedback").textContent=`Thank you, ${name}. Your demo appointment request has been captured in this browser only. Connect a secure booking backend before launch.`;e.currentTarget.reset();toast("Appointment request demo submitted")});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){window.addEventListener("scroll",()=>{const img=document.querySelector(".hero-bg img");if(window.scrollY<850)img.style.transform=`translateY(${window.scrollY*.1}px) scale(1.04)`},{passive:true})}
