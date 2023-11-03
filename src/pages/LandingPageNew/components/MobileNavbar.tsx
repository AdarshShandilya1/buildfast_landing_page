import logo from "../images/buildfast_logo.svg"
import hamburger from "../images/hamburger.svg"
import { useState } from "react"

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <div className="flex justify-between w-5/6 mx-auto">
        <img className="h-[28px]" src={logo} alt="buildfast logo" />
        <div onClick={()=>{
          setToggle((prev) => {
            return !prev
          })
        }}>
          <img src={hamburger} alt="hamburger icon" />
        </div>
      </div>
      <div className={toggle ?"absolute -top-full opacity-0" :"transition-all ease-in-out duration-200 transform absolute text-sm font-medium shadow-lg py-10 bg-white w-full flex flex-col gap-4 b-white rounded-b-2xl text-center mt-4"}>
        <div className="hover:text-[#fd5b1d] cursor-pointer ">
          <a href="#Benifits">Benifits</a>
        </div>
        <div className="hover:text-[#fd5b1d] cursor-pointer ">
          <a href="#Services">Services</a>
        </div>
        <div className="hover:text-[#fd5b1d] cursor-pointer ">
          <a href="#Work">Work</a>
        </div>
        <div className="hover:text-[#fd5b1d] cursor-pointer ">
          <a href="#how">How it works</a>
        </div>
        <div className="hover:text-[#fd5b1d] cursor-pointer ">
          <a href="#Pricing">Pricing</a>
        </div>
        <div className="hover:text-[#fd5b1d] cursor-pointer ">
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
