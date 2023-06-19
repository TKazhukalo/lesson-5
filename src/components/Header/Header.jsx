import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Header.styled";

export const Header = () => {
    return <Container>
        <NavLink to='/'>HomePage</NavLink>
        <NavLink to='/news'>NewsPage</NavLink>
        <NavLink to='/todo'>TodoPage</NavLink>
    </Container>
}