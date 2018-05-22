import React, { Component } from 'react'
import {
  Heading,
  Slide,
} from 'spectacle'

class TitleSlide extends Component {
  render() {
    const { children } = this.props
    return (
      <Slide bgColor="tertiary">
        {
          React.Children.map(children, child => {
            if (child.props.textColor) return child

            if (child.type === Heading) {
              return React.cloneElement(child, { textColor: "primary" })
            }

            return React.cloneElement(child, { textColor: "secondary" })
          })
        }
      </Slide>
    )
  }
}

export default TitleSlide
