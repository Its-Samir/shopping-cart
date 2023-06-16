import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/Context';
import { CircularProgress } from '@mui/material';

export default function ShippingForm() {
    const ctx = React.useContext(StoreContext);
    const nameRef = React.useRef<HTMLInputElement>(null);
    const emailRef = React.useRef<HTMLInputElement>(null);
    const mobileNumberRef = React.useRef<HTMLInputElement>(null);
    const addressRef = React.useRef<HTMLInputElement>(null);
    const pinCodeRef = React.useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        let title = document.querySelector('title')!
        title.innerText = 'Shipping Form';
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length > 0) {
            setError('');
        }
    }

    function submitForm(event: React.FormEvent) {
        event.preventDefault();

        setLoading(true);

        if (nameRef.current?.value === '' || emailRef.current?.value === '' || mobileNumberRef.current?.value === '' || addressRef.current?.value === '' || pinCodeRef.current?.value === '') {
            setError('Form field(s) should not be empty.');
            setLoading(false);
            return;
        }

        setTimeout(() => {
            ctx.checkout();
            navigate('/shopping/checkout/payment');
            setLoading(false);
        }, 1000);
    }

    function cancelForm() {
        navigate('/cart');
    }

    return (
        <div className="shippingFormDiv">
            <h1>Shipping Details</h1>
            <hr style={{ margin: '10px 0' }} />

            {error && <span style={{ color: 'red' }}>* {error}</span>}

            <form action="" onSubmit={submitForm}>
                <label>Name {(nameRef.current?.value === '' && error) && <span style={{ color: 'red' }}>(required)</span>} </label>
                <input onChange={handleChange} ref={nameRef} type="text" name="" id="" placeholder='Enter name' />

                <label>Email {(emailRef.current?.value === '' && error) && <span style={{ color: 'red' }}>(required)</span>}</label>
                <input onChange={handleChange} ref={emailRef} type="email" name="" id="" placeholder='Enter email' />

                <label>Mobile No. {(mobileNumberRef.current?.value === '' && error) && <span style={{ color: 'red' }}>(required)</span>}</label>
                <input onChange={handleChange} ref={mobileNumberRef} type="number" name="" id="" placeholder='Enter Mobile no.' min={0} maxLength={10} />

                <label>Address {(addressRef.current?.value === '' && error) && <span style={{ color: 'red' }}>(required)</span>}</label>
                <input onChange={handleChange} ref={addressRef} type="text" name="" id="" placeholder='Enter address' />

                <label>Pin Code {(pinCodeRef.current?.value === '' && error) && <span style={{ color: 'red' }}>(required)</span>}</label>
                <input onChange={handleChange} ref={pinCodeRef} type="number" name="" id="" placeholder='Enter pin' min={0} maxLength={6} />

                <div className="action">
                    <button onClick={cancelForm} type='button'>Cancel</button>
                    <button type='submit' className='submitBtn'>{loading ? <CircularProgress size={14} color='inherit' /> : 'Submit'}</button>
                </div>
            </form>
        </div>
    )
}
