
function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline(); 
    tl.set(".loading-screen", { bottom: "-100%", height: "100%" });
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        bottom: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        bottom: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { bottom: "-100%" });

}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, opacity: 0, stagger: 0.4, delay: 0.2 });
}


$(function () {
    barba.init({
        sync: true,

        transitions: [
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(1000);
                    done();
                },

                async enter(data) {
                    contentAnimation();
                },

                async once(data) {
                    contentAnimation();
                },
            },
        ],
    });
});
barba.hooks.enter(() => {

  function load_js()
           {
              var head= document.getElementsByTagName('head')[0];
              var script= document.createElement('script');
              script.src= 'assets/js/button.js';
              head.appendChild(script);
           }


});

function inits() {
    AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true
    });
}

barba.hooks.afterOnce(() => {
    inits();
});

barba.hooks.after(() => {
    inits();
});



barba.hooks.after(() => {
    console.log('ok');
    window.scroller.setPostion(0);

});
