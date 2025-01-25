export function validateEmail(email) {
    console.log("Validating Email:", email);

    if (!email) {
        console.log("Email empty");
        return "Email is required";
    }

    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log("Testing email against regex:", isValidEmail.test(email));

    if (!isValidEmail.test(email)) {
        console.log("Email is incorrect!");
        return "Valid email required";
    }

    console.log("Email passed validation");

    return "";
}
