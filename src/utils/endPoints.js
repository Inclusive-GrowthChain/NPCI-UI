// const main = "http://65.2.168.208"

export const root = {
  baseUrl: "http://13.232.85.144:9090/api/v1/",
  // baseUrl: `${main}:8080/api/v1`,
}

const endPoints = {
  register_user: 'create_investor',
  userlist: "",
  login: "login",
  forgotPass: "forgot",
  otpSending: "email_phone_otp",
  otpVerify: "email_phone_otp_verify",
  nseData: "nse_data",
  panCardData: "pancard_data",

  tokenize: "tokenzie"
}

export default endPoints