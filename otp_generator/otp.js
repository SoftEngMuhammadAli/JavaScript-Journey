function generateOTP() {
  const otp = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, "0");
  return `Your generated OTP is: ` + otp;
}

console.log(generateOTP());
