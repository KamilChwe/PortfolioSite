// Calculates how long it has been since a specific date
function yearsSince(date){
    // Create a new Date object
    // The years Date object will get subtract todays Date with the Date specified and take away 1970
    // 1970 is subtracted to adjust for the Epoch year
    return years = new Date(new Date() - new Date(date)).getFullYear() - 1970;
};

// Sets the years since my birth
document.querySelector("#year").textContent = yearsSince("2002-12-07");

// Scroll to Top Functionality
let scrollButton = document.getElementById("scrollButton");

// On each scroll check the progress of the page scroll
window.onscroll = function(){
    scrollFunction();
};

// Shows the "To the top" button after a certain threshold
function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    }
    else{
        scrollButton.style.display = "none";
    }
}

// A function that resets the scroll progress, effectively taking the user back to the top
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}