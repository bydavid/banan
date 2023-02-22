import { Container, TopLeft, BottomLeft, BottomRight, Hamburger } from '../styles.js'
import { VelvetBanana } from './VelvetBanana.jsx'
import { Outlet, Link } from 'react-router-dom'

export default function Overlay() {
  return (
      <>
        <Outlet/>
          <Container>
              <TopLeft>
                  <h1>
                      Banan —
                  </h1>
                  <h3>
                      A project by David Adeyemi
                  </h3>
                  <p>Built in React & ThreeJS — Tutorial by 0xca0a </p>
              </TopLeft>
              <BottomLeft>
                  <a href='https://0xca0a.gumroad.com/l/B4N4N4S'>More about this site</a>
                  <br />
                  <a href="https://bydavid.me">Visit me on my website</a>
                  <br />
                  <a href="https://www.linkedin.com/in/davidfadeyemi/">Let's connect on LinkedIn</a>
                  <br />
              </BottomLeft>
              <BottomRight>
                  <ul>
                      <li>
                        <Link to={'Strawb'}>Strawbs</Link>
                      </li>
                      <li>
                        <Link to={'Goes'}>Goes</Link>
                      </li>
                  </ul>
              </BottomRight>
              <Hamburger>
                  <div />
                  <div />
                  <div />
                  <div />
              </Hamburger>
              <VelvetBanana />
          </Container>
      </>
  )
}

// TODO: Add peach and strawbs