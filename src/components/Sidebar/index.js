import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarRoute, SidebarLink, SidebarMenu, SidebarWrapper } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='projects' onClick={toggle} >
                        Projects
                    </SidebarLink>
                    <SidebarLink to='about'  onClick={toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle} >
                        Contact
                    </SidebarLink>
                    

                </SidebarMenu>
                
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
