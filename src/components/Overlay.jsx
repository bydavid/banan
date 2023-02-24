import {Container, TopLeft, BottomLeft, BottomRight, TopRight, BottomMiddle, RightMiddle, FadeIn} from '../styles.js'
import { VelvetBanana } from './VelvetBanana.jsx'
import { Outlet, Link } from 'react-router-dom'

export default function Overlay() {
  return (
      <>
        <Outlet/>
          <Container>
            <FadeIn>
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
                  <a href="https://bydavid.me">Visit me on my site</a>
                  <br />
                  <a href="https://www.linkedin.com/in/davidfadeyemi/">Let's connect on LinkedIn</a>
                  <br />
              </BottomLeft>
              <RightMiddle>
                  <h3>Welcome to my page!</h3>
              </RightMiddle>
              <BottomMiddle>
                  <Link to={'/'}>Banan</Link>
                  <div/>
                  <Link to={'strawbs'}>Strawbs</Link>
                  <div/>
                  <Link to={'goes'}>Goes</Link>
              </BottomMiddle>
              <BottomRight>
              </BottomRight>
              <TopRight>
                  <img src="/img/banner.png" alt="banner" />
              </TopRight>
              <VelvetBanana />
            </FadeIn>
          </Container>
      </>
  )
}


