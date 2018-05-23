import React, { Component } from 'react'
import {
  Heading,
  Slide,
} from 'spectacle'

class SectionSlide extends Component {
  render() {
    const { children } = this.props
    return (
      <Slide bgColor="quartenary">
        {
          React.Children.map(children, child => {
            if (child.props.textColor) return child

            if (child.type === Heading) {
              return React.cloneElement(child, { caps: true, textColor: "tertiary" })
            }

            return React.cloneElement(child, { textColor: "secondary" })
          })
        }
      </Slide>
    )
  }
}

export default SectionSlide
