let cursor = document.querySelector("#cursor")
let cursorblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
      cursor.style.left = dets.x + "px";
      cursor.style.top = dets.y + "px";
      cursorblur.style.left = dets.x - 130+ "px";
      cursorblur.style.top = dets.y - 130 + "px";
   
      



})
















gsap.to("#nav",{
    backgroundColor:"black",
    height:"100px",

    duration:0.5,
    delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        
        start:"top -10%",
        end:"top -15%",
        scrub:1,

    }
  
    

})
gsap.to("#nav img",{
    height:"60px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav img",
        scroller:"body",
        
        start:"top -10%",
        end:"top -15%",
        scrub:1,
    } 
})
    gsap.to("#main",{
        backgroundColor:"black",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            // markers:true,
            start:"top -20%",
            end:"top -100%",
            
            scrub:2,


        }

    })
gsap.from("#aboutus img,#about",{
    y:70,
    opacity:0,
  
    duration:2,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3,
    }
})
gsap.from(".card",{
    x:-100,
    
    opacity:-5,
  
    duration:5,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:3,
    }
})
gsap.from("#colon1",{
    y:-90,
    x:-90,
    duration:5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from("#colon2",{
    y:90,
    x:90,
    duration:5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:1
    }
})
gsap.from(".ele",{
    y:50,
    
    opacity:0,
  
    duration:5,
    scrollTrigger:{
        trigger:".ele",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:3,
    }
})

// function MouseMover(){
//     window.addEventListener("mousemove", function(dets) {
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//     })
// }
// MouseMover();


// function circleChaptaKaro() {
//     // define default scale value
//     var xscale = 1;
//     var yscale = 1;
  
//     var xprev = 0;
//     var yprev = 0;
  
//     window.addEventListener("mousemove", function (dets) {
//       clearTimeout(timeout);
  
//       xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//       yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
//       xprev = dets.clientX;
//       yprev = dets.clientY;
  
//       circleMouseFollower(xscale, yscale);
  
//       timeout = setTimeout(function () {
//         document.querySelector(
//           "#minicircle"
//         ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//       }, 100);
//     });
//   }
  
//   function circleMouseFollower(xscale, yscale) {
//     window.addEventListener("mousemove", function (dets) {
//       document.querySelector(
//         "#minicircle"
//       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
//   }
  
//   circleChaptaKaro();

//   circleMouseFollower();

function MouseMover() {
    const minicircle = document.querySelector("#minicircle");
    let xPrev = 0;
    let yPrev = 0;

    window.addEventListener("mousemove", function (dets) {
        const xDiff = dets.clientX - xPrev;
        const yDiff = dets.clientY - yPrev;

        const speed = Math.sqrt(xDiff * xDiff + yDiff * yDiff); // Calculate mouse speed
        const scale = 1 + speed * 0.005; // Adjust this factor to control the sensitivity of the motion effect

        minicircle.style.width = `${15 * scale}px`;
        minicircle.style.height = `${15 * scale}px`;

        minicircle.style.transform = `translate(${dets.clientX - minicircle.clientWidth / 2}px, ${
            dets.clientY - minicircle.clientHeight / 2
        }px)`;

        // Store the current mouse position for the next calculation
        xPrev = dets.clientX;
        yPrev = dets.clientY;
    });

    window.addEventListener("mouseout", function () {
        // Reset the size when the mouse leaves the window
        resetCircle();
    });

    function resetCircle() {
        minicircle.style.width = "10px";
        minicircle.style.height = "10px";
    }
}

MouseMover();














         