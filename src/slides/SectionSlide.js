import React, { Component } from 'react'
import * as Spectacle from 'spectacle'

const { Heading, Slide } = Spectacle
const SpectacleClasses = Object.values(Spectacle)

class SectionSlide extends Component {
  static bgColor = "quartenary"

  static applyTheme({ children }) {
    return React.Children.map(children, child => {
      if (!SpectacleClasses.some(inClass => child.type === inClass)) return child

      if (child.type === Heading) {
        return React.cloneElement(child, { caps: true, textColor: "tertiary", ...child.props, size: 4 })
      }

      return React.cloneElement(child, { textColor: "secondary", ...child.props })
    })
  }

  render() {
    return (
      <Slide bgColor={SectionSlide.bgColor}>
        {SectionSlide.applyTheme(this.props)}
      </Slide>
    )
  }
}

export default SectionSlide
