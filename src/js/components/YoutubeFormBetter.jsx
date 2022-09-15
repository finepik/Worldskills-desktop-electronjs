import React from "react";
import '../App.css'
import * as Yup from 'yup'
import {Formik,Form, Field, ErrorMessage, FieldArray} from "formik";
import errorMessage from "./errorMessage.jsx";


const initialValues = {
    name: '',
    email: '',
    channel: '',
    social:{
        facebook:'',
        twitter:''
    },
    phoneNumbers:['',''],
    phNumbers:['']
}
const onSubmit = values => {
    console.log(values)
}
const validationSchema=Yup.object({
    name:Yup.string().required('Required'),
    email:Yup.string().email('Invalid email format').required('Required'),
    channel:Yup.string().required('Required')
})

function YoutubeFormBetter() {

    return (<Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>

        <Form>
            <div className='form-control'>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name='name' component={errorMessage}/>
            </div>

            <div className='form-control'>
                <label htmlFor="email">E-mail</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name='email'>
                    {errorMsg=><div className='error'>{errorMsg}</div> }
                </ErrorMessage>
            </div>

            <div className='form-control'>
                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" />
                <ErrorMessage name='channel'/>
            </div>

            <div className='form-control'>
                <label htmlFor="comments">Comments</label>
                <Field as='textarea' id='comments' name='comments'></Field>
            </div>

            <div className='form-control'>
                <label htmlFor="facebook">Facebook profile</label>
                <Field type='text' id='facebook' name='social.facebook'></Field>
            </div>

            <div className='form-control'>
                <label htmlFor="twitter">Twitter profile</label>
                <Field type='text' id='twitter' name='social.twitter'></Field>
            </div>

            <div className='form-control'>
                <label htmlFor="ph_1">Primary phone number </label>
                <Field type='text' id='ph_1' name='phoneNumbers[0]'></Field>
            </div>

            <div className='form-control'>
                <label htmlFor="ph_2">Secondary phone number</label>
                <Field type='text' id='ph_2' name='phoneNumbers[1]'></Field>
            </div>

            <div className='form-control'>
                <label>List of phone numbers</label>
                <FieldArray name='phNumbers'>
                    {
                        fieldArrayProps=>{
                            const {push, remove, form}=fieldArrayProps
                            const {values}= form
                            const {phNumbers}=values
                            return(
                                <div>
                                    {phNumbers.map((phNumber,index)=>(
                                        <div key={index}>
                                            <Field name={`phNumbers[${index}]`}/>
                                            {index>0&&(
                                                <button type='button' onClick={()=>remove(index)}>
                                                    -
                                                </button>
                                            )}
                                            <button type='button' onClick={()=>push('')}>
                                                +
                                            </button>

                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    }
                </FieldArray>

            </div>
            <button className='clickSubmit' type="submit">Submit</button>
        </Form>

    </Formik>)
}


export default YoutubeFormBetter;