import React from 'react';
import './Pie.css';

const Pie = (props) => (
        // empty brackets defaults to div tag
        <>  
                <td>{ props.testData.nameOfPie }</td>
                <td>{ props.testData.baseOfPie }</td>
                <td>{ props.testData.crust }</td>
                <td>{ props.testData.timeToBake }</td>
                <td>{ props.testData.servings }</td>
                <td>{ props.testData.rating }</td>
        </>
    )

export default Pie;