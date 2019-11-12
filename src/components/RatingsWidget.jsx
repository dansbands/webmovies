import React from 'react'
import Ratings from "react-ratings-declarative";

const RatingsWidget = ({rating}) => {
  return (
    <Ratings
      rating={rating / 2}
      widgetRatedColors="white"
      widgetEmptyColors="grey"
      widgetSpacings="0px"
      >
      <Ratings.Widget widgetDimension="20px" />
      <Ratings.Widget widgetDimension="20px" />
      <Ratings.Widget widgetDimension="20px" />
      <Ratings.Widget widgetDimension="20px" />
      <Ratings.Widget widgetDimension="20px" />
    </Ratings>
  )
}

export default RatingsWidget;
