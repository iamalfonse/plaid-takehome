(() => {
    const backendSection = document.querySelector('#header--backend');
    let rect = backendSection.getBoundingClientRect();
    let backendPos = rect.top + window.scrollY - 30;

    const leftSide = document.querySelector('.left-side');
    const accordion = document.querySelectorAll('.accordion');

    // loop through each accordion to add click event and toggle closed class
    for (let i = 0; i < accordion.length; i++) {
        (function(i) {
            accordion[i].addEventListener('click', function() {
                const contentH = accordion[i].querySelector('.accordion__content p');
                const isClosed = accordion[i].classList.contains('closed');

                // set height of accordion to height of content if closed
                isClosed ? contentH.parentElement.style.height = (contentH.clientHeight + 40) + 'px' : contentH.parentElement.style.height = 0;
                
                accordion[i].classList.toggle("closed");

                // update new position of backend section
                setTimeout(function() { // wait for animation to finish first
                    rect = backendSection.getBoundingClientRect();
                    backendPos = rect.top + window.scrollY - 50; // minus 50px to trigger it before reaching backend section
                }, 250)
                
            });
        })(i);
    }
    

    //scrolling
    window.addEventListener('scroll', function(event) {
        const scrollPosition = window.scrollY;

        // once scrolling reached backend section, add backend class
        if(scrollPosition >= backendPos) {
            leftSide.classList.add('backend');
            leftSide.classList.remove('frontend');
        } else {
            leftSide.classList.add('frontend');
            leftSide.classList.remove('backend');
        } 
    });
    
})();