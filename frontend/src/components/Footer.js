import React from 'react'
import {Box, FooterContainer,FooterLink} from "./FooterStyles";
import './footer.css'
export default function Footer() {
  return (
    <Box>
    <FooterContainer className='footer-nav'>
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/service">Services</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
    </FooterContainer>
    </Box>
  )
}
