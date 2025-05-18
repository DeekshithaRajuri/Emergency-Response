// hashPassword.js
import bcrypt from "bcryptjs";

const hashPassword = async () => {
    const plainPassword = "admin123"; // Change this to whatever password you need
    const hashed = await bcrypt.hash(plainPassword, 10);
    console.log("Hashed password:", hashed);
};

hashPassword();
