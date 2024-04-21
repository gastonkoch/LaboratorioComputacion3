import React from 'react'
import { useState } from 'react'
import PropTypes from "prop-types"

const Table = ({ companies }) => {
    const [companiesComp, setCompaniesComp] = useState(companies)
    let cantCompanies = companiesComp.length;
    let result = 0;
    const amount = companiesComp.reduce((accumulator, incomeItem) => {
        return accumulator + incomeItem.income;
      }, 0);
    result = amount / cantCompanies
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {companiesComp.map((comp, index) => (
                        <tr key={index}>
                            <td>{comp.brand}</td>
                            <td>{comp.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Promedio: {result}</p>
        </>
    )
}

export default Table


Table.PropTypes = {
    companies : PropTypes.array
}
