import { Card, FormControl, FormLabel, Heading, Input, Skeleton, useToast, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BrandButton from '../components/BrandButton'
import { useUpdateUserMutation, useUserQuery } from '../features/api/ApiSlice'

const EditUser = () => {

    const toast = useToast()
    const { id } = useParams()
    const navigate = useNavigate()

    // RTK Query Hooks
    const { data: user, isLoading, isSuccess, isError, error } = useUserQuery(id!)
    const [updateUser] = useUpdateUserMutation()

    // states
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [contact, setContact] = useState<string>('')

    useEffect(() => {
        setUsername(user?.username!)
        setEmail(user?.email!)
        setContact(user?.contact!)
    }, [isSuccess])

    useEffect(() => {
        isError && (
            toast({
                description: 'something went wrong',
                status: 'error',
                isClosable: true
            })
        )
    }, [error])

    const handleUpdate = (e: any) => {
        e.preventDefault()
        updateUser({
            id,
            username,
            email,
            contact
        })
        navigate('/')
        toast({
            description: 'user updated successfully',
            status: 'success',
            duration: 3000,
            variant: 'left-accent',
            position: 'top-right',
            isClosable: true
        })
    }

    return (
        <>
            {isLoading && <Skeleton mt='16' mx='auto' p='8' maxW='96' h='420px' rounded='lg' />}
            {isSuccess &&
                <Card mt='16' mx='auto' p='8' maxW='96'>
                    <VStack as='form' spacing='4' onSubmit={handleUpdate}>
                        <Heading textTransform='capitalize' fontSize='2xl'>update existing user</Heading>
                        <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email address</FormLabel>
                            <Input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Contact</FormLabel>
                            <Input
                                type='number'
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                            />
                        </FormControl>
                        <BrandButton
                            color='indigo'
                            type='submit'
                        >
                            edit user
                        </BrandButton>
                    </VStack>
                </Card>
            }
        </>
    )
}

export default EditUser