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
    if(payload.status_code === 200)
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
    if (payload.status_code === 200)
      onSuccess()
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

export async function fetchNseData(data, onSuccess) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'get',
      url: endPoints.nseData,
      params: data,
    })
    console.log(payload)
    if (payload.status_code === 200)
      onSuccess(payload)
  } catch (error) {
    console.log(error);
  }
}

export async function postNseData(data, onSuccess) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'post',
      url: endPoints.nseData,
      data,
    })
    console.log(payload)
    if (payload.status_code === 200)
      onSuccess()
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPanCardDetails(details, onSuccess) {
  try {
    console.log(details);
    const payload = await sendApiReq({
      method: 'get',
      url: endPoints.panCardData,
      params: details,
    })

    console.log("payload")
    console.log(payload)
    if (payload.status === 200)
      onSuccess()
  } catch (error) {
    console.log(error)
  }
}

export async function registerUser(details, onSuccess) {
  try {
    console.log(details);
    const payload = await sendApiReq({
      method: 'post',
      url: endPoints.register_user,
      details
    })
    console.log(payload)
    onSuccess()
  } catch (error) {
    console.log(error)
  }
}