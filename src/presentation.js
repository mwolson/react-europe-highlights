import React, { Component } from 'react'
import {
  Deck,
  Heading,
  Text,
} from 'spectacle';
import {
  SectionSlide,
  TextSlide,
  TitleSlide,
} from './slides'
import theme from './theme'

require('normalize.css')

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
      >
        <TitleSlide>
          <Heading size={3}>
            ReactEurope 2018
          </Heading>
          <Text>
            Takeaways
          </Text>
        </TitleSlide>

        <SectionSlide>
          <Heading size={4}>
            Tools!
          </Heading>
        </SectionSlide>

        <TextSlide>
          <Heading size={6}>
            Presentation software
          </Heading>
          <Text>
            Most presenters used Spectacle to create slides with JSX markup
          </Text>
        </TextSlide>
      </Deck>
    )
  }
}
