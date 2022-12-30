export const root = {
  baseUrl: "http://13.232.85.144:9090/api/v1/",
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

  getUserDetails: "getUserDetails",

  tokenize: "trade/tokenize",
  detokenize: "trade/detokenize",

  sellOrder: "trade/placeSellOrder",
  buyOrder: "trade/placeBuyOrder",

  fetchMarket: "dashbord",
  fetchTokenHoldings: "getBonddetailsofUser",

  tokenholding: "tokenholding",
  transactions: "transactions",
  bondholding: "bondholding",
  purchaseLog: "purchaseLog",
  market: "market",
}

export default endPoints