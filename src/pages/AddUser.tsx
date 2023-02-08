import { useState } from 'react'
import { Card, FormControl, FormLabel, Heading, Input, useToast, VStack } from '@chakra-ui/react'
import BrandButton from '../components/BrandButton'
import { useNavigate } from 'react-router-dom'
import { useAddUserMutation } from '../features/api/ApiSlice'


const AddUser = () => {

    const toast = useToast()

    const [addUser] = useAddUserMutation()

    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [contact, setContact] = useState<string>("")

    const handleAddUser = (e: any) => {
        e.preventDefault()
        if (username !== '' && email !== '' && contact !== '') {
            addUser({ username, email, contact })
            navigate('/');
            toast({
                description: "user added successfully",
                status: 'success',
                duration: 3000,
                variant: 'left-accent',
                position: 'top-right',
                isClosable: true,
            })
        } else {
            toast({
                description: "you must fill all inputs.",
                status: 'error',
                duration: 3000,
                variant: 'left-accent',
                position: 'top-right',
                isClosable: true,
            })
        }
    }

    return (
        <Card mt='16' mx='auto' p='8' maxW='96'>
            <VStack as='form' spacing='4' onSubmit={handleAddUser}>
                <Heading textTransform='capitalize' fontSize='2xl'>add new user</Heading>
                <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type='text' onChange={(e) => setUsername(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' onChange={(e) => setEmail(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Contact</FormLabel>
                    <Input type='number' onChange={(e) => setContact(e.target.value)} />
                </FormControl>
                <BrandButton
                    color='indigo'
                    type='submit'
                >
                    add user
                </BrandButton>
            </VStack>
        </Card>
    )
}

export default AddUser