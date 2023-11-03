import smallArrow from "../images/smallwhitearrow.svg"
import instagram from "../images/Instagram.svg"
import dribble from "../images/Dribbble.svg"
import twitter from "../images/Twitter.svg"
const Footer = () => {
  return (
    <div className="text-white w-5/6 lg:w-9/12 mx-auto py-36">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="Recoleta text-5xl md:text-5xl lg:text-7xl">
              Let's Talk
            </div>
            <p className="text-lg sm:text-base mt-2 text-gray-200 cursor-pointer">
              uday@buildfast.co.in
            </p>
          </div>

          <p className="hidden sm:block text-sm sm:text-base text-gray-200">
            @ 2023. Buildfast Innovations{" "}
          </p>
        </div>

        <div>
          <div className=" flex flex-col sm:grid sm:grid-cols-3  gap-4">
            <div className="w-fit mt-12 sm:mt-0 sm:ml-auto">
              <h1 className="Recoleta text-xl sm:text-xl lg:text-2xl w-fit">
                Services
              </h1>
              <p className="text-sm sm:text-base text-gray-200 mt-4 cursor-pointer hover:text-[#fd5b1d]">
                Work
              </p>
              <p className="text-sm sm:text-base text-gray-200 mt-2 cursor-pointer hover:text-[#fd5b1d]">
                Portfolio
              </p>
              <p className="text-sm sm:text-base text-gray-200 mt-2 cursor-pointer hover:text-[#fd5b1d]">
                Services
              </p>
              <p className="text-sm sm:text-base text-gray-200 mt-2 cursor-pointer hover:text-[#fd5b1d]">
                Clients
              </p>
              <div>
              </div>
            </div>
            

            <div className="col-span-2">
              <h1 className="Recoleta text-xl sm:text-xl lg:text-2xl mt-12 sm:mt-0 sm:ml-auto w-fit">
                Work Together
              </h1>
              <div className="flex gap-2 orange w-fit py-2 px-3 sm:py-2 sm:px-6 rounded-lg mt-4 font-semibold sm:ml-auto cursor-pointer hover:shadow-lg hover:bg-orange-500">
                <img className="" src={smallArrow} alt="small arrow svg" />
                <p className="text-base md:text-sm lg:text-base">Start Today</p>
              </div>

              <div className="flex gap-4 sm:justify-end mt-10 sm:mt-28">
                <img
                  className="w-[20px] sm:w-[30px] cursor-pointer"
                  src={instagram}
                  alt=""
                />
                <img
                  className="w-[20px] sm:w-[30px] cursor-pointer"
                  src={dribble}
                  alt=""
                />
                <img
                  className="w-[20px] sm:w-[30px] cursor-pointer"
                  src={twitter}
                  alt=""
                />
              </div>

              <p className="sm:hidden mt-12 text-sm sm:text-base text-gray-200">
                @ 2023. Buildfast Innovations{" "}
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
