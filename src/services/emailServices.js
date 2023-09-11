/*  const transporter = nodemailer.createTransport({
        host: 'smtp.titan.email',
        port: 465,
        secure: true,
        auth: {
            user: 'ismail@solutrend.com',
            pass: 'ismail#89118911',
        },
    });*/

// Assuming you have the recipient's email address stored in a variable called recipientEmail

export const sendEmail = (recipientEmail) => {
    const url = `https://solutrend.com/sender.php?email=${recipientEmail}`;

    fetch(url, {
        mode: 'no-cors',
    });
};

