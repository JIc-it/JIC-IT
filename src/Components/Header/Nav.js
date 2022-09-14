import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../Common/Context'
import { Link } from 'react-router-dom'


const Nav = ({ data }) => {
    const [dropdownVisible, setdropdownVisible] = useState(false)

    // console.log({ data })
    return (

        <li>
            <Link to={`/service-details/${data.heading}`}><span>{data.heading}</span></Link>
        </li>




    )
}

export default Nav