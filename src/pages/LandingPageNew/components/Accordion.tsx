import { useCollapse } from "react-collapsed"
import plus from "../images/plus.svg"
// import cross from "../images/cross.svg"
export default function Accordion() {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="mb-2">
      <button className="w-full" {...getToggleProps()}>
        {isExpanded ?<div className=" text-sm md:text-base  left px-6 md:px-8 py-4 md:py-6 bg-white mt-4 mx-auto rounded-t-xl md:rounded-t-[20px]">
            <div className="flex justify-between items-center">
              <p className="font-semibold">How many requests do I get?</p>
              <img className="my-auto w-[30px]  -rotate-45" src={plus} alt="cross svg" />
            </div>
          </div>  : <div><div className="text-sm md:text-base px-6 md:px-8 py-4 md:py-6 bg-white mt-4 mx-auto rounded-xl md:rounded-[20px]">
            <div className="flex justify-between items-center">
              <p className="font-semibold">How many requests do I get?</p>
              <img className="my-auto w-[30px]"  src={plus} alt="cross svg" />
            </div>
          </div> </div>}
          {/* <div className=" telxt left px-8 py-6 bg-white mt-4 mx-auto rounded-t-[20px]">
            <div className="flex justify-between items-center">
              <p className="font-semibold">How many requests do I get?</p>
              <img className={isExpanded ? "my-auto w-[30px] transition-all rotate-45" : "my-auto w-[30px] transition-all"} src={plus} alt="cross svg" />
            </div>
          </div> */}
      </button>
      <section {...getCollapseProps()}><div className="w-full bg-white text-sm md:text-base text-[#404040] px-6 md:px-8 pb-6 rounded-b-xl md:rounded-b-[20px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, rem aining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div></section>
    </div>
  )
}