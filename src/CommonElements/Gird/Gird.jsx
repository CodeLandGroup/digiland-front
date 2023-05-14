import * as React from 'react';
import Box from '@mui/material/Box';




export default function Gird(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                display: 'grid',
                direction: 'ltr',
                gridAutoColumns: 'ltr',
                ...sx,
            }}
            {...other}
        />
    )
}
