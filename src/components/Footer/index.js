import React from 'react';
import { FooterContainer,FooterLinkS, Text, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights } from './FooterElements';
import { FaFacebook } from 'react-icons/fa';
import {animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> 
                                Links
                            </FooterLinkTitle>
                                <FooterLinkS to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Projects</FooterLinkS>
                                <FooterLinkS to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About me</FooterLinkS>
                                <FooterLinkS to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Contact</FooterLinkS>
                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> 
                                Social Media
                            </FooterLinkTitle>

                                <FooterLink href='https://github.com/MridulGupta1608' target='_blank' >Github</FooterLink>
                                <FooterLink href='//www.linkedin.com/in/mridul-gupta-27948119a' target='_blank' >LinkedIn</FooterLink>

                        </FooterLinkItems>
                        
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >Welcome</SocialLogo>
                        <Text>Built with ReactJs</Text>
                        <WebsiteRights>© 2021 All rights reserved.</WebsiteRights>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer;
