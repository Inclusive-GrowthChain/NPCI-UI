import Modal from '../../UIComp/Modal';

// If Detokenized “Detokenized , Visit transaction for more details”.
// If pending “Transaction pending, Visit transaction history for more details”.

function Detokenzise({ isOpen, data, closeModal }) {
  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      contentCls="dfc w-[350px]"
      title='Detokenize'
    >
      <h1 className='mb-4'>
        Detokenize {data.securityCode}, {data.issuerName} back to underlying bond
      </h1>

      <button className='mx-auto px-8 py-2 rounded-md bg-red-400 text-white hover:bg-red-600'>
        Authorise
      </button>
    </Modal>
  )
}

export default Detokenzise