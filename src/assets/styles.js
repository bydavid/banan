import styled, { keyframes } from 'styled-components'
import {Link} from 'react-router-dom'


export const fade = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`

export const FadeIn = styled.div` ${fade} 4s normal forwards ease-in-out;
`

export const Container = styled.div`
  font-size: 16px;
  
  & h1 {
    color: seashell;
    font-family: 'Ayer Poster', serif;   
    font-weight: 400;
    font-size: min(18vw, 14em);
    line-height: 0.85em;
  }
  
  & h2 {
    color: seagreen;
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: min(5vw, 3em);
    line-height: 0.85em;
    -webkit-text-stroke: 0.2px black;
  }
  
  & p {
    color: seagreen;
    font-family: Tahoma, sans-serif;
    font-weight: 400;
    font-size: min(2.5vw, 1.5em);
    line-height: 0.85em;
    -webkit-text-stroke: 0.25px black;
  }

  & img {
    position: relative;
    width: 100px;
    height: 100px;
  }
`

export const TopLeft = styled.div`
  position: absolute;
  top: 5vw;
  left: 5vw;
`

export const BottomLeft = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 5vw;
  width: 30ch;
  max-width: 40%;
  
  
`

export const BottomMiddle = styled.div`
  position: absolute;
  bottom: 5vw;
  left: 45vw; 
  text-align: center;
  display: flex;
  flex-direction: row;
  & > div {
    position: relative;
    width: 48px;
    height: 2px;
  }
`

export const BottomRight = styled.div`
  position: absolute;
  bottom: 5vw;
  right: 5vw;
  width: 35ch;
  max-width: 40%;
  line-height: 1em;
  letter-spacing: -0.01em;
  text-align: right;
`

export const TopRight = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5vw;
  right: 5vw;
  color: wheat;
`

export const RightMiddle = styled.div`
  font-family: Tahoma, sans-serif;
  position: absolute;
  bottom: 50%;
  right: 5vw;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: -0.01em;
  font-size: 12px;
  transform: rotate(90deg) translate3d(50%, 0, 0);
  transform-origin: 100% 50%;
  color: wheat;
`

export const Wink = styled.a`
  font-family: Tahoma, sans-serif;
  text-decoration: none;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    background-color: seashell ;
    position: absolute ;
    left: 0 ;
    bottom: 3px ;
    width: 105% ;
    height: 8px ;
    z-index: -1 ;
    transition: all .3s ease-in-out ;
  }

  &:hover::before {
    bottom: 0 ;
    height: 110% ;
  }
`

export const StyledLink = styled(Link)`
  font-family: Tahoma, sans-serif;
  text-decoration: none;
  position: relative;
  z-index: 1;
  font-size: 150%;
  
  &::before {
    content: '' ;
    background-color: seashell ;
    position: absolute  ;
    left: 0  ;
    bottom: 3px  ;
    width: 105%  ;
    height: 8px  ;
    z-index: -1  ;
    transition: all .3s ease-in-out  ;
  }

  &:hover::before {
    bottom: 0  ;
    height: 110%  ;
  }
`