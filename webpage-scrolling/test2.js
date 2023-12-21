    function scrollToSection(sectionId) {
        // This function gets called when you click on a link.
        // It takes the ID of the section you want to scroll to.

        const section = document.querySelector(sectionId);
        // We find the section in the webpage using the provided ID.

        if (section) {
            // If the section is found, we proceed.

            const offsetTop = section.offsetTop;
            // We figure out how far the section is from the top of the page.

            const duration = 3000; // 3 seconds
            // We set how long we want the scrolling to take (here, it's 3 seconds).

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth',
                duration: duration
            });
            // This is where the actual scrolling happens. 
            // It smoothly scrolls to the target section over the specified duration.
        }
    }
