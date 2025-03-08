import React, { useState } from 'react'

// import icon
import { FaRandom } from 'react-icons/fa';
import { FaAngleLeft, FaRegHeart } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { IoEyeOutline } from 'react-icons/io5';
import { PiShoppingCartLight } from 'react-icons/pi';

export default function OutlookSection() {
  const [openActionIndex, setOpenActionIndex] = useState<number | null>(null);

  // Fungsi untuk toggle button action berdasarkan indeks
  const toggleAction = (index: number) => {
    setOpenActionIndex(openActionIndex === index ? null : index);
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-6 gap-6'>
      <div className='lg:col-span-2 flex flex-col gap-12'>
        <h1 className='text-black text-justify text-[40px] font-bold'>Complete Your <br /> Outlook </h1>

        <div className='flex flex-col gap-2'>
          <h3 className='text-black text-justify text-xl'>Lorem Ipsum passage, and going through the cites of the word in classical literature</h3>
          <p className='text-justify'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source</p>
        </div>

        <div className='flex justify-between md:justify-start items-center gap-6'>
          <h2 className='text-2xl font-semibold'>1 / 5</h2>
          <div className='flex text-3xl'>
            <FaAngleLeft className='text-slate-400 hover:text-black' />
            <FaAngleRight className='text-slate-400 hover:text-black' />
          </div>
        </div>
      </div>

      <div className='flex lg:col-start-4 lg:col-end-7 gap-6'>
        <div className="flex flex-col items-center md:items-end w-[100%] lg:w-[60%] gap-8 ">
          {/*  */}
          <div key={1} className='flex flex-col w-72 gap-4'>
            <div className='border h-[350px] rounded-2xl bg-slate-300'></div>
            <div className='flex justify-between'>
              <button className='flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2'>
                Clothes
              </button>

              <div className='relative flex flex-col items-center'>
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${openActionIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                    }`}
                >
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRandom />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRegHeart />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <IoEyeOutline />
                  </button>
                </div>

                {/* Main Button */}
                <button
                  onClick={() => toggleAction(1)}
                  className={`relative px-2 py-2 text-white bg-black rounded-bl-xl transition-all duration-300 ${openActionIndex === 1 ? '' : 'rounded-tl-xl'
                    }`}
                >
                  <PiShoppingCartLight className='font-bold' />
                </button>
              </div>

            </div>
            <div className='flex flex-col '>
              <h3 className='text-black text-lg font-semibold'>Denim Jacket</h3>
              <p className='text-slate-500'>Rp 1.000.000</p>
            </div>
          </div>

          {/*  */}
          <div key={2} className='flex flex-col w-60 gap-4'>
            <div className=' h-72 rounded-2xl bg-slate-300'></div>
            <div className='flex justify-between'>
              <button className='flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2'>
                Clothes
              </button>

              <div className='relative flex flex-col items-center'>
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${openActionIndex === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                    }`}
                >
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRandom />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRegHeart />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <IoEyeOutline />
                  </button>
                </div>

                {/* Main Button */}
                <button
                  onClick={() => toggleAction(2)}
                  className={`relative px-2 py-2 text-white bg-black rounded-bl-xl transition-all duration-300 ${openActionIndex === 2 ? '' : 'rounded-tl-xl'
                    }`}
                >
                  <PiShoppingCartLight className='font-bold' />
                </button>
              </div>

            </div>
            <div className='flex flex-col '>
              <h3 className='text-black text-lg font-semibold'>Denim Jacket</h3>
              <p className='text-slate-500'>Rp 1.000.000</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-[40%] gap-8">
          {/*  */}
          <div key={3} className='flex flex-col w-60 gap-4'>
            <div className='border h-72 rounded-2xl bg-slate-300'></div>
            <div className='flex justify-between'>
              <button className='flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2'>
                Clothes
              </button>

              <div className='relative flex flex-col items-center'>
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${openActionIndex === 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                    }`}
                >
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRandom />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRegHeart />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <IoEyeOutline />
                  </button>
                </div>

                {/* Main Button */}
                <button
                  onClick={() => toggleAction(3)}
                  className={`relative px-2 py-2 text-white bg-black rounded-bl-xl transition-all duration-300 ${openActionIndex === 3 ? '' : 'rounded-tl-xl'
                    }`}
                >
                  <PiShoppingCartLight className='font-bold' />
                </button>
              </div>

            </div>
            <div className='flex flex-col '>
              <h3 className='text-black text-lg font-semibold'>Denim Jacket</h3>
              <p className='text-slate-500'>Rp 1.000.000</p>
            </div>
          </div>

          {/*  */}
          <div key={4} className='flex flex-col w-60 gap-4'>
            <div className='border h-72 rounded-2xl bg-slate-300'></div>
            <div className='flex justify-between'>
              <button className='flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2'>
                Clothes
              </button>

              <div className='relative flex flex-col items-center'>
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${openActionIndex === 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                    }`}
                >
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRandom />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <FaRegHeart />
                  </button>
                  <button className='px-2 py-2 text-black hover:bg-gray-300'>
                    <IoEyeOutline />
                  </button>
                </div>

                {/* Main Button */}
                <button
                  onClick={() => toggleAction(4)}
                  className={`relative px-2 py-2 text-white bg-black rounded-bl-xl transition-all duration-300 ${openActionIndex === 4 ? '' : 'rounded-tl-xl'
                    }`}
                >
                  <PiShoppingCartLight className='font-bold' />
                </button>
              </div>

            </div>
            <div className='flex flex-col '>
              <h3 className='text-black text-lg font-semibold'>Denim Jacket</h3>
              <p className='text-slate-500'>Rp 1.000.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
