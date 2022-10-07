import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button = {
    baseStyle: {
        fontSize: '16px',
        padding: '10px',
        borderRadius: '8px',
        color: 'white',
        backgroundColor: 'black',
        _hover: {
            backgroundColor: '#c4c4c4 !important'
        }
    },
    sizes: {
        xl: {
            h: '30px',
            fontSize: 'lg',
        }
    },
    variants: {},
    defaultProps: {
        size: '',
        variant: '',
        colorScheme: ''
    }
}