import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import { CSSProperties } from "react"
import { ReviewCard } from "./ReviewCard"
export default function MobileSlider() {
  const indicatorStyles: CSSProperties = {
    background: "#B1B1B1",
    width: 10,
    height: 10,
    borderRadius: 50,
    display: "inline-block",
    margin: "0px 10px ",
  }
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={1000}
      showArrows={false}
      showStatus={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: "#fd5b1d" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>
      <div className="mb-20">
        <ReviewCard />
      </div>

    </Carousel>
  )
}
