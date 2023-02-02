import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from './styles'
import { VelvetBanana } from './VelvetBanana.jsx'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          Banan —
        </h1>
        <h3>
          A project by David Adeyemi
        </h3>
        <p>In React & Threejs — Tutorial by 0xca0a </p>
      </TopLeft>
      <BottomLeft>
        A runtime deconstruction of <a href="https://playful.software">playful.software</a>
      </BottomLeft>
      <BottomRight>
        Inspiration and ideas
        <br />
        Fundamentals
        <br />
        Finding models
        <br />
        Preparing them for the web
        <br />
        Displaying and changing models
        <br />
        Animation fundamentals
        <br />
        Effects and making things look good
        <br />
        Performance and time to load
        <br />
      </BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <VelvetBanana />
    </Container>
  )
}
