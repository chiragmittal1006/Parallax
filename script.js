var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top 95%",
    end: "top 20%",
    scrub: 2,
  },
});

tl.to(
  ".fanta",
  {
    top: "150%",
    left: "25%",
  },
  "anim"
)
.to(".orange-cut", {
    top:"160%",
    left:"25%",
},"anim")
.to(".orange", {
    width:"15%",
    top:"160%",
    right:"5%",
},"anim")
.to(".leaf2", {
    top:"95%",
    left:"84%",
    rotate:"20deg",
},"anim")
.to(".leaf3", {
    top:"100%",
    right:"80%",
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      start: "top 22%",
      end: "top -90%",
      scrub: 2,
      markers:true
    },
  });

  tl2.from(".lemon1",{
    top:"10%",
    left: 0
  },"anim2")
  .from(".lemon2",{
    top:"10%",
    left: "100%"
  },"anim2")
  .to(".coke1",{
    bottom:"25%",
    rotate:"0deg",
  },"anim2")
  .to(".coke2",{
    bottom:"28%",
    rotate:"0deg",
  },"anim2")
  .to(".fanta",{
    top:"248%",
    left:"50%",
  },"anim2")
  .to(".orange-cut",{
    top:"208%",
    left:"42.5%",
  },"anim2")