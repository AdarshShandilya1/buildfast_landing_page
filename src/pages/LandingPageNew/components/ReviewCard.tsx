import reviewImage from "../images/review image.svg"

export const ReviewCard = () => {
  return (
    <div className="border border-[#EAEAEA] p-10 rounded-[30px] text-left">
      <p className="Recoleta text-2xl md:text-3xl lg:text-4xl mx-auto">"Wow effect"</p>
      <p className="mt-10 text-[#404040]">
        We had the chance to work with Buildfast four times on various projects
        for the web or mobile applications.{" "}
      </p>
      <div className="flex gap-2 mt-10">
        <div className="rounded-full overflow-hidden w-fit h-fit">
          <img className="" src={reviewImage} alt="customer image" />
        </div>

        <div>
          <p className="font-semibold">Miguel Labranche</p>
          <p className="text-[#404040]">
            Product Manager <span className="text-[#fd5b1d]">@orange</span>{" "}
          </p>
        </div>
      </div>
    </div>
  )
}
