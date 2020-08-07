const left = document.querySelector('.chevron-left-wrapper');
const right = document.querySelector('.chevron-right-wrapper');
const movingContainer = document.querySelector('.images-container-flex');
const purple = document.querySelector('.show-section');
let trans = 0;

const selectContainer = Array.from(document.querySelectorAll('.imgshow-container'));
const show = Array.from(document.querySelectorAll('.show-flex'));

show.forEach(item => {
    item.classList.add('d-none');
});

// selectContainer[0].classList.add('selected');
show[0].classList.remove('d-none');
purple.style.display = 'none';


selectContainer.forEach(sel => {
    let index = selectContainer.indexOf(sel);
    sel.addEventListener('click', e => {
        purple.style.display = 'block';
        const filt = selectContainer.filter(item => item.classList.contains('selected'));
        if (filt.length === 0) {
            console.log('no-filt')
        }

        else {
            filt[0].classList.remove('selected');
        }
        const filtSecond = show.filter(item => !item.classList.contains('d-none'));
        filtSecond[0].classList.add('d-none');
        sel.classList.add('selected');
        show[index].classList.remove('d-none');
        
    });
});

if (matchMedia) {
    const mq = window.matchMedia("(max-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
    }
  
  
    
  function WidthChange(mq) {
    if (mq.matches) {
      movingContainer.style.transform = 'translateX(0)';
      
    } else {
        left.style.opacity = '0';
        right.addEventListener('click', e => {
            
            if (trans < 1000) {
                trans+= 200;
                movingContainer.style.transform = `translateX(-${trans}px)`;
                left.style.opacity = '1';
            }
        
            else if (trans === 1000) {
                movingContainer.style.transform = `translateX(-1000px)`;
                right.style.opacity = '0';
            }
        
        
        });
        
        left.addEventListener('click', e => {
            if (trans > 0) {
                trans-= 200;
                right.style.opacity = '1';
                movingContainer.style.transform = `translateX(-${trans}px)`;
            } else  if (trans === 0 ){
                movingContainer.style.transform = `translateX(0)`;
                left.style.opacity = '0';
            }
        });
    }
    
  }
