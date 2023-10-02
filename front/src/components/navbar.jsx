import React from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, MobileIcon } from './navbarElements'
import { PiFlowerTulipBold } from "react-icons/pi";
import { IconContext } from 'react-icons'
import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <PiFlowerTulipBold />
                        <p>Vector -</p>
                        <p>f(x)</p>
                    </LogoContainer>
                    <MobileIcon>
                        <FaAlignJustify/>
                    </MobileIcon>
                    <Menu>
                        <MenuItem>
                            <MenuItemLink>

                                HOME
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={"/muestra"}>
                                VER TODO
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink to={'/create'}>
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