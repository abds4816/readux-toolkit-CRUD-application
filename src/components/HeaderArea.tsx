import { useNavigate } from 'react-router-dom'
import { HStack, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import BrandButton from './BrandButton'

const HeaderArea = () => {
    const navigate = useNavigate()
    return (
        <HStack my='8'>
            <InputGroup>
                <InputLeftElement children={<SearchIcon />} />
                <Input type='search' placeholder='search by username...' _placeholder={{ textTransform: 'capitalize' }} />
            </InputGroup>
            <BrandButton
                color='indigo'
                leftIcon={<AddIcon />}
                onClick={() => navigate('/add-user')}>add user</BrandButton>
        </HStack>
    )
}

export default HeaderArea