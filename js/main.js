if (document.querySelectorAll && document.documentElement.classList) {
    const sections = document.querySelectorAll('.section');
    const sectionButtons = document.querySelectorAll('.controls');
    const sectionButton = document.querySelectorAll('.control');
    const theSections = document.querySelectorAll('.main-content');

    function PageTransitions() {
        // Class for active button
        for (let i = 0; i < sectionButton.length; i++) {
            sectionButton[i].addEventListener('click', function () {
                let currentButton = document.querySelectorAll('.active-btn');
                currentButton[0].className = currentButton[0].className.replace('active-btn', '');
                this.className += ' active-btn';
            })
        }
        // Ignore active class
        theSections.forEach((section) => {
            section.addEventListener('click', (e) => {
                const id = e.target.dataset.id;
                if (id) {
                    // remove active class from other buttons
                    sectionButtons.forEach((button) => button.classList.remove('active'));
                    // add active class to clicked button
                    e.target.classList.add('active');
                    // hide other sections
                    sections.forEach((section) => section.classList.remove('active'));
                    // show selected section
                    const element = document.getElementById(id);
                    element.classList.add('active');
                }
            })
        })
    }

    PageTransitions();
}
