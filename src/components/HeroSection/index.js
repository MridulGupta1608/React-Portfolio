import React, {useState} from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElement';
import Video from '../../videos/video.mp4';

const HeroSection = () => {
const [hover, setHover] = useState(false);

    const onHover = ( ) => {
        setHover(!hover);
    }

    return (
        <HeroContainer  >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Mridul Gupta
                </HeroH1>
                <HeroP>
                    a web developer
                </HeroP>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
