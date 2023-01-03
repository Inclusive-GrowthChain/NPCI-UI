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
    if (payload.status_code === 200)
      onSuccess()
  } catch (error) {
    console.log(error)
  }
}

export async function verifyOtp(data, onSuccess, onFailure) {
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
    // else
    //   onFailure()
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}

export async function fetchNseData(data, onSuccess, onFailure) {
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
    // else
    //   onFailure()
  } catch (error) {
    console.log(error);
  }
}

export async function postNseData(data, onSuccess, onFailure) {
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
    // else
    //   onFailure()
  } catch (error) {
    console.log(error);
  }
}

export async function registerUser(data, onSuccess, onFailure) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'post',
      url: endPoints.register_user,
      data
    })
    if (payload.status_code === 200)
      onSuccess()
    // else
    //   onFailure()
  } catch (error) {
    console.log(error)
  }
}

export async function getPancardData(data, onSuccess, onFailure) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'get',
      url: endPoints.panCardData,
      params: data
    })
    if (payload.status_code === 200)
      onSuccess(payload.data)
    // else
    //   onFailure()
  } catch (error) {
    console.log(error)
  }
}

export async function login(data, onSuccess, onFailure) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'post',
      url: endPoints.login,
      data
    })
    console.log(payload)
    if (payload.status_code === 200)
      onSuccess(payload)
    else
      onFailure()
  } catch (error) {
    console.log(error)
  }
}

export async function fetchTransactions(data, token, onSuccess) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.transactions,
      params: data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchTokenHoldings(data, token, onSuccess) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchTokenHoldings,
      params: data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload)
  } catch (error) {
    console.log(error)
  }
}

export async function tokenize(data, token, onSuccess, onFailure) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'post',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.tokenize,
      data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
    else
      onFailure(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function detokenzie(data, token, onSuccess, onFailure) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'post',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.detokenize,
      data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
    else
      onFailure(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function sellOrder(data, token, onSuccess, onFailure) {
  try {
    console.log(data)
    const payload = await sendApiReq({
      method: 'post',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.placeSellOrder,
      data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
    else
      onFailure(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function buyOrder(data, token, onSuccess, onFailure) {
  try {
    const payload = await sendApiReq({
      method: 'post',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.placeBuyOrder,
      data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
    else
      onFailure(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchMbeMarket(token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchMarket,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function getUserDetails(data, token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.getUserDetails,
      params: data,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchCBDCBalance(data, token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchCBDCBalance,
      params: data,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function addWalletBalance(data, token, onSuccess) {
  console.log(data)
  console.log(token)
  try {
    const payload = await sendApiReq({
      method: 'post',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.addBalance,
      data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchNumOfDetokenizeToken(data) {
  console.log(data);
  const payload = await sendApiReq({
    method: 'get',
    url: endPoints.numOfDetokenizeToken,
    params: data,
  })
  return payload
}

export async function fetchCBDCBalance2(params) {
  const data = await sendApiReq({
    url: endPoints.fetchCBDCBalance,
    params
  })

  return data
}

export async function fetchBondInvestors(token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchInvestors,
    })
    console.log(payload)
    if (payload.status === 200) 
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}