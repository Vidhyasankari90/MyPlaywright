let attempt = 0;
let success = false;

do {
    attempt++;

    let randomValue = Math.random();
    console.log("Attempt:", attempt);

    if (randomValue > 0.6) {
        console.log("API Call Successful");
        success = true;
    } else {
        console.log("API Call Failed");
    }

} while (!success && attempt < 5);

if (success) {
    console.log("Final Result: Success after " + attempt + " attempt(s)");
} else {
    console.log("Final Result: Failed after 5 attempts");
}