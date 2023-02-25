import {
    Container,
    TopLeft,
    BottomLeft,
    BottomRight,
    TopRight,
    BottomMiddle,
    RightMiddle,
    FadeIn,
    Wink, StyledLink
} from '../assets/styles.js'
import { VelvetBanana } from './VelvetBanana.jsx'
import { Outlet } from 'react-router-dom'


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
                  <h2>
                      A project by David Adeyemi
                  </h2>
                  <p>Built in React & ThreeJS — Tutorial by 0xca0a </p>
              </TopLeft>
              <BottomLeft>
                  <Wink href='https://0xca0a.gumroad.com/l/B4N4N4S'>More about this site</Wink>
                  <br />
                  <Wink href="https://bydavid.me">Visit me on my site</Wink>
                  <br />
                  <Wink href="https://www.linkedin.com/in/davidfadeyemi/">Let's connect on LinkedIn</Wink>
                  <br />
              </BottomLeft>
              <RightMiddle>
                  <h3>Hungry yet? :)</h3>
              </RightMiddle>
              <BottomMiddle>

                  <StyledLink to={'/'}>🍌 Banan</StyledLink>
                  <div/>
                  <StyledLink to={'strawbs'}>🍓 Strawbs</StyledLink>
                  <div/>
                  <StyledLink to={'goes'}>🥭 Goes</StyledLink>
              </BottomMiddle>
              <BottomRight>
              </BottomRight>
              <TopRight>
                  <a href='https://bydavid.me'><img src="src/assets/banner.png" alt="banner" /></a>
              </TopRight>
              <VelvetBanana />
            </FadeIn>
          </Container>
      </>
  )
}


