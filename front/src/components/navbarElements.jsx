import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: #23394d;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`
export const LogoContainer = styled.div`
 margin-left: 0.5rem;
 display: flex;
 align-items: center;
 font-size: 1.2rem;
 font-family: sans-serif;
  
  p{
    &:nth-child(2){
        color: #fff;
    }
    &:nth-child(3){
        color: #e07924;
        font-size: 1.5rem;
        font-weight: 500;

    }
  }

  svg{
        fill:#e07924;
        margin-right: 0.5rem;

    }
`
export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;
    
`
export const MenuItem = styled.li`
height: 100%;
    
`
export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color: #64b2ff;
    font-family: sans-serif;
    font-size: 1 rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover{
        color: #fff;
        background-color: #e8792a;
        transition: 0.5s all ease;
    }
`