import { Button } from '@chakra-ui/react'
import { ReactElement } from 'react'

interface BrandButtonProps {
    type?: "button" | "submit" | "reset" | undefined
    color: string,
    leftIcon?: ReactElement,
    children: string,
    isFullWidth?: boolean,
    onClick?: any
}

const BrandButton = (props: BrandButtonProps, { ...rest }) => {
    return (
        <Button
            w={props.isFullWidth ? 'full' : 'auto'}
            fontWeight='normal'
            textTransform='capitalize'
            bg={`${props.color}.500`}
            color='white'
            _hover={{
                bg: `${props.color}.600`,
                color: 'white'
            }}
            _focus={{
                bg: `${props.color}.600`,
                color: 'white'
            }}
            leftIcon={props.leftIcon}
            type={props.type}
            onClick={props.onClick}>
            {props.children}
        </Button>
    )
}

export default BrandButton