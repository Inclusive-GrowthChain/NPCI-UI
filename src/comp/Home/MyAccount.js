import { useState } from 'react';
import Nav from './Nav';

import live from "../../constants/live";
import Detokenzise from './Modals/Detokenzise';
import Sell from './Modals/Sell';

function Input({ lable = "", value = "" }) {
  return (
    <div className='df'>
      <p className="w-28 font-medium shrink-0">{lable}</p>
      <span className="font-medium">:</span>
      <p>{value}</p>
    </div>
  )
}

function MyAccount() {
  const [type, setType] = useState("")
  const [open, setOpen] = useState("")

  const updateOpen = (id, category) => {
    setOpen(id)
    setType(category)
  }

  const closeModal = () => {
    setOpen("")
    setType('')
  }

  return (
    <div className="h-screen bg-slate-900 text-white overflow-hidden">
      <Nav />

      <section className="dfc h-full border-r border-[rgba(255,255,255,.3)] overflow-y-hidden">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2 px-6 border-b border-[rgba(255,255,255,.3)]">
          <Input
            lable='First Name'
            value='Raj'
          />
          <Input
            lable='Last Name'
            value='Kumar'
          />
          <Input
            lable='PAN Number'
            value='12345'
          />
          <Input
            lable='Mobile'
            value='9876543210'
          />
          <Input
            lable='Email'
            value='raj@gmail.com'
          />
          <Input
            lable='Account ID'
            value='1234'
          />
        </div>

        <h1 className='py-2 text-2xl text-center border-b border-[rgba(255,255,255,.6)]'>Your token holdings with MBE</h1>

        <div className="scroll-y overflow-x-auto">
          <table className="w-full table-fixed">
            <thead>
              <tr className="sticky top-0 text-sm bg-slate-900 shadow-[0_1px_3px_0_rgba(255,255,255,.1)] z-1">
                <td className="w-36 px-4 py-2">Security Code</td>
                <td className="w-52 px-4 py-2">Issuer Name</td>
                <td className="w-32 px-4 py-2">Coupon Rate</td>
                <td className="w-28 px-4 py-2">Face Value</td>
                <td className="w-24 px-4 py-2">LTP</td>
                <td className="w-72 px-4 py-2">Credit Rating</td>
                <td className="w-32 px-4 py-2 text-center">Maturity Date</td>
                <td className="w-28 px-4 py-2 text-center">Bid Price</td>
                <td className="w-28 px-4 py-2 text-center">Ask Price</td>
                <td className="w-28 px-4 py-2 text-center">No. of Tokens</td>
                <td className="w-28 px-4 py-2 text-center">Volume in my account</td>
                <td className="w-32 px-4 py-2"></td>
              </tr>
            </thead>

            <tbody>
              {
                live
                  .filter((a, i) => [2, 3, 7, 8, 13, 17].includes(i))
                  .map(li => (
                    <tr
                      key={li.id}
                      className="hover:bg-[rgba(255,255,255,.1)] cursor-pointer group"
                      onClick={() => updateOpen(li.id, "Sell")}
                    >
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.securityCode} </td>
                      <td className="px-4 py-2 text-sm font-medium opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.issuerName} </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.couponRate} </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.faceValue} </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.ltp} </td>
                      <td className="px-4 py-2 text-xs opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100"> {li.creditRating} </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.maturityDate} </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                        <button className="w-20 px-3 py-1.5 rounded border border-emerald-600">
                          {li.bidPrice}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                        <button className="w-20 px-3 py-1.5 rounded border border-yellow-600">
                          {li.askPrice}
                        </button>
                      </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.volumn / li.faceValue} </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center"> {li.volumn} </td>
                      <td className="px-4 py-2 text-sm opacity-80 border-b border-[rgba(255,255,255,.3)] group-hover:opacity-100 text-center">
                        <button
                          className='px-3 py-1.5 rounded border border-red-500 hover:bg-red-500 hover:text-white'
                          onClick={e => {
                            e.stopPropagation()
                            updateOpen(li.id, "Detokenzise")
                          }}
                        >
                          Detokenize
                        </button>
                      </td>

                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>

        {
          type === 'Sell' &&
          <Sell
            isOpen
            data={live.find(li => li.id === open)}
            closeModal={closeModal}
          />
        }

        {
          type === 'Detokenzise' &&
          <Detokenzise
            isOpen
            data={live.find(li => li.id === open)}
            closeModal={closeModal}
          />
        }
      </section>
    </div>
  )
}

export default MyAccount