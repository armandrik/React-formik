import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Registration',
    'Validation',
    'Identity',
];

export const StepByStep = ({ stepNumber }) => {
    return (
        <div className='stepper'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={stepNumber} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    );
}
