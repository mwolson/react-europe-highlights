import React, { Component } from 'react'
import {
  Heading,
  Text,
} from 'spectacle';
import { ThemedDeck } from './deck'
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
      <ThemedDeck theme={theme}>
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
      </ThemedDeck>
    )
  }
}
