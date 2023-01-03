import endPoints from "../utils/endPoints";
import sendApiReq from "../utils/sendApiReq";

export async function getInvestorLists(onSuccess) {
  try {
    const res = await sendApiReq({})
    console.log("investors List")
    console.log(res)
    onSuccess(res.message)

  } catch (error) {
    console.log(error)
  }
}

export async function getUserDetails(MbeId, onSuccess) {
  try {
    const res = await sendApiReq({
      url: `${endPoints.userDetail}?MbeId=${MbeId}`,
    })

    console.log(res)
    // onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function getBondholding(data, onSuccess) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'get',
      url: endPoints.fetchTokenHoldings,
      params: data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function getTokenHoldings(data, onSuccess) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'get',
      url: endPoints.fetchTokenHoldings,
      params: data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function getTransactions(data, onSuccess) {
  try {
    console.log(data);
    const payload = await sendApiReq({
      method: 'get',
      url: endPoints.transactions,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function getPurchaseLog(token, onSuccess) {
  try {
    const res = await sendApiReq({
      method: "get",
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.purchaseLog,
    })

    console.log(res)
    if (res.status === 200)
      onSuccess(res.message)

  } catch (error) {
    console.log(error)
  }
}

export async function getMarket(onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      url: endPoints.fetchMarket,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchAllUserSellTransactions(token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchAllUserSellTransactions,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchAllUserBuyTransactions(token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchAllUserBuyTransactions,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchSingleUserSellTransactions(data, token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchSingleUserSellTransactions,
      params: data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchSingleUserBuyTransactions(data, token, onSuccess) {
  try {
    const payload = await sendApiReq({
      method: 'get',
      headers: {
        'Authorization': "Bearer " + token,
      },
      url: endPoints.fetchSingleUserBuyTransactions,
      params: data
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

