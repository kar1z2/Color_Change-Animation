var rectangle = document.querySelector("#center");

rectangle.addEventListener("mousemove", function(details){
    var rectangleLocation = rectangle.getBoundingClientRect();
    var insiderectangleval = details.clientX - rectangleLocation.left;

    if(insiderectangleval < rectangleLocation.width/2){
    var redcolor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255 , 0 ,insiderectangleval);
    gsap.to(rectangle,{
        backgroundColor: `rgb(${redcolor},0,0)`,
        ease: Power4,
    })
    }
        else{
            var bluecolor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0 , 255 ,insiderectangleval);
            gsap.to(rectangle,{
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
    })
        }
   
});

rectangle.addEventListener("mouseleave",function(){
    gsap.to(rectangle,{
        backgroundColor:"white",
    })
    
})

