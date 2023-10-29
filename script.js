var cross=document.querySelector("#left1")
var l1=document.querySelector("#line1")
var l2=document.querySelector("#line2")
var l3=document.querySelector("#line3")
var das=0
var pag=document.querySelector("#pagy1")
cross.addEventListener("click",function(){
    if(das==0){
        l1.style.rotate="45deg"
        l2.style.opacity=0
        l3.style.rotate="-45deg"
        das=1
       
      
    }
    else{
        l1.style.rotate="0deg"
        l2.style.opacity=1
        l3.style.rotate="0deg"
        das=0
       
      
    }

})


document.addEventListener("wheel",function(dets){
  if(dets.deltaY>0.2){
    gsap.to("#nav",{
      top:"-125px",
      duration:0.5,
      

    })
  }
  if(dets.deltaY<0){
    gsap.to("#nav",{
     top:0,
     duration:0.5,
     backgroundColor:"#F7F7EE", 

    })
  }
})


var tl=gsap.timeline()
tl.from("#page1 svg",{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.8,
    stagger:-1,



})

tl.from("#page1 img",{
    scale:0.4,
    duration:1,
    // duration:1,
    ease: Power4.easeOut,  
    borderRadius:"10px"

})
tl.from("#nav",{
  top:"-125px",
  duration:0.5,
  

})


var h2data=document.querySelectorAll("#page2 h2");
h2data.forEach(function(elem){
    
  var data2=  elem.textContent;
//  console.log(data2)
  var splittext=data2.split("");
//   console.log(splittext)
  var cutter=""  ; // this is used for see every single data personally why this is use here
  
  splittext.forEach(function(equal){
    cutter+=`<span>${equal}</span>`;
  });
  elem.innerHTML=cutter;


});


var text3=document.querySelectorAll("#top3 h5")

text3.forEach(function(elvis){
    var data2=elvis.textContent
    var splittext3=data2.split("")
    // console.log(splittext3)
    // divided every character saperatly
    var cutter3=""
    splittext3.forEach(function(e3){
      cutter3+=`<span>${e3}</span>`
      
    })
    elvis.innerHTML=cutter3
     
})

gsap.to("#page3 h5 span",{
  color:"#434B34",
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page3 h5 span",
    scroller:"body",
    // markers:true,
   start:"top 55%",
   end:"top 40%",
   scrub:2,
  }

})

gsap.to("#page2 h2 span",{
  color:"#E3E3C4",
//   mixBlendMode: "difference",
  stagger:0.4,
  scrollTrigger:{
    trigger:"#page2 h2 span",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 5%",
    scrub:2,
  }  
})
gsap.to("#page2 #second,#page2 #third",{
    left:"-30%",
    scrollTrigger:{
        trigger:"#page2 #second",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top -20%",
        scrub:true,
      } 
    
})

gsap.from("#left3 img,#right3 img,#right3 #right4",{
  y:50,
  opacity:0,
  // stagger:1,
  scrollTrigger:{
    trigger:"#bottom3",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 10%",
    scrub:true,

  }

})
gsap.from("#page4 .line4",{
  y:100,
  opacity:0,
  duration:0.5,
  stagger:0.3,
  scrollTrigger:{
    trigger:"#page4 .line4",
    scroller:"body",
    scrub:2,
    // markers:true,
    start:"top 80%",
    end:"top top",

  }
})


 var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
   
      pagination: {
        el: ".swiper-pagination",
        // clickable: true,
        type:"fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
gsap.to("#page6 #pg6,#page6 #gp6",{
  left:"30%",
  scrollTrigger:{
    trigger:"#page6 #pg6,#page6 #gp6",
    scroller:"body",
    scrub:1,
    // markers:true,
    start:"top 90%",
    end:"top 10%",
  }
})
var mi6=document.querySelectorAll("#mid6 h1")
mi6.forEach(function(ankit){
  // console.log(ankit)
  var data6=ankit.textContent
   var splittext6=data6.split("")
  // console.log(splittext6)
  var clutter6=""
  splittext6.forEach(function(ankit6){
    clutter6+=`<span>${ankit6}</span>`
  })
  ankit.innerHTML=clutter6

})
gsap.to("#mid6 h1 span",{
  color:" #E3E3C4",
  stagger:0.2,
  scrollTrigger:{
    trigger:"#mid6 h1",
    scroller:"body",
    // markers:true,
    start:"top 85%",
    end:"top 50%",
    scrub:2,
  }
})

gsap.from("#bot6 #gmi6,#bot6 #gmi7,#bot6 #gmi8",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#bot6 #gmi6,#bot6 #gmi7,#bot6 #gmi8",
    scroller:"body",
    start:"top 90%",
    end:"top 70%",
    // markers:true,
    scrub:2
  }
})

gsap.from("#last6 h1,#last6 button0",{
  y:100,
  opacity:0,
  scrollTrigger:{
    trigger:"#last6 ",
    scroller:"body",
    start:"top 85%",
    end:"top 60%",
    // markers:true,
    scrub:2
  }
})

gsap.to("#page7 #pg7,#page7 #pgg7",{
 x:500,
  scrollTrigger:{
    trigger:"#page7 #pg7,#page7 #pgg7",
    scroller:"body",
    scrub:1,
    // markers:true,
    start:"top 90%",
    end:"top 0%",
  }
})

var pg9=document.querySelectorAll("#page9 h1")
pg9.forEach(function(gg){
  var data9=gg.textContent
  var splittext9=data9.split("")
  var clutter9=""
  splittext9.forEach(function(gg9){
    clutter9+=`<span>${gg9}</span>`
  })
  gg.innerHTML=clutter9
})
gsap.to("#page9 h1 span",{
  color:"#434B34",
  stagger:0.2,
  scrollTrigger:{
    trigger:"#page9 h1 span",
    scorller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 10%",
    scrub:2,
  }

})
gsap.to("#page10 #left10",{
  x:-320,

  scrollTrigger:{
    trigger:"#page10 #left10",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 40%",
    scrub:2,

  }
},"z")
gsap.to("#page10 #right10",{
x:340,
  
  scrollTrigger:{
    trigger:"#page10 #right10",
    scroller:"body",
    // markers:true,
    start:"top 70%",
    end:"top 40%",
    scrub:2,

  }
},"z")
gsap.from("#page10 #mid10",{
  y:100,
  opacity:0,
    
    scrollTrigger:{
      trigger:"#page10 #right10",
      scroller:"body",
      // markers:true,
      start:"top 45%",
      end:"top 30%",
      scrub:1,
  
    }
  },"z")

  gsap.to("#page12 svg",{
    x:600,
    scrollTrigger:{
      trigger:"#page12 svg",
      scroller:"body",
      // markers:true,
      start:"top 95%",
      end:"top 10%",
      scrub:1,
  
    }
  })
  

var t13=document.querySelectorAll("#top13 h1")
t13.forEach(function(ankit13){
  var text13=ankit13.textContent
   var splittext13=text13.split("")
    clutter13=""
    splittext13.forEach(function(ank13){
      clutter13+=`<span>${ank13}</span>`
    })
    ankit13.innerHTML=clutter13;
})
gsap.to("#top13 h1 span",{
  color:"#E3E3C4",
  stagger:0.3,
  delay:0.1,
  scrollTrigger:{
    trigger:"#top13 h1 span",
    scroller:"body",
    // markers:true,
    start:"top 75%",
    end:"top 60%",
    scrub:1,

  }

})
gsap.from("#page13 #mid13>img",{
    y:70,
    opacity:0,
    scrollTrigger:{
      trigger:"#page13 #mid13 img",
      scroller:"body",
      // markers:true,
      start:"top 150%",
      end:"top 90%",
      scrub:1,
  
    }
})