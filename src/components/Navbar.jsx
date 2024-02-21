import React, { useContext, useEffect, useState } from 'react'


const Navbar = () => {
  
 
  return (
    <>
    <div>
        <nav className="flex bg-[#5f6c76] p-1 pb-3 text-white justify-between">
            <div className="flex ml-[10%]  gap-3">
                <p className="text-blue-400 text-[30px]"></p>
                <h1 className="text-3xl mt-1 text-[#e6ebf0] font-Lobster">List Manager</h1>
            </div>

            <div className="flex gap-[30px] text-[15px] mr-[7%]">
                <p type="button" className="font-poppins mt-4">Profile</p>
                <p type="button" className="font-poppins mt-4">About</p>
                <p type="button" className="cursor-pointer font-poppins mt-4">Logout</p>
            </div>
        </nav>
    </div>
</>
  )
}

export default Navbar