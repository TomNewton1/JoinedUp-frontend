import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {Container} from "semantic-ui-react";
import { Message } from 'semantic-ui-react'


export default function OrderForm() {

    const history = useHistory();

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(null)

    const onSubmit = (data) => {

        const new_data = {
        "sender": {
            "name": data['sender_name'],
            "street_address": data['sender_street_address'],
            "city": data['sender_city'],
            "country_code": data['sender_country_code']
        },
        "recipient": {
            "name": data['recipient_name'],
            "street_address": data['recipient_street_address'],
            "city": data['recipient_name'],
            "country_code": data['recipient_name']
        },
        "value": data['value'],
        "despatch_date": data['despatch_date'],
        "contents_declaration": data['contents_declaration'],
        "insurance_required": data['insurance_required'],
        "tracking_reference": data['tracking_reference']
        }

        axios.put('/orders', new_data)
        .then(res => {
        console.log(res)
        console.log(res.data.package)
        history.push(`/orders/${res.data.package.order.id}`, )
        })
        .catch(err => {
            console.log("err request",err.request.response)
            setError(err.request.response)
        })
    }

    return (
        <div>
            <Container style={{marginTop: 40}}>
            <div className="ui container">
                <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="sender-details">
                        <h3>Sender Details</h3>
                        <div className="field">
                        <input type="text" placeholder="sender name" name="sender_name" {...register('sender_name')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="Street Name" name="sender_street_address" {...register('sender_street_address')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="City" name="sender_city" {...register('sender_city')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="Country Code" name="country_code" {...register('country_code')}></input>
                        </div>
                    </div>
                    <div className="recipient-details" style={{marginTop: 40}}>
                        <h3>Recipient Details</h3>
                        <div className="field">
                        <input type="text" placeholder="recipient name" name="recipient_name" {...register('recipient_name')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="Street Name" name="recipient_street_address" {...register('recipient_street_address')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="City" name="recipient_city" {...register('recipient_city')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="Country Code" name="sender_country_code" {...register('sender_country_code')}></input>
                        </div>
                    </div>
                    <div className="order-details" style={{marginTop: 40}}>
                        <h3>Order Details</h3>
                        <div className="field">
                        <input type="text" placeholder="value" name="value" {...register('value')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="despatch date" name="despatch_date" {...register('despatch_date')}></input>
                        </div>
                        <div className="field">
                        <input type="text" placeholder="contents declaration" name="contents_declaration" {...register('contents_declaration')}></input>
                        </div>
                    </div>
                    
                    <div class="field" style={{marginTop: 20}}>
                        <label>Do you require insurance?</label>
                        <select name="insurance_required" {...register('insurance_required')} >
                        <option value={false}>No </option>
                        <option value={true}>Yes</option>
                        </select>
                    </div>
                    
                    
                    <div className="field">
                        <input type="text" placeholder="Tracking Reference" name="tracking_reference" {...register('tracking_reference')}></input>
                    </div>

                    <div className="field">
                        <button className="ui button" type="submit">Submit</button>
                    </div>
                </form>

                { error &&  
                    <Message
                        warning
                        header={error}
                    />
                }

                </div>
            </Container>
        </div>
        
    )
}
