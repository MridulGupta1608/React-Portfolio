import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import Icon1 from '../../images/Netflix.png';
import Icon5 from '../../images/Portfolio.png';
import Icon3 from '../../images/covid.png';
import Icon2 from '../../images/crypto.png';
import Icon4 from '../../images/To-do.png';


const Services = () => {
    return (
        <ServicesContainer  id="projects" >
            <ServicesH1>Personal Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard href='https://netflix-clone-73017.web.app/' target='_blank' >
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Netflix Clone</ServicesH2>
                    <ServicesP>Netflix app clone,  data is pulled from Third-Party API</ServicesP>

                </ServicesCard>
                <ServicesCard href='https://mridulgupta1608.github.io/CryptoTracker/' target='_blank' >
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Crypto Tracker</ServicesH2>
                    <ServicesP>Track Cryptocurrencies values, data is pulled from Third-Party API</ServicesP>

                </ServicesCard>
                <ServicesCard href='https://mridulgupta1608.github.io/Covid19/' target='_blank' >
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>COVID-19 Tracker</ServicesH2>
                    <ServicesP>Track Covid-19 cases globaly, data is pulled from Third-Party API</ServicesP>

                
                </ServicesCard>
                <ServicesCard href='https://mridulgupta1608.github.io/To-Do-List/' target='_blank' >
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Todo App</ServicesH2>
                    <ServicesP>Make your own To-Do list for today and track you progress</ServicesP>

                </ServicesCard>
                <ServicesCard href='https://mridulgupta1608.github.io/Portfolio/#work' target='_blank' >
                    <ServicesIcon src={Icon5} />
                    <ServicesH2>HTML Portfolio</ServicesH2>
                    <ServicesP>Portfolio using only HTML/CSS</ServicesP>

                </ServicesCard>

            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default Services;
