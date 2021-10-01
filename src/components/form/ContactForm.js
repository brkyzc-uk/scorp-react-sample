import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "yup-phone"
import { useTranslation } from 'react-i18next';
import {useSelector} from "react-redux";
import { FormControl, TextField, Button, Box, Select, MenuItem, InputLabel, Container } from '@mui/material';
import {COUNTRY_LIST} from "../../utils/constants";

export default function ContactForm() {
    const { t } = useTranslation();
    const userInfo = useSelector(store => store.userInfoReducer.userInfo);

    const formik = useFormik({
        initialValues: {
            name: userInfo && userInfo.name ? userInfo.name : '',
            email: userInfo && userInfo.email ? userInfo.email : '',
            phone: null,
            country: null,
            text: ''
        },
        
        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, t('nameMax'))
                .required(t('required')),
                
               
            email: Yup.string()
                .email(t('invalidEmail')),
                
            phone: Yup.string()
                .phone("TR", true, t('invalidPhone'))
                .nullable()
        }),
        onSubmit: values => {
            const { name, email, phone, country, text } = values;

            const payload = {
                name,
                email,
                "country_code": country,
                phonenumber: phone,
                text
            };
            console.log(JSON.stringify(payload));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Container>
                <Box
                    sx={{
                        display: 'grid',
                        gap: 2,
                        marginBottom:'50px',
                        marginTop:'50px',
                    }}
                >
                    <TextField
                        id="name"
                        name="name"
                        type="text"
                        label={t('contactUsNameLabel')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.errors.name}
                        
                    />
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        label={t('contactUsEmailLabel')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.errors.email}
                    />
                    <TextField
                        id="phone"
                        name="phone"
                        type="text"
                        label={t('contactUsPhoneLabel')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                    <FormControl >
                        <InputLabel id="select-label">{t('contactUsCountryLabel')}</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            onChange={formik.handleChange('country')}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                        >
                            {COUNTRY_LIST.map(country => (
                                <MenuItem key={country.id} value={country.id}>{t(country.name)}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        id="text"
                        name="text"
                        type="text"
                        label={t('contactUsTextAreaLabel')}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                        error={formik.touched.text && Boolean(formik.errors.text)}
                        helperText={formik.errors.text}
                        minRows={3}
                        multiline
                        fullWidth
                    />
                    <Button 
                        style={{textTransform: 'capitalize'}}
                        variant="contained"
                        size="large"
                        fullWidth
                        type="submit">{t('contactUsSubmitButton')}
                    </Button>
                </Box>
            </Container>
        </form>
    );
};
