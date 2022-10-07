import { extendTheme } from '@chakra-ui/react'
import { Button } from './Components/Button'
import { Input } from './Components/Input'

export const theme = extendTheme({
    colors: {
        button: {
            darkGreen: '#00504D',
            lightGreen: '#153e75',
            white: '#c4c4c4'
        }
    },
    sizes: {
        x1: '80px',
        h1: '25px'
    },
    components: {
        Button,
        Input
    }
})

