const crypto = require('crypto');
const fs = require('fs');

const encrypt = (salt, password) => {
    crypto.pbkdf2(password, salt.toString(), 1, 32, 'sha512', (err, derivedKey) => {
        if (err) throw err;
        const hashed = derivedKey.toString('hex');
        fs.writeFile("hashed.txt", hashed, (err, data)=>{
            if (err) return console.log (err.message);
            console.log("hashed.txt가 생성되었습니다.");
        });
    });
}

fs.readFile('password.txt', 'utf8', (err, data)=>{
    if (err) return console.log (err.message);
    const salt = crypto.randomBytes(32).toString('hex');
    encrypt(salt, data);
});