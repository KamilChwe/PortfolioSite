// Calculates how long it has been since a specific date
function yearsSince(date){
    // Create a new Date object
    // The years Date object will get subtract todays Date with the Date specified and take away 1970
    // 1970 is subtracted to adjust for the Epoch year
    return years = new Date(new Date() - new Date(date)).getFullYear() - 1970;
};

// Sets the years since my birth
document.querySelector("#year").textContent = yearsSince("2002-12-07");

