import React from 'react'
import RuleIcon from '@mui/icons-material/Rule';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { useNavigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from '@mui/material';

export const Validate = ({ data, changeData, endStep }) => {

    const [gender, setGender] = React.useState(false)
    const navigate = useNavigate()

    const editData = () => {
        changeData(data)
        navigate('/')
    }

    const succses = () => {
        navigate('/succses')
        endStep()
    }

    React.useEffect(() => {
        toast.info('Check your information', {
            position: "bottom-center",
            autoClose: 4000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        if (data.gender === 'male' || data.gender === 'MALE' || data.gender === 'Male') {
            setGender(true)
        } else if (data.gender === 'female' || data.gender === 'FEMALE' || data.gender === 'Female') {
            setGender(false)
        } else {
            toast.error('Invalid Gender', {
                position: "bottom-center",
                autoClose: 4000,
                theme: 'dark',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [])

    return (
        <div className='form-container info-size'>
            <h1>Validation <RuleIcon sx={{ fontSize: 35, color: '#4070f4' }} /></h1>
            <div className='user-info'>
                <Typography variant='h6' className='typo'><DriveFileRenameOutlineIcon sx={{ color: '#4070f4' }} /> {data.name} {data.lastName}</Typography>
                <Typography variant='h6' className='typo'><AlternateEmailIcon sx={{ color: '#4070f4' }} /> {data.email}</Typography>
                <Typography variant='h6' className='typo'><LocalPhoneIcon sx={{ color: '#4070f4' }} /> {data.number}</Typography>
                <Typography variant='h6' className='typo'><CalendarMonthIcon sx={{ color: '#4070f4' }} /> {data.date}</Typography>
                {data.gender ? <Typography variant='h6' className='typo'>{gender ? <MaleIcon sx={{ color: '#4070f4' }} /> : <FemaleIcon sx={{ color: '#ff6ba3' }} />} {data.gender}</Typography> : null}
            </div>
            <div className='btn-wapper'>
                <Button color="success" endIcon={<SendIcon />} variant="contained" onClick={succses} className='btn' fullWidth>
                    Upload
                </Button>
                <Button color="primary" startIcon={<BackspaceIcon />} variant="contained" onClick={editData} className='btn' fullWidth>
                    Wrong information ?
                </Button>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    )
}