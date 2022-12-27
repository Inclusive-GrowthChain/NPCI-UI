import axios from "axios";
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
      data,
    })
    console.log(payload)

    onSuccess()
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

    onSuccess()
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPanCardDetails(data, onSuccess) {
  try {
    console.log(data);
    // const payload = await sendApiReq({
    //   method: 'get',
    //   url: endPoints.panCardData,
    //   data: { data }
    // })

    const response = await axios.get(
      "http://13.127.192.121:9090/api/v1/pancard_data",
      {
        data: {data}
      }
    )

    console.log("payload")
    console.log(response)
    onSuccess()
  } catch (error) {
    console.log(error)
  }
}

