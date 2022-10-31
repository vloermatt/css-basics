import React from 'react';
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center} from '@chakra-ui/react';
import './styles.css';

const Header: React.FC = () => {
    return(
        <Box width="100%" padding="20px" backgroundColor="#7bdff2">
            <Center>
                <Breadcrumb separator="">
                <BreadcrumbItem>
                    <BreadcrumbLink className="header-link" href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                     <BreadcrumbLink className="header-link" href="/about">About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                     <BreadcrumbLink className="header-link" href="/contact">Contact</BreadcrumbLink>
                </BreadcrumbItem>
                </Breadcrumb>
            </Center>
        </Box>
    )
};

export default Header;