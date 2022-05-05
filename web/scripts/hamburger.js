window.onload = function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    const btnPrev = document.getElementById("button-prev");
    const btnNext = document.getElementById("button-next");
    const itemTrack = document.getElementById("track");
    const itemList = document.getElementById("slick-list");
    const item = document.querySelectorAll(".slick");

    const itemWidth = item[0].offsetWidth;

    btnPrev.onclick = () => move(1);
    btnNext.onclick = () => move(2);

    function move(value) {
        const trackWidth = itemTrack.offsetWidth;
        const listWidth = itemList.offsetWidth;

        itemTrack.style.left == "" ? leftPosition = itemTrack.style.left = 0 : leftPosition = parseFloat(itemTrack.style.left.slice(0, -2) * -1);

        if (leftPosition < (trackWidth - listWidth) && value == 2) {
            itemTrack.style.left = `${-1  * (leftPosition + itemWidth)}px`;
        } else if (leftPosition > 0 && value == 1) {
            itemTrack.style.left = `${-1  * (leftPosition - itemWidth)}px`;
        }
    }

/*     function move (event) {
        const btn = event.currentTarget;
        const slickList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const slick = track.querySelectorAll('.slick');
    
        const slickWidth = slick[0].offsetWidth;
        
        const trackWidth = track.offsetWidth;
        const listWidth = slickList.offsetWidth;
    
        track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);
    
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track);
    }
    
    let prevAction = (leftPosition,slickWidth,track) => {
        if(leftPosition > 0) {
            console.log("entro 2")
            track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
        }
    }
    
    let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
        if(leftPosition < (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
        }
    }

    btnPrev.onclick = () => move(1);
    btnNext.onclick = () => move(2);
 */
}