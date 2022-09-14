import React from 'react'

const FormErrorMessage = ({ field, message }) => {
    return (
        <div>
            <div className="help-block with-errors">
                <ul className="list-unstyled">
                    <li style={{color:'red', fontSize:'smaller'}}>
                        {field + ' ' + message}
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default FormErrorMessage