import React from 'react';
import axios from 'axios';
import s from './index.module.css';
import image from './image.png';
import { useForm } from 'react-hook-form';

export default function DiscountForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3333/sale/send', data);
            console.log(response.data);
        } catch (error) {
            console.error('Error while sending request:', error);
        }
    };

    return (
        <div className={s.block_form}>
            <h1>5% off on the first order</h1>
            <div className={s.content_container}>
                <img src={image} alt="Image" />
                <form className={s.form_container} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.inputs}>
                        <div className={s.inputWrapper}>
                            <input type="text" placeholder="Name" {...register('name', { required: true })} />
                            {errors.name && errors.name.type === 'required' && <span className={s.errorText}>! Name is required</span>}
                        </div>
                        
                        <div className={s.inputWrapper}>
                            <input type="text" placeholder="Phone number" {...register('phone_number', { required: true, pattern: /^[0-9+]+$/ })} />
                            {errors.phone_number && errors.phone_number.type === 'required' && <span className={s.errorText}>! Phone number is required</span>}
                            {errors.phone_number && errors.phone_number.type === 'pattern' && <span className={s.errorText}>! Invalid phone number format</span>}
                        </div>

                        <div className={s.inputWrapper}>
                            <input type="text" placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && errors.email.type === 'required' && <span className={s.errorText}>! Email is required</span>}
                            {errors.email && errors.email.type === 'pattern' && <span className={s.errorText}>! Invalid email format</span>}
                        </div>
                    </div>
                    <button type="submit">Get a discount</button>
                </form>
            </div>
        </div>
    );
}