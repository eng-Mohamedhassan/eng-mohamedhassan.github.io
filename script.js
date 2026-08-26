const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');

menu?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  if(open){
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.top='72px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.padding='20px';
    nav.style.background='#070b12';
    nav.style.flexDirection='column';
    nav.style.borderBottom='1px solid rgba(255,255,255,.08)';
  }else{
    nav.removeAttribute('style');
  }
});

nav?.querySelectorAll('a').forEach(link=>{
  link.addEventListener('click',()=>{
    if(window.innerWidth<=850){
      nav.classList.remove('open');
      nav.removeAttribute('style');
    }
  });
});
