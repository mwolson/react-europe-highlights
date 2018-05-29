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
          <Heading>ReactEurope 2018</Heading>
          <Text>Takeaways</Text>
        </TitleSlide>

        <SectionSlide>
          <Heading>React News</Heading>
        </SectionSlide>

        <TextSlide>
          <Heading>Suspense</Heading>
          <Text>
            Suspense allows you to suspend rendering while loading async data
          </Text>
          <Text>
            To take advantage of it, throw a Promise from render()
          </Text>
        </TextSlide>

        <SectionSlide>
          <Heading>Tools!</Heading>
        </SectionSlide>

        <TextSlide>
          <Heading>Presentation software</Heading>
          <Text>
            Most presenters used Spectacle to create slides with JSX markup
          </Text>
        </TextSlide>
      </ThemedDeck>
    )
  }
}
