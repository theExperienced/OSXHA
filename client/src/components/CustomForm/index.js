import React from 'react';
import { Formik, Field, Form } from 'formik';


const CustomForm = ({ purpose, initialValues, handleSubmit }) => {

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                >
                <Form>
                    {
                        Object.entries(initialValues).map(([key, value]) => {
                            return (
                                <div className='form-group'>
                                    <label htmlFor={key}>{key}</label>
                                    <Field id={key} name={key}  />
                                </div>
                            );
                        })

                    }
                    
                    <button type="submit">{purpose}</button>
                </Form>
            </Formik>
        </div>
    );
}

export default CustomForm;