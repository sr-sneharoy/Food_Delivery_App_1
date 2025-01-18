import React from 'react'

const Card = () => {
  return (
    <div>
      <div className='w-60 m-3 border-black border-2 h-64 text-white'>
        <img className='w-full h-28' src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=" alt="" />
        <div className='p-3'>
          <h5 className=''>Card title</h5>
          <p>Some description</p>
          <div className='flex gap-4 items-center'>
            <select className='my-2 h-full text-black bg-emerald-500 cursor-pointer rounded' name="" id="">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                )
              })}
            </select>
            <select className='h-full text-black bg-emerald-500 cursor-pointer rounded' name="" id="">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className='inline-block'>
              Total Price : 
            </div>
          </div>
          <div>
            <button className='bg-emerald-500 text-black px-3 rounded'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card