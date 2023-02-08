import { Link } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, Flex, Heading, useColorMode } from '@chakra-ui/react'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex align='center' justify='space-between' py='4'>
            <Link to='/'>
                <Heading>CRUD with Json Server</Heading>
            </Link>
            <IconButton
                aria-label='theme'
                rounded='full'
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode} />
        </Flex>
    )
}

export default Navbar