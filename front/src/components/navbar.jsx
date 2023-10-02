import React from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from './navbarElements'
import { PiFlowerTulipBold } from "react-icons/pi";
import {IconContext} from 'react-icons'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value= {{style: {fontSize: "2em" }}}>
                <LogoContainer>
                    <PiFlowerTulipBold />
                    <p>Vector -</p>
                    <p>f(x)</p>
                </LogoContainer>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                            HOME
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                           VER TODO
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                            NUEVO INGRESO
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>
    )
}

export default Navbar