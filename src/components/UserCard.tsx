import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Center, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useDeleteUserMutation } from '../features/api/ApiSlice'
import { user } from '../features/api/ApiSlice'
import BrandButton from './BrandButton'

const UserCard = (props: user) => {

    // Hooks
    const [deleteUser] = useDeleteUserMutation()
    const toast = useToast()
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()

    //   Delete User function
    const handleDeleteUser = (e: any) => {
        e.preventDefault()
        deleteUser(props.id)
        toast({
            description: 'user deleted successfully',
            status: 'success',
            duration: 3000,
            variant: 'left-accent',
            position: 'top-right',
            isClosable: true
        })
    }

    return (
        <Center py={6}>
            <Box
                w='full'
                bg={useColorModeValue('gray.100', 'gray.900')}
                // boxShadow={'lg'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Avatar
                    size={'xl'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.300',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                    }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {props.username}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} my={4}>
                    {props.email}
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {props.contact}
                </Text>

                <HStack mt='8' spacing='4'>
                    <BrandButton
                        color='indigo'
                        leftIcon={<EditIcon />}
                        isFullWidth
                        onClick={() => navigate(`/edit-user/${props.id}`)}
                    >
                        update
                    </BrandButton>
                    <BrandButton
                        color='red'
                        leftIcon={<DeleteIcon />}
                        isFullWidth
                        onClick={onOpen}
                    >
                        delete
                    </BrandButton>
                </HStack>
            </Box>
            {/* Modal Start */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure tou want to delete this user?</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='red' onClick={handleDeleteUser}>Confirm</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            {/* Modal End */}
        </Center>
    )
}

export default UserCard