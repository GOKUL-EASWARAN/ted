// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray(".panel").forEach((panel,i)=>{
//     ScrollTrigger.create({
//         trigger:panel,
//         start:"top 165",
//         // end:"bottom +=320",
//         pin: true,
//         markers:true,
//         pinSpacing:false
//     })
   
// })

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");



const frameCount = 7;
const currentFrame = index => {
  if(screen.width>480){
   return `./img/speaker${index}.jpg`
  }
  else if(index>=7){
   return `./img/speakera${index}.jpg`
  }
  else{
    return `./img/speaker${index}.jpg`
  }
}
  
  


const preloadImages = () => {
  // for (let i = 1; i < frameCount;i++) {
    const img = new Image()
    img.src = currentFrame(1);
    canvas.width=1158;
    canvas.height=670;
  context.drawImage(img, 0, 0);
  // }
};

// const img = new Image()
// // img.src = currentFrame(1);
// canvas.width=1158;
// canvas.height=670;
// img.onload=function(){
//   // context.drawImage(img, 0, 0);
// }

const updateImage = index => {
  
  const img = new Image()
  img.src = currentFrame(index);  
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

// ////////////////
