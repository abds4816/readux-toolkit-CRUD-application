import { SimpleGrid, Skeleton } from "@chakra-ui/react"

export const CardLoading = () => {
    return (
        <SimpleGrid spacing='8' my='12' columns={{ base: 1, md: 2, lg: 3 }}>
            <Skeleton w='full' h='96' rounded='lg' />
            <Skeleton w='full' h='96' rounded='lg' />
            <Skeleton w='full' h='96' rounded='lg' />
        </SimpleGrid>
    )
}