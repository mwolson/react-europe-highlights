import React, { Component } from 'react'
import * as Spectacle from 'spectacle'

const { Heading, Slide } = Spectacle
const SpectacleClasses = Object.values(Spectacle)

class TitleSlide extends Component {
  static bgColor = "tertiary"

  static applyTheme({ children }) {
    return React.Children.map(children, child => {
      if (!SpectacleClasses.some(inClass => child.type === inClass)) return child

      if (child.type === Heading) {
        return React.cloneElement(child, Object.assign({ textColor: "primary" }, child.props))
      }

      return React.cloneElement(child, Object.assign({ textColor: "secondary" }, child.props))
    })
  }

  render() {
    return (
      <Slide bgColor={TitleSlide.bgColor}>
        {TitleSlide.applyTheme(this.props)}
      </Slide>
    )
  }
}

export default TitleSlide
