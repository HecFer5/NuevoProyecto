import React from 'react'
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper, MobileIcon } from './navbarElements'
import { PiFlowerTulipBold } from "react-icons/pi";
import { IconContext } from 'react-icons'
import { FaAlignJustify } from "react-icons/fa";
import { useState } from 'react'
const Navbar = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false)

    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
                    <LogoContainer>
                        <PiFlowerTulipBold />
                        <p>Vector -</p>
                        <p>f(x)</p>
                    </LogoContainer>
                    <MobileIcon onClick={() => setMostrarMenu(!mostrarMenu)}>
                        <FaAlignJustify />
                    </MobileIcon>
                    <Menu open={mostrarMenu}>
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