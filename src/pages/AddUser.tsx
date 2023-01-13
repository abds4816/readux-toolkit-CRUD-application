import { useState } from 'react'
import { Card, FormControl, FormLabel, Heading, Input, useToast, VStack } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
import BrandButton from '../components/BrandButton'
import { useAppDispatch } from '../store'
import { addUser } from '../features/users/UserSlice'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


const AddUser = () => {

    const toast = useToast()
    const dispatch = useAppDispatch()

    const navigate = useNavigate()
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const handleAddUser = (e: any) => {
        e.preventDefault()
        if (username !== '' && email !== '' && description !== '') {
            dispatch(addUser({ id: uuidv4(), username, email, description }));
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
                    <FormLabel>Profile Bio</FormLabel>
                    <Input type='text' onChange={(e) => setDescription(e.target.value)} />
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