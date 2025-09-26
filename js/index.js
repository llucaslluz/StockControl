const rand = (min, max) => Math.random() * (max - min) + min;
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

function prepareBoxes(boxes){
  boxes.forEach(box => {
    box.style.setProperty('--ox', `${rand(-25,25)}px`);
    box.style.setProperty('--oy', `${rand(-25,25)}px`);
  });
}

function animateRow(selector, startDelay=0, step=120){
  const boxes = Array.from(document.querySelectorAll(`${selector} .box`));
  prepareBoxes(boxes);
  const order = shuffle([...boxes.keys()]);
  order.forEach((idx,i)=>{
    setTimeout(()=>boxes[idx].classList.add('show'), startDelay + i*step);
  });
  return startDelay + order.length * step;
}

const t1 = animateRow('#row-stock', 250, 150);
const t2 = animateRow('#row-control', t1+300, 150);

setTimeout(()=>{
  const anim=document.getElementById('animation');
  anim.style.opacity=0;
  anim.style.transform='scale(.96)';
}, t2+1200);

setTimeout(()=>{
  window.location.href="pages/auth/login.html";
}, t2+2000);
