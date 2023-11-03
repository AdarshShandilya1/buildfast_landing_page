import NavbarCall from "../images/Navbar Call.svg"
import link from "../images/Link.svg"
export default function Navbar() {
  return (
    <div className="flex bg-white  text-base text-[#7B7B7B] left-1/2 top-[85%] -translate-x-1/2 z-50 gap-4 w-[660px] items-center justify-between  px-4 pl-10 py-4 rounded-xl right-auto shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] opacity-100 fixed ">
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
      <div className="flex gap-2">
        <img className="cursor-pointer" src={NavbarCall} alt="Call svg" />
        <a href="#Buildfast">
          <img className="cursor-pointer" src={link} alt="" />
        </a>
      </div>
    </div>
  )
}
