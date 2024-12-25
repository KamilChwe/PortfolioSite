// Scroll to Top Functionality
let scrollButton = document.getElementById("scrollButton");

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    }
    else{
        scrollButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}