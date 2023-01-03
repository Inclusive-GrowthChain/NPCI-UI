import endPoints from "../utils/endPoints";
import sendApiReq from "../utils/sendApiReq";

export async function getInvestorLists(token, onSuccess) {
  try {
    const res = await sendApiReq({})
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
    const payload = await sendApiReq({
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
    const payload = await sendApiReq({
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

export async function getTransactions(onSuccess) {
  try {
    const payload = await sendApiReq({
      url: endPoints.transactions,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function getPurchaseLog(onSuccess) {
  try {
    const res = await sendApiReq({
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
      url: endPoints.fetchMarket,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchAllUserSellTransactions(onSuccess) {
  try {
    const payload = await sendApiReq({
      url: endPoints.fetchAllUserSellTransactions,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchAllUserBuyTransactions(onSuccess) {
  try {
    const payload = await sendApiReq({
      url: endPoints.fetchAllUserBuyTransactions,
    })
    console.log(payload)
    if (payload.status === 200)
      onSuccess(payload.message)
  } catch (error) {
    console.log(error)
  }
}

export async function fetchSingleUserSellTransactions(data, onSuccess) {
  try {
    const payload = await sendApiReq({
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

export async function fetchSingleUserBuyTransactions(data, onSuccess) {
  try {
    const payload = await sendApiReq({
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

