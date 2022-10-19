import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Succses = () => {

    React.useEffect(() => {
        toast.success('Completed', {
            position: "bottom-center",
            autoClose: 4000,
            theme: 'dark',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }, [])


    return (
        <div className='form-container'>
            <div className='identity'>
                <h1>Identity <DoneAllIcon sx={{ fontSize: 35, color: '#4070f4' }} /></h1>
                <h3 className='succsess-h3'><CheckCircleIcon sx={{ fontSize: 62, color: '#2e7d32' }} />Succsessfully Uploaded</h3>
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
