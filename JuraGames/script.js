const bird = document.getElementById("jura");
        const arbuz = document.getElementById("arbuz");
        
        document.addEventListener("keydown", function(event) {
            jump();
        });
        
        function jump () {
            if (bird.classList !="jump"){
                bird.classList.add("jump")
            }
            setTimeout(function(){
                bird.classList.remove("jump")
            }, 300)
        }

let isAlive = setInterval (function (){
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    let arbuzLeft = parseInt(window.getComputedStyle(arbuz).getPropertyValue("left"));

    if(arbuzLeft < 60 &&  arbuzLeft > 0 && birdTop >= 140) {

        alert("СЕРЁГА УМЕР!!!")
    }
}, 10)