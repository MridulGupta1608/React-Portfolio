import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, } from 'react-icons/fa';
import { ContactContainer, ContactWrapper, ContactHead, ContactH2, ContactP, ContactLinksContainer, ContactLink } from './ContactElements';

const Contact = () => {
    return (
        <ContactContainer id='contact'>
            <ContactWrapper>
                <ContactHead>
                    <ContactH2>Let's Work Together...</ContactH2>
                    <ContactP>How do you take your coffee?</ContactP>
                </ContactHead>
                <ContactLinksContainer>
                    <ContactLink href='https://github.com/MridulGupta1608' target='_blank' >
                        <FaGithub />Github
                    </ContactLink>
                    <ContactLink href='//www.linkedin.com/in/mridul-gupta-27948119a' target='_blank' >
                        <FaLinkedin />Linkedin
                    </ContactLink>
                    <ContactLink href='tel:+918093567950' target='_blank' >
                        <FaPhone />Phone No.
                    </ContactLink>
                    <ContactLink href='mailto:mridulg99@gmail.com' target='_blank' >
                        <FaMailBulk />Email
                    </ContactLink>
                    {/* <ContactLink href='//instagram.com/_being_lazy____/' target='_blank' >
                        <FaInstagram />Instagram
                    </ContactLink> */}
                </ContactLinksContainer>

            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact;
