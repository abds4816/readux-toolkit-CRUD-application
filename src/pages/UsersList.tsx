import { useEffect, useState } from 'react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import { HStack, Input, InputGroup, InputLeftElement, SimpleGrid, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import BrandButton from '../components/BrandButton'
import UserCard from '../components/UserCard'
import { useUsersQuery } from '../features/api/ApiSlice'
import { CardLoading } from '../components/CardLoading'
import { EmptyListAlert } from '../components/Alerts'

const UsersList = () => {

    const toast = useToast()
    const navigate = useNavigate()
    const { data: users, isLoading, isSuccess, isError, error } = useUsersQuery()
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        isError && (
            toast({
                description: 'something went wrong',
                status: 'error',
                isClosable: true
            })
        )
    }, [error])

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
            {/* Header Area End */}

            {/* When loading */}
            {isLoading && <CardLoading />}
            {/* When loading */}

            {/* When success */}
            {isSuccess && (
                <>
                    {users.length < 1 && <EmptyListAlert />}
                    <SimpleGrid spacing='8' my='12' columns={{ base: 1, md: 2, lg: 3 }}>
                        {users?.filter((val) => {
                            if (searchTerm === '') {
                                return val
                            } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map((user) => (
                            <UserCard key={user.id} id={user.id} username={user.username} email={user.email} contact={user.contact} />
                        ))}
                    </SimpleGrid>
                </>
            )}
            {/* When success */}

        </>
    )
}

export default UsersList