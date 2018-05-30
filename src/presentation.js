import React, { Component } from 'react'
import {
  Heading,
  Text,
} from 'spectacle';
import { ThemedDeck } from './deck'
import { LinkAndText } from './elements'
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
          <Text>
            Full support requires some lifecycle method changes
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>These automatically pause rendering with suspense:</Heading>
          <Text>
            React.Timeout
          </Text>
          <Text>
            simple-cache-provider.CacheProvider
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Deprecated lifecycle methods</Heading>
          <Text>
            componentWillMount, componentWillReceiveProps, componentWillUpdate
          </Text>
          <Heading>New lifecycle methods</Heading>
          <Text>
            getDerivedStateFromProps, getSnapshotBeforeUpdate
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Context is now OK</Heading>
          <Text>
            It's possible to use the Context API to replace many Redux features, might see that start to happen more often
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Time slicing</Heading>
          <Text>
            Lower-priority updates (data loading) can yield priority to higher-priority (user input)
          </Text>
        </TextSlide>

        <SectionSlide>
          <Heading>Best Practices</Heading>
        </SectionSlide>
        <TextSlide>
          <Heading>Spinners</Heading>
          <Text>
            Only show these if loading takes > 400ms
          </Text>
          <Text>
            New Timeout component from the React Suspense work is helpful for this
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Loading Images</Heading>
          <Text>
            If loading an image makes the layout change, delay the top-level component until all images in its subcomponents are done
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Loading Images</Heading>
          <Text>
            Easy to achieve with the new Suspense API
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Render Props</Heading>
          <Text>
            Using higher-order components is less popular now
          </Text>
          <Text>
            Better is to pass a render function as a property (or as props.children)
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Making Popular Open Source Software</Heading>
          <Text>
            README: Add a simple picture logo and some badges
          </Text>
          <Text>
            Find an appropriate subreddit to post on
          </Text>
          <Text>
            Tweet at some authors of related projects that your code works with
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>CSS in JS</Heading>
          <Text>
            Still a debate vs. standalone SCSS
          </Text>
          <Text>
            Lots of different projects in use
          </Text>
        </TextSlide>

        <SectionSlide>
          <Heading>Tools</Heading>
        </SectionSlide>
        <TextSlide>
          <Heading>create-react-app</Heading>
          <Text>
            This seems to be taking off in a big way
          </Text>
          <Text>
            Version 2.0 (currently in RC) will catch up with the last few years of innovation
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>CodeSandbox</Heading>
          <Text>
            CodeSandbox is a code playground, a lot like CodePen and jsfiddle
          </Text>
          <Text>
            Created by a Dutch college student last year
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>CodeSandbox</Heading>
          <Text>
            It's able to quickly start a new project using create-react-app
          </Text>
          <Text>
            Can read/write entire project trees from Github, making it like an online code editor
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>CodeSandbox</Heading>
          <Text>
            Real-time multi-person edits much like Google Docs
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Presentation software</Heading>
          <Text>
            Most presenters used Spectacle to create slides with JSX markup (including this presentation, too)
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>StoryBook</Heading>
          <Text>
            StoryBook can be useful for creating a style guide that's shared by Design and Engineering
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>StoryBook</Heading>
          <Text>
            Render the component with props alongside some documentation for it
          </Text>
          <Text>
            Add that configuration as a single story
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>Reg-Suit</Heading>
          <Text>
            Visual regression testing tool
          </Text>
          <Text>
            Take automated snapshots of a website
          </Text>
          <Text>
            Visual diffs are called out
          </Text>
          <LinkAndText href={'https://github.com/reg-viz/reg-suit'} />
        </TextSlide>
        <TextSlide>
          <Heading>Reg-Suit</Heading>
          <Text>
            Have a snapshot for a release, then compare with changes in a ticket
          </Text>
          <Text>
            Gives confidence that you only changed what you were supposed to
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>React-Native-DOM</Heading>
          <Text>
            Write React Native components and deploy them as websites
          </Text>
          <Text>
            Uses React Native toolchain for build instead of webpack
          </Text>
          <LinkAndText href={'https://github.com/vincentriemer/react-native-dom'} />
        </TextSlide>
        <TextSlide>
          <Heading>AirBnb Lona</Heading>
          <Text>
            Transpiles React JSX into React Native code
          </Text>
          <LinkAndText href={'https://github.com/airbnb/Lona'} />
        </TextSlide>
        <TextSlide>
          <Heading>AirBnb Lona</Heading>
          <Text>
            ...actually it does more than just that
          </Text>
        </TextSlide>
        <TextSlide>
          <Heading>AirBnb Lona</Heading>
          <Text>
            It provides a new file format that each React component gets transpiled into
          </Text>
          <Text>
            Other tools can potentially read/write these, and then transpile back to JSX
          </Text>
         </TextSlide>
         <TextSlide>
          <Heading>AirBnb Lona</Heading>
          <Text>
            Big Idea: Design and Engineering can use the same components
          </Text>
          <Text>
            They provide a Sketch-like IDE called "Lona Studio" to demonstrate this
          </Text>
          <Text>
            First iterate in Sketch, then preview on multiple devices in Lona Studio
          </Text>
         </TextSlide>
         <TextSlide>
          <Heading>BuilderX</Heading>
          <Text>
            BuilderX is a similar idea, but paid, with bidirectional design and code for React Native
          </Text>
          <Text>
            React Web support is coming
          </Text>
         </TextSlide>
         <TextSlide>
          <Heading textColor="primary">Thanks!</Heading>
          <LinkAndText href={'https://github.com/mwolson/react-europe-highlights'} />
        </TextSlide>

      </ThemedDeck>
    )
  }
}
