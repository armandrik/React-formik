import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SendIcon from '@mui/icons-material/Send';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';

const validationSchema = yup.object({
    name: yup
        .string('Enter your Name')
        .required('Name is required'),
    lastName: yup
        .string('Enter your lastName')
        .required('lastName is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    number: yup
        .number('Enter your Number')
        .min(5, 'invalid number')
        .required('number is required'),
    gender: yup
        .string('Enter your gender'),
    date: yup
        .string()
        .required('date is required')

});

export const Register = ({ getData, changedData }) => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: changedData.name,
            lastName: changedData.lastName,
            email: changedData.email,
            password: changedData.password,
            number: changedData.number,
            gender: changedData.gender,
            date: changedData.date
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            navigate('/register')
        },
    });

    const genderOption = ['Male', 'Female'];

    const sendData = () => {
        getData(formik.values)
    }


    return (
        <div className='form-container'>
            <h1>Registration <HowToRegIcon sx={{ fontSize: 32, color: '#4070f4' }} /></h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='text-field'>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        id="name"
                        name="name"
                        label="firstName"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </div>
                <div className='text-field'>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </div>
                <div className='text-field'>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div className='text-field'>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <div className='text-field'>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        id="standard-number"
                        name="number"
                        label="Number"
                        type="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        error={formik.touched.number && Boolean(formik.errors.number)}
                        helperText={formik.touched.number && formik.errors.number}
                    />
                </div>
                <div className='text-field'>
                    <TextField
                        autoComplete='off'
                        fullWidth
                        id="standard-date"
                        name="date"
                        type="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                    />
                </div>
                <div className='text-field'>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={genderOption}
                        renderInput={(params) =>
                            <TextField
                                {...params}
                                fullWidth
                                id="standard-gender"
                                name="gender"
                                label="Gender"
                                type="text"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                error={formik.touched.gender && Boolean(formik.errors.gender)}
                                helperText={formik.touched.gender && formik.errors.gender} />}
                    />
                </div>
                <div className='btn-container'>
                    <Button color="primary" variant="contained" type="submit" fullWidth endIcon={<SendIcon />} className='btn' onClick={() => sendData()}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}