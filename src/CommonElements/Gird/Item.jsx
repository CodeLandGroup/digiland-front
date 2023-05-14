import * as React from 'react';
import Box from '@mui/material/Box';

export default function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                fontSize: '0.875rem',
                direction: 'rtl',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}