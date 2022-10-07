import { ComponentStyleConfig } from "@chakra-ui/react";

export const Input = {
    baseStyle: {
        fontSize: '14px',
        padding: '10px',
        borderRadius: '8px',
        color: 'white',
        _hover: {
            backgroundColor: '#c4c4c4 !important'
        }
    },
    sizes: {
        xl: {
            w: '120px',
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