gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".panel").forEach((panel,i)=>{
    ScrollTrigger.create({
        trigger:panel,
        start:"top top",
        pin: true,
        markers:true,
        pinSpacing:false
    })
})