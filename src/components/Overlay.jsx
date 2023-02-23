import {Container, TopLeft, BottomLeft, BottomRight, Spacer, BottomMiddle, RightMiddle, FadeIn} from '../styles.js'
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
                  <a href="https://bydavid.me">Visit me on my website</a>
                  <br />
                  <a href="https://www.linkedin.com/in/davidfadeyemi/">Let's connect on LinkedIn</a>
                  <br />
              </BottomLeft>
              <RightMiddle>
                  <h3>Welcome to my page!</h3>
              </RightMiddle>
              <BottomMiddle>
                  <Link to={'Banan'}>Banan</Link>
                  <span>     </span>
                  <Link to={'Strawb'}>Strawbs</Link>
                  <span>     </span>
                  <Link to={'Goes'}>Goes</Link>
              </BottomMiddle>
              <BottomRight>
              </BottomRight>
              <Spacer>
                  <div />
                  <div />
                  <div />
              </Spacer>
              <VelvetBanana />
            </FadeIn>
          </Container>
      </>
  )
}


