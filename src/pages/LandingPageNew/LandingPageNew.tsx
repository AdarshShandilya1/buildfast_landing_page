import logo from "./images/buildfast_logo.svg"
import line from "./images/Line.svg"
import hand from "./images/hand_icon.svg"
import arrow from "./images/arrow.svg"
import voxup from "./images/Voxup.svg"
import aquabeats from "./images/aquabeats.svg"
import edubrite from "./images/Edubrite.svg"
import school from "./images/green_world_public_school.svg"
import internbucks from "./images/Internbucks.svg"
import nine_eight from "./images/nine_eight.svg"
import repeat from "./images/Repeat.svg"
import smallarrow from "./images/smallarrow.svg"
import tick from "./images/tick.svg"
import smallwhitearrow from "./images/smallwhitearrow.svg"
import call from "./images/call.svg"
import star from "./images/star.svg"

import delivery_time from "./animations/delivery_icon.json"
import golden_card from "./animations/Golden Card.json"
import infinite_loop from "./animations/Infinity Loop.gif"
import fingerprint from "./animations/Finger print Lock - success.json"
import paint from "./animations/paint_SVG.json"
import successfully_done from "./animations/Successfully Done.json"
// import request from "./animations/request.json"
import subscribe from "./animations/subscribe.json"
import telegram from "./animations/telegram.json"

import { Player, Controls } from "@lottiefiles/react-lottie-player"
import Marquee from "react-fast-marquee"
import Navbar from "./components/Navbar"

import Accordion from "./components/Accordion"
import Slider from "./components/Slider"
// import { ReviewCard } from "./components/ReviewCard"
import Footer from "./components/Footer"
import MobileNavbar from "./components/MobileNavbar"
import MobileSlider from "./components/MobileSlider"

export default function LandingPageNew() {
  return (
    <div id="Buildfast" className="relative overflow-x-hidden">
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="sm:hidden fixed w-full bg-white py-4 !z-50">
        <MobileNavbar />
      </div>
      <div className="sm:hidden hover:shadow-lg orange w-fit p-2 rounded-full fixed top-[90%] left-[85%] !z-50">
        <img className="w-[30px] ml-auto" src={hand} alt="hand icon" />
      </div>

      <div className="flex flex-col justify-between sm:h-[calc(100vh-130px)]">
        <div className="hidden sm:block mx-auto w-28 md:w-40 lg:w-fit mt-14">
          <img src={logo} alt="website logo" />
        </div>
        <div className="flex flex-col gap-4 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <div className="mx-auto w-fit mt-24 sm:mt-20">
            <p className="Recoleta text-3xl md:text-5xl lg:text-7xl xl:text-[95px]">
              A{" "}
              <span className="bg-black text-white rounded-xl p-2">
                Creative
              </span>{" "}
              Design Agency
            </p>
          </div>

          <div className="flex items-center gap-4 mx-auto w-fit">
            <p className="Recoleta text-3xl md:text-5xl lg:text-7xl xl:text-[95px]">
              For All Your Needs
            </p>
            <img
              className="h-[20px] md:h-[30px] lg:h-[47px]"
              src={line}
              alt="line svg"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-5/6 sm:w-7/12 mx-auto sm:ml-auto sm:mr-0 mt-16 gap-2">
          <div className="w-full sm:w-5/12">
            <p className="text-center sm:text-left text-[#404040] lg:text-lg text-base">
              A agency which offers a diverse range of design services,
              including web design, social media design, and much more, all
              available within a single subscription.
            </p>
          </div>

          <div className="hidden sm:block cursor-pointer sm:flex items-center gap-4 mx-auto sm:m-0  w-fit p-2 rounded-full orange hover:bg-orange-500 hover:shadow-lg h-fit mt-4 sm:mt-0">
            <p className="text-white pl-6 hidden sm:block">Lets Talk</p>
            <img className="h-[30px] lg:h-fit" src={hand} alt="hand icon" />
          </div>
        </div>
      </div>

      <div className="flex mt-16 sm:mt-20 gap-2 w-fit sm:w-7/12 mx-auto sm:ml-auto sm:mr-0">
        <p className=" text-xs text-[#404040] md:text-sm">
          Companies we have worked with
        </p>
        <img className="mt-auto mb-[2px]" src={arrow} alt="arrow svg" />
      </div>

      <div className="hidden sm:block">
        <div className="flex w-5/6 mx-auto mt-12 justify-between">
          <img
            className="md:h-[20px] h-[15px] lg:h-fit m-auto"
            src={voxup}
            alt="voxup logo"
          />
          <img
            className="md:h-[20px] h-[15px] lg:h-fit m-auto"
            src={internbucks}
            alt="internbucks logo"
          />
          <img
            className="md:h-[20px] h-[15px] lg:h-fit m-auto"
            src={edubrite}
            alt="edubrite logo"
          />
          <img
            className="md:h-[20px] h-[15px] lg:h-fit m-auto"
            src={nine_eight}
            alt="nine_eight logo"
          />
          <img
            className="md:h-[20px] h-[15px] lg:h-fit m-auto"
            src={aquabeats}
            alt="aquabeats logo"
          />
        </div>

        <div className="grid grid-cols-2 w-5/6 mx-auto mt-8 gap-28">
          <img
            className="md:h-[20px] h-[15px] lg:h-fit ml-auto my-auto"
            src={aquabeats}
            alt="aquabeats logo"
          />
          <img
            className="md:h-[20px] h-[15px] lg:h-fit mr-auto my-auto"
            src={school}
            alt="img"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10 w-5/6 mx-auto sm:hidden">
        <img
          className="md:h-[20px] h-[15px] lg:h-fit m-auto"
          src={voxup}
          alt="voxup logo"
        />
        <img
          className="md:h-[20px] h-[15px] lg:h-fit m-auto"
          src={internbucks}
          alt="internbucks logo"
        />
        <img
          className="md:h-[20px] h-[15px] lg:h-fit m-auto"
          src={edubrite}
          alt="edubrite logo"
        />
        <img
          className="md:h-[20px] h-[15px] lg:h-fit m-auto"
          src={nine_eight}
          alt="nine_eight logo"
        />
        <img
          className="md:h-[20px] h-[15px] lg:h-fit m-auto"
          src={aquabeats}
          alt="aquabeats logo"
        />
        <img
          className="md:h-[20px] h-[15px] lg:h-fit m-auto"
          src={school}
          alt="aquabeats logo"
        />
      </div>

      <div className="relative my-28 sm:my-36">
        <div className="absolute Gray h-12 md:h-20 lg:h-24 rotate-6 w-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="Recoleta flex items-center absolute -rotate-6  h-12 md:h-20 lg:h-24 orange  w-[120%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Marquee className="my-auto" autoFill={true}>
            <div className="flex gap-10 font-semibold text-lg md:text-2xl lg:text-3xl text-white">
              <p> GUIDELINE</p>
              <img className="h-[25px] md:h-fit" src={star} alt="start svg" />
              <p>ILLUSTRATIONS</p>
              <img className="h-[25px] md:h-fit" src={star} alt="start svg" />
              <p>ICONS</p>
              <img className="h-[25px] md:h-fit" src={star} alt="start svg" />
              <p>UI/UX DESIGN</p>
              <img className="h-[25px] md:h-fit" src={star} alt="start svg" />
              <p>WEB DESIGN</p>
              <img className="h-[25px] md:h-fit" src={star} alt="start svg" />
              <p>MOBILE APP</p>
              <img className="h-[25px] md:h-fit" src={star} alt="start svg" />
              <p></p>
            </div>
          </Marquee>
        </div>
      </div>

      <div id="Benifits" className="w-fit mx-auto pt-[150px] md:pt-[200px] ">
        <p className="Recoleta text-3xl md:text-5xl lg:text-7xl ">
          Membership Benifits
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 w-5/6 lg:w-9/12  mx-auto mt-16 ">
        <div className=" h-full bg-black flex flex-col justify-between rounded-[60px]">
          <div className="">
            <img
              className="w-[200px] mx-auto"
              src={infinite_loop}
              alt="infinite loop"
            />
          </div>

          <div className="text-white text-center flex flex-col justify-between my-16">
            <p className="Recoleta text-2xl ">Unlimited Revisions</p>
            <p className="w-3/6  mx-auto mt-6">
              “Not Satisfied with the design?” Get Revisions until you are
              satisfied
            </p>
          </div>
        </div>

        <div className=" h-full flex flex-col justify-between rounded-[60px]">
          <div className="">
            <Player
              autoplay
              loop
              src={golden_card}
              style={{ height: "200px", width: "200px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>

          <div className="text-center flex flex-col justify-between text-black my-16">
            <p className="Recoleta text-2xl ">Fixed Monthly Rate</p>
            <p className="w-3/6  mx-auto mt-6">
              No surprises here! Pay the same fixed price each month.
            </p>
          </div>
        </div>

        <div className="bg-black text-white h-full flex flex-col justify-between rounded-[60px]">
          <div className="">
            <Player
              autoplay
              loop
              src={delivery_time}
              style={{ height: "200px", width: "200px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>

          <div className="text-center flex flex-col justify-between my-16">
            <p className="Recoleta text-2xl ">Blazingly swift delivery</p>
            <p className="w-4/6  mx-auto mt-6">
              Receive your design within 24-48 hours of requesting it, one at a
              time.
            </p>
          </div>
        </div>

        
      </div>

      <div className="grid lg:gird-cols-1 xl:grid-cols-2 w-5/6 lg:w-9/12 mx-auto mt-6 gap-6">
        <div className=" bg-black md:h-[400px] flex flex-col md:flex-row-reverse gap-4 justify-between rounded-[60px] p-10 md:px-20 ">
          <div className=" m-auto">
            <Player
              autoplay
              loop
              src={paint}
              style={{ height: "150px", width: "150px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>

          <div className="text-center md:text-left  text-white flex flex-col mt-10 md:mt-auto">
            <p className="Recoleta text-2xl ">High Quality Design</p>
            <p className="w-4/6 mx-auto mt-6 md:w-full">
              Superb design excellence available at your convenience, precisely
              when you require it.
            </p>
          </div>
        </div>
        <div className=" bg-black md:h-[400px] h-full flex flex-col md:flex-row gap-4 p-10 md:px-20  justify-between rounded-[60px]">
          <div className="h-[210px] md:h-fit m-auto">
            <Player
              autoplay
              loop
              src={fingerprint}
              style={{ height: "200px", width: "200px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>

          <div className="text-center md:text-right flex flex-col  text-white mt-auto">
            <p className="Recoleta text-2xl ">Exclusive And</p>
            <p className="Recoleta text-2xl"> Entirely Yours</p>
            <p className="w-4/6 mx-auto md:ml-auto md:w-full mt-6">
              Every design we create for you and belongs entirely to you.
            </p>
          </div>
        </div>
      </div>

      <div
        id="Services"
        className="bg-black h-fit mt-36 rounded-[80px] md:rounded-[150px] py-[150px]"
      >
        <div className="text-white text-3xl md:text-5xl lg:text-7xl  Recoleta mx-auto w-fit">
          Our Services
        </div>

        <div className="w-5/6 lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:text-xl  mt-20">
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
          <div className="text-white border-b-2 py-6">Logos</div>
        </div>
      </div>

      <div id="Work">
        <div className="text-3xl md:text-5xl lg:text-7xl  Recoleta mx-auto w-fit mt-32">
          Our Work
        </div>

        <div className="w-10/12 sm:w-4/6 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto mt-20 gap-6">
            <div className="h-fit mx-auto">
              <div className="max-w-[430px] h-fit">
                <img
                  src="https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="random image"
                />
              </div>
              <p className="Recoleta m t-4 text-lg mt-4">
                Voxup <span className="font-sans text-sm">. 2023</span>
              </p>
              <p className="mt-4">A design system for the company</p>
              <p className="mt-4 text-gray-500">UI * UX * Web Design</p>
            </div>

            <div className="h-fit mt-6 sm:mt-20 ml-auto">
              <div className="max-w-[430px] h-fit">
                <img
                  src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="random image"
                />
              </div>
              <p className="Recoleta mt-4 text-lg">
                Interbucks <span className="font-sans text-sm">. 2023</span>
              </p>
              <p className="mt-4">A design system for the company</p>
              <p className="mt-4 text-gray-500">UI * UX * Web Design</p>
            </div>
          </div>

          <div className=" ml-auto lg:w-fit">
            <div className="max-w-[938px] h-fit bg-gray-400 mt-10 sm:mt-20">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1784&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="random image"
              />
            </div>
            <p className="Recoleta mt-4 text-lg">
              Kuvam Jewellers <span className="font-sans text-sm">. 2023</span>
            </p>
            <p className="mt-4">A design system for the company</p>
            <p className="mt-4 text-gray-500">UI * UX * Web Design</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mx-auto mt-20">
            <div className="h-fit mx-auto">
              <div className="max-w-[430px] h-fit">
                <img
                  src="https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="random image"
                />
              </div>
              <p className="Recoleta m t-4 text-lg mt-4">
                Home Hub <span className="font-sans text-sm">. 2023</span>
              </p>
              <p className="mt-4">A design system for the company</p>
              <p className="mt-4 text-gray-500">UI * UX * Web Design</p>
            </div>

            <div className="h-fit mt-6 sm:mt-20 ml-auto">
              <div className="max-w-[430px] h-fit">
                <img
                  src="https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="random image"
                />
              </div>
              <p className="Recoleta mt-4 text-lg">
                Digital Wealth <span className="font-sans text-sm">. 2023</span>
              </p>
              <p className="mt-4">A design system for the company</p>
              <p className="mt-4 text-gray-500">UI * UX * Web Design</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div
          id="how"
          className="Gray rounded-t-[80px] md:rounded-t-[150px] h-fit w-full mt-20 py-24 "
        >
          <p className="text-3xl md:text-5xl lg:text-7xl Recoleta mx-auto w-fit">
            How It Works?
          </p>
          <div className="grid xl:grid-cols-3 gap-6 w-5/6 lg:w-9/12 mt-20 mx-auto text-center">
            <div className="h-full bg-white rounded-[50px] p-10">
              <div className="">
                <Player
                  autoplay
                  loop
                  src={subscribe}
                  style={{ height: "300px", width: "250px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </div>

              <p className="Recoleta text-2xl mx-auto w-fit">Subscribe</p>
              <p className="text-gray-500 mx-auto w-4/6 mt-6 text-lg">
                Subscribe to our one of our Plans.
              </p>
            </div>

            <div className="h-full bg-white rounded-[50px] p-10 ">
              <div className="mt-16">
                <Player
                  autoplay
                  loop
                  src={telegram}
                  style={{ height: "200px", width: "200px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </div>
              <p className="Recoleta text-2xl mx-auto w-fit mt-8">Request</p>
              <p className="text-gray-500 mx-auto  mt-6 text-lg w-4/6">
                Gain Trello board access to order your items.
              </p>
            </div>

            <div className="h-full bg-white rounded-[50px] p-10">
              <div className="mt-16">
                <Player
                  autoplay
                  loop
                  src={successfully_done}
                  style={{ height: "200px", width: "200px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </div>
              <p className="Recoleta text-2xl mx-auto w-fit mt-8">Recieve</p>
              <p className="text-gray-500 mx-auto w-4/6 mt-6 text-lg">
                Get your delivery within 24-48 hours.
              </p>
            </div>
          </div>

          <div className="cursor-pointer hover:bg-orange-500 hover:shadow-lg flex justify-center items-center gap-3 mt-16 orange p-4 w-10/12 md:w-[400px] text-center rounded-xl text-white mx-auto">
            <img className="mt-1" src={repeat} alt="" />
            <p className="">Repeat</p>
          </div>
        </div>

        <div
          id="Pricing"
          className="bg-black h-fit rounded-b-[80px] md:rounded-b-[150px] rounded-t-[20px] py-24"
        >
          <p className="text-white text-3xl md:text-5xl lg:text-7xl Recoleta mx-auto w-fit">
            Membership Plans
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-5/6 lg:w-9/12 gap-4 mt-20 mx-auto">
            <div className="bg-white h-fit rounded-[36px] lg:rounded-t-[36px] lg:rounded-none p-8 py-16">
              <div className="h-[140px]">
                <p className="Recoleta text-2xl">Monthly</p>
                <p className="mt-2 text-gray-500">
                  Gives you the most freedom. Perfect if you want to try the
                  membership out.
                </p>
              </div>

              <p className="Recoleta text-4xl">
                $999 <span className=" text-base">/mo.</span>
              </p>
              <p className="text-gray-500">pause or cancel anytime</p>
              <div className="cursor-pointer hover:shadow-xl gap-3 flex mt-7 py-3 rounded-xl border border-[#fd5b1d] justify-center items-center">
                <img className="mt-1" src={smallarrow} alt="small arrow svg" />
                <p className=" text-[#fd5b1d] font-semibold">Start Today</p>
              </div>

              <div className="mt-10">
                <p className="font-semibold text-lg">What's Included</p>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-none">
                  <div className="flex gap-2  mt-4 text-[#404040] ">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited requests</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited brands</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited revisions</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Shared Trello Board</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Shared Stack channel</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Pause or cancel anytime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white h-full rounded-[36px] lg:rounded-t-[36px] lg:rounded-b-none p-8 py-16">
              <div className="h-[140px]">
                <p className="Recoleta text-2xl">Quaterly</p>
                <p className="mt-2 text-gray-500">
                  For companies of all sizes, who know what they need.
                </p>
              </div>

              <p className="Recoleta text-4xl">
                $899 <span className=" text-base">/mo.</span>
              </p>
              <p className="text-gray-500">paid quarterly</p>
              <div className="cursor-pointer hover:shadow-xl hover:bg-orange-500 gap-3 orange flex mt-7 py-3 rounded-xl border justify-center items-center">
                <img
                  className="mt-1 "
                  src={smallwhitearrow}
                  alt="small arrow svg"
                />
                <p className="text-white font-semibold">Start Today</p>
              </div>

              <div className="mt-10">
                <p className="font-semibold text-lg">What's Included</p>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-none">
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited requests</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited brands</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited revisions</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Shared Trello Board</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Shared Stack channel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white h-full rounded-t-[36px] p-8 py-16">
              <div className="h-[140px]">
                <p className="Recoleta text-2xl">Yearly</p>
                <p className="mt-2 text-gray-500">
                  The most cost-effective option. For a long-term relationship
                  with us 🧡
                </p>
              </div>

              <p className="Recoleta text-4xl">
                $849 <span className=" text-base">/mo.</span>
              </p>
              <p className="text-gray-500">paid annually</p>
              <div className="cursor-pointer hover:shadow-xl gap-3 flex mt-7 py-3 rounded-xl border border-[#fd5b1d] justify-center items-center">
                <img className="mt-1" src={smallarrow} alt="small arrow svg" />
                <p className="text-[#fd5b1d] font-semibold ">CallBuildfast</p>
              </div>

              <div className="mt-10">
                <p className="font-semibold text-lg">What's Included</p>
                <div className="md:grid md:grid-cols-2 lg:grid-cols-none">
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited requests</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited brands</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Unlimited revisions</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Shared Trello Board</p>
                  </div>
                  <div className="flex gap-2  mt-4 text-[#404040]">
                    <img src={tick} alt="tick svg" />
                    <p>Shared Stack channel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 grid grid-row-2 gap-6 lg:grid-cols-2 bg-white h-fit w-5/6 lg:w-9/12 mx-auto rounded-b-[36px] mt-4">
            <div className="">
              <p className="Recoleta text-2xl">
                Didn’t find the package suitable for you?
              </p>
              <p className="text-gray-500 mt-2">
                Don’t worry, we got you covered. We also offer custom pricing.
              </p>
              <p className="text-gray-500 mt-1">Specific to your needs.</p>
            </div>

            <div>
              <div className=" cursor-pointer flex gap-2 hover:bg-gray-800 hover:shadow-lg bg-black rounded-lg  justify-center items-center text-white p-3 lg:w-fit px-6 ml-auto my-auto">
                <img src={call} alt="" />
                <p>Call Buildfast</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-32">
        <p className="text-3xl md:text-5xl lg:text-7xl Recoleta mx-auto w-fit">
          What Our Customers
        </p>
        <p className="text-3xl md:text-5xl lg:text-7xl Recoleta mx-auto w-fit mt-4">
          Say About Us?
        </p>

        <div className="w-5/6 lg:w-9/12 mx-auto mt-20 hidden lg:block">
          <Slider />
        </div>

        <div className="w-5/6 mx-auto mt-10 lg:hidden">
          <MobileSlider />
        </div>
      </div>

      <div id="faq" className="bg-black">
        <div className="Gray  py-24 rounded-b-[80px] md:p-20 md:rounded-b-[150px]">
          <p className="text-3xl md:text-5xl lg:text-7xl Recoleta mx-auto w-fit ">
            FAQ
          </p>

          <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto md:mt-20">
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
