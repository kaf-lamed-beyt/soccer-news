import React from 'react'
import PropTypes from 'prop-types'
import cardStyle from "./style/card.module.css"
import { BiPlayCircle } from "react-icons/bi"

const Card = ({ children }) => {
    return (
        <div className={cardStyle.root}>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired
}

export default Card
