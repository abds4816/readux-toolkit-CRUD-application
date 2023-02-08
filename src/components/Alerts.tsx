import { Alert, AlertIcon } from "@chakra-ui/react"

export const EmptyListAlert = () => {
    return (
        <Alert status='warning' rounded='lg' mt='12'>
            <AlertIcon />
            no users here!
        </Alert>
    )
}

export const ErrorAlert = () => {
    return (
        <Alert status='error' rounded='lg' mt='12'>
            <AlertIcon />
            Something went wrong!
        </Alert>
    )
}