const crypto = require('crypto');

process.stdin.setEncoding('utf8');

process.stdout.write('Enter the desired password length: ');

function generateChars(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';
    let output = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(0, chars.length);
        output += chars[randomIndex];
    }
    return output;
}

process.stdin.on('data', (input) => {
    input = input.trim();

    if (!isNaN(input) && input > 0) {
        const length = Number(input);
        if (length < 8) {
            console.log('Please enter a length of at least 8 for better security.');
            process.stdout.write('Enter the desired password length: ');
        } else {
            console.log(`Generating ${length} character(s)`);

            const password = generateChars(length);
            console.log(`Generated password: ${password}`);

            process.exit();
        }
    } else {
        console.log('Please enter a valid number');
        process.stdout.write('Enter the desired password length: ');
    }
});
