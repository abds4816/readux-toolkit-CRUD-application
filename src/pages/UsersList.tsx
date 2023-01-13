import { useState } from 'react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import { Alert, AlertIcon, HStack, Input, InputGroup, InputLeftElement, SimpleGrid } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import BrandButton from '../components/BrandButton'
import UserCard from '../components/UserCard'
import { useAppSelector } from '../store'

const UsersList = () => {

    const navigate = useNavigate()
    const users = useAppSelector((state) => state.user.users)
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <>
            {/* Header Area start */}
            <HStack my='8'>
                <InputGroup>
                    <InputLeftElement children={<SearchIcon color='gray.300' />} />
                    <Input
                        type='search'
                        placeholder='search by username...'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </InputGroup>
                <BrandButton
                    color='indigo'
                    leftIcon={<AddIcon />}
                    onClick={() => navigate('/add-user')}>add user</BrandButton>
            </HStack>
            {/* Header Area start */}
            {users.length > 0 ? (
                <SimpleGrid spacing='8' my='12' columns={{ base: 1, md: 2, lg: 3 }}>
                    {users.filter((val) => {
                        if (searchTerm === '') {
                            return val
                        } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((user) => (
                        <UserCard key={user.id} id={user.id} username={user.username} email={user.email} description={user.description} />
                    ))}
                </SimpleGrid>
            ) : (
                <Alert status='warning' rounded='lg' mt='12'>
                    <AlertIcon />
                    no users here!
                </Alert>
            )
            }

        </>
    )
}

export default UsersList