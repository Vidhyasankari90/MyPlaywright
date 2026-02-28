let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let state = "";
let action = "";

// Determine element state
if (isPresent === true && isDisplayed === true && isEnabled === true) {
    state = "READY";
    action = "Proceed with interaction (click/type).";
}
else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    state = "DISABLED";
    action = "Wait or check why element is disabled.";
}
else if (isPresent === true && isDisplayed === false) {
    state = "HIDDEN";
    action = "Wait for element to become visible.";
}
else if (isPresent === false) {
    state = "NOT FOUND";
    action = "Check locator or page load issue.";
}

// Determine severity using ternary operator
let severity = (isPresent === false)
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
        ? "WARNING"
        : "OK";

// Print result
console.log("Element State :", state);
console.log("Severity      :", severity);
console.log("QA Action     :", action);