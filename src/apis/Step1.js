import endPoints from "../utils/endPoints";
import sendApiReq from "../utils/sendApiReq";

export async function sendOtp(data, onSuccess) {
  console.log(data);
  try {
    const payload = await sendApiReq({
      method: 'post',
      url: endPoints.otpSending,
      data,
    })

    console.log(payload)
    onSuccess()
  } catch (error) {
    console.log(error)
  }
}

export async function verifyOtp(data, onSuccess) {
  console.log(data);
  try {
    const payload = await sendApiReq({
      method: 'post',
      url: endPoints.otpVerify,
      data,
    })

    console.log(payload)
    onSuccess()
  } catch (error) {
    console.log(error)
  }
}