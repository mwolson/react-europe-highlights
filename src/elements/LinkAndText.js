import React, { Component } from 'react'
import { Link, Text } from 'spectacle'

class LinkAndText extends Component {
  render() {
    const { href, text=href } = this.props
    return (
      <Link href={href}>
        <Text textColor={"tertiary"}>
          {text}
        </Text>
      </Link>
    )
  }
}

export default LinkAndText
