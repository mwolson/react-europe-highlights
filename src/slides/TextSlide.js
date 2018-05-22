import React, { Component } from 'react'
import {
  Heading,
  Slide,
} from 'spectacle'

class TextSlide extends Component {
  render() {
    const { children } = this.props
    return (
      <Slide bgColor="secondary">
        {
          React.Children.map(children, child => {
            if (child.props.textColor) return child

            if (child.type === Heading) {
              return React.cloneElement(child, { caps: true, textColor: "tertiary" })
            }

            return React.cloneElement(child, { textColor: "primary" })
          })
        }
      </Slide>
    )
  }
}

export default TextSlide
