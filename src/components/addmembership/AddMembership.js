import React from 'react'

const AddMembership = () => {
  return (
    <div className='text-black'>
      <div className='flex flex-wrap gap-5 items-center justify-center'>
        {/* block for membeship details */}
          <div className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              <div>1 Month Membership</div>
              <div>Rs 1000</div>
          </div>
        {/* block for membeship details */}
          <div className='text-lg bg-slate-900 text-white border-2 pl-2 pr-2 flex-col gap-3 justify-between pt-1 pb-1 rounded-xl font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
              <div>2 Month Membership</div>
              <div>Rs 2000</div>
          </div>
      </div>
      <hr className='mt-10 mb-10' />
      <div className='flex gap-10 mb-10'>
          <input className='border-2 rounded-lg text-lg w-1/3 h-1/2 p-2' type='number' placeholder='Add No. of Months' />
          <input className='border-2 rounded-lg text-lg w-1/3 h-1/2 p-2' type='number' placeholder='Add Price' />
          <div className='text-lg border-2 p-1 w-auto mt-0 rounded-xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Add +</div>
      </div>

    </div>
  )
}

export default AddMembership