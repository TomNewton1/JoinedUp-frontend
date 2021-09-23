import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios'
import {Container} from "semantic-ui-react";

export default function CompletedOrder() {

    const {id} = useParams();

    const [isLoading, setLoading] = useState(true);
    const [order, setOrder] = useState();

    useEffect(() => {
        axios.get(`/orders/${id}`)
        .then(res => {
            console.log(res.data)
            setOrder(res.data)
            setLoading(false);
        })
        .catch(err=>{
            console.log(err)
        })

    }, [id])

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return (
        <div>
            <Container style={{marginTop: 40}}>
                <h3>Your order has been completed!</h3>
                <b>Order completed on: </b>{order.accepted_at}
                <div style={{marginTop: 40}}>

                    <h3>Order Details</h3>
                    <table class="ui celled table">
                        <thead>
                            <tr><th>Sender Details</th>
                            <th></th>
                        </tr></thead>
                        <tbody>
                            <tr>
                            <td data-label="Name">Name</td>
                            <td data-label="Age">{order.package.sender.name}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Address</td>
                            <td data-label="Age">{order.package.sender.street_address}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">City</td>
                            <td data-label="Age">{order.package.sender.city}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Country Code</td>
                            <td data-label="Age">{order.package.sender.country_code}</td>
                            </tr>
                        </tbody>

                        <thead>
                            <tr><th>Recipient Details</th>
                            <th></th>
                        </tr></thead>
                        <tbody>
                            <tr>
                            <td data-label="Name">Name</td>
                            <td data-label="Age">{order.package.recipient.name}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Address</td>
                            <td data-label="Age">{order.package.recipient.street_address}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">City</td>
                            <td data-label="Age">{order.package.recipient.city}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Country Code</td>
                            <td data-label="Age">{order.package.recipient.country_code}</td>
                            </tr>
                        </tbody>
            
                        <thead>
                            <tr><th>Order Details</th>
                            <th></th>
                        </tr></thead>
                        <tbody>
                            <tr>
                            <td data-label="Name">Contents</td>
                            <td data-label="Age">{order.package.order.contents_declaration}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Value</td>
                            <td data-label="Age">{order.value}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Despatch Date</td>
                            <td data-label="Age">{order.package.order.despatch_date}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Insurance Required</td>
                            <td data-label="Age">{order.package.order.insurance_required}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Tracking Reference</td>
                            <td data-label="Age">{order.package.order.tracking_reference}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Order URL</td>
                            <td data-label="Age">{order.order_url}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Insurance Provided</td>
                            <td data-label="Age">{order.insurance_provided ? "yes" : "no"}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">Total Insurance Charge</td>
                            <td data-label="Age">{order.total_insurance_charge}</td>
                            </tr>
                            <tr>
                            <td data-label="Name">IPT tax (included in charge)</td>
                            <td data-label="Age">{order.ipt_included_in_charge}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    )
}
