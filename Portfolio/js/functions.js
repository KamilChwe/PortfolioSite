// Calculates how long it has been since a specific date
function yearsSince(date){
    // Create a new Date object
    // The years Date object will get subtract todays Date with the Date specified and take away 1970
    // 1970 is subtracted to adjust for the Epoch year
    return years = new Date(new Date() - new Date(date)).getFullYear() - 1970;
};

// Sets the years since my birth
document.querySelector("#year").textContent = yearsSince("2002-12-07");

// Sets the years of experiences
document.querySelector("#py").textContent = yearsSince("2019-01-01");
document.querySelector("#cs").textContent = yearsSince("2019-01-01");
document.querySelector("#cpp").textContent = yearsSince("2022-01-01");
document.querySelector("#jav").textContent = yearsSince("2022-01-01");
document.querySelector("#web").textContent = yearsSince("2017-01-01");
document.querySelector("#kot").textContent = yearsSince("2024-01-01");