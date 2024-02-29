let score = parseInt(prompt("Enter your score (between 1 and 100):"));

if (score >= 1 && score <= 100) {
    if (score >= 90) {
        console.log("You received an A");
    } else if (score >= 80) {
        console.log("You received a B");
    } else if (score >= 70) {
        console.log("You received a C");
    } else if (score >= 60) {
        console.log("You received a D");
    } else {
        console.log("You received an F");
    }
} else {
    console.log("Only numbers between 1 and 100 are accepted.");
}

/*
let score = parseInt(prompt("Enter your score (between 1 and 100):"));

switch (true) {
    case score >= 90 && score <= 100:
        console.log("You received an A");
        break;
    case score >= 80 && score < 90:
        console.log("You received a B");
        break;
    case score >= 70 && score < 80:
        console.log("You received a C");
        break;
    case score >= 60 && score < 70:
        console.log("You received a D");
        break;
    case score >= 0 && score < 60:
        console.log("You received an F");
        break;
    default:
        console.log("Only numbers between 1 and 100 are accepted.");
        break;
}
*/