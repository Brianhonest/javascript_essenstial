let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
}else if(userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level: ",accessLevel);


let isLoggedln = true;
let userMessage;

if (isLoggedln) {
    if (userRole === "admin") {
        userMessage = "Welcome,Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
}else {
    userMessage = "Please log in to access the system";
}

console.log("User Message: ",userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    
    case "manager":
        userCategory = "Manger";
        break;
    
    case "subscriber":
        userCategory = "Subscriber";
        break;

    default:
        userCategory = "Unknown";
        break;
}

console.log("User Category: ", userCategory);