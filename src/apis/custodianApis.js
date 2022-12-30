import endPoints from "../utils/endPoints";
import sendApiReq from "../utils/sendApiReq";

export async function getInvestorLists(onSuccess) {
  try {
    const res = await sendApiReq({})
    console.log(res)
    onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function getUserDetails(mbeId, onSuccess) {
  try {
    const res = await sendApiReq({
      url: `${endPoints.userDetail}?mbeId=${mbeId}`,
    })

    console.log(res)
    // onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function getBondholding(mbeId, onSuccess) {
  try {
    const res = await sendApiReq({
      url: `${endPoints.bondholding}?mbeId=${mbeId}`,
    })

    console.log(res)
    // onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function getTokenHoldings(mbeId, onSuccess) {
  try {
    const res = await sendApiReq({
      url: `${endPoints.tokenholding}?mbeId=${mbeId}`,
    })

    console.log(res)
    // onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function getTransactions(mbeId, onSuccess) {
  try {
    const res = await sendApiReq({
      url: `${endPoints.transactions}?mbeId=${mbeId}`,
    })

    console.log(res)
    // onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function getPurchaseLog(purchaseLogId, onSuccess) {
  try {
    const url = purchaseLogId ? `${endPoints.purchaseLog}?purchaseLogId=${purchaseLogId}` : endPoints.purchaseLog
    const res = await sendApiReq({
      url,
    })

    console.log(res)
    // onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}

export async function getMarket(data, onSuccess) {
  try {
    const url = data ? `${endPoints.market}` : endPoints.market
    const res = await sendApiReq({
      url,
    })

    console.log(res)
    // onSuccess(res)

  } catch (error) {
    console.log(error)
  }
}
