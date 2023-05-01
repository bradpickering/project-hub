import { useState, useEffect } from 'react'
import {
    Box
} from '@chakra-ui/react'

import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'

export default function ImageCarousel({children: slides}) {
    console.log(slides)
    const [curr, setCurr] = useState(0)

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    return (
        // <Box
        // overflow='hidden'
        // position='relative'>
        //     slides.map(slides)
        // </Box>
        <div style={{position: 'relative'}}>
            <div style={{display: 'flex'}}>
                {slides}
            </div>
        </div>
        )
}