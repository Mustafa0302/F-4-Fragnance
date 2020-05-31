// ==========================our exclusive slider start ============================
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

// ================================our exlusive slider end================================ 

// =================================trending start here==========================

const parallax = document.getElementById ("parallax");
window.addEventListener("scroll",function
()
{
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset
    *0.5 +  "px";

})

// =================================trending End here==========================


//================================ contact us button================================

var mybutton = document.getElementById("btnScrollTobottom");
function topFunction() {
    document.body.scrollTop = 0  ;
    document.documentElement.scrollTop = 3700;
  }

  //================================ contact us button End =============================