import React, { Component } from 'react'
import * as Spectacle from 'spectacle'
import UpstreamCodeSlide from 'spectacle-code-slide';

const { Heading } = Spectacle
const SpectacleClasses = Object.values(Spectacle)

class CodeSlide extends Component {
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
    const { code, lang="js", ranges } = this.props

    return (
      <UpstreamCodeSlide bgColor={CodeSlide.bgColor} {...{ code, lang, ranges }}>
        {CodeSlide.applyTheme(this.props)}
      </UpstreamCodeSlide>
    )
  }
}

export default CodeSlide
