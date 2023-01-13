import { Card, FormControl, FormLabel, Heading, Input, useToast, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BrandButton from '../components/BrandButton'
import { user, editUser } from '../features/users/UserSlice'
import { useAppDispatch, useAppSelector } from '../store'

const EditUser = () => {

    const toast = useToast()
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const users = useAppSelector(state => state.user.users)
    const existingUser = users.filter(user => user.id === params.id)
    const { username, email, description } = existingUser[0]
    const [values, setValues] = useState<user>({
        id: params.id,
        username,
        email,
        description
    })
    const handleAdd = (e: any) => {
        e.preventDefault()
        dispatch(editUser({
            id: params.id,
            username: values.username,
            email: values.email,
            description: values.description
        }))
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
        <Card mt='16' mx='auto' p='8' maxW='96'>
            <VStack as='form' spacing='4'>
                <Heading textTransform='capitalize' fontSize='2xl'>update existing user</Heading>
                <FormControl isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        type='text'
                        value={values.username}
                        onChange={(e) => setValues({ ...values, username: e.target.value })}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        type='email'
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Profile Bio</FormLabel>
                    <Input
                        type='text'
                        value={values.description}
                        onChange={(e) => setValues({ ...values, description: e.target.value })}
                    />
                </FormControl>
                <BrandButton
                    color='indigo'
                    onClick={handleAdd}
                >
                    edit user
                </BrandButton>
            </VStack>
        </Card>
    )
}

export default EditUser