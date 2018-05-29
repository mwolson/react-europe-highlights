import React, { Component } from 'react'
import * as Spectacle from 'spectacle'

const { Heading, Slide } = Spectacle
const SpectacleClasses = Object.values(Spectacle)

class TextSlide extends Component {
  static bgColor = "secondary"

  static applyTheme({ children }) {
    return React.Children.map(children, child => {
      if (!SpectacleClasses.some(inClass => child.type === inClass)) return child

      if (child.type === Heading) {
        return React.cloneElement(child, { caps: true, textColor: "tertiary", ...child.props, size: 6 })
      }

      return React.cloneElement(child, { textColor: "primary", ...child.props })
    })
  }

  render() {
    return (
      <Slide bgColor={TextSlide.bgColor}>
        {TextSlide.applyTheme(this.props)}
      </Slide>
    )
  }
}

export default TextSlide
