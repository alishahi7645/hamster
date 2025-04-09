import { GoPersonFill } from "react-icons/go";
import { IoRocket } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";



function Profilebar() {
  return (
    <div className='w-full flex flex-col gap-3'>
      <div className="w-full flex items-center justify-center gap-3">
        <div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center gap-3 px-3 cursor-pointer ">
          <GoPersonFill className={'!fill-[#fdb224] text-sm'}/>
          <span className='font-semibold pr-4 text-xs'>AliShahi</span>
        </div>
        <div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center justify-center gap-3 px-3 cursor-pointer">
          <IoRocket className={'!fill-[#fdb224] text-sm'}/>
          <span className='font-semibold pr-4 text-xs'>Boost</span>
        </div>
        <div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center justify-center gap-3 px-3 cursor-pointer">
          <IoRocket className={'!fill-[#fdb224] text-sm'}/>
          <span className='font-semibold pr-4 text-xs'>wallet</span>
        </div>
      </div>
      <div className="w-full rounded-xl bg-[#012237] h-[60px] flex items-center justify-center gap-3 cursor-pointer">
        <FaYoutube className={'!fill-[#ff0000] text-xl'} width='32px' height='32px'/>
        <span className='font-semibold pr-4 text-sm'>Learn How to play</span>
      </div>
    </div>
  )
}

export default Profilebar
