const button=document.querySelector(".menu-button");
const menu=document.querySelector(".nav-links");
if(button&&menu){
  button.addEventListener("click",()=>{
    const open=menu.classList.toggle("open");
    button.setAttribute("aria-expanded",String(open));
  });
}
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>menu?.classList.remove("open")));
