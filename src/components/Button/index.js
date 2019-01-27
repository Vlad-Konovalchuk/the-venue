import Button from "@material-ui/core/Button";
import React from 'react';
import ticket_img from '../../assets/icons/ticket.png';

export const DefaultButton = ({link, bck, color, text}) => {
    return (
        <Button
            href={link}
            variant="contained"
            size="small"
            style={{
                background: bck,
                color: color
            }}
        >
            <img
                className="iconImage"
                src={ticket_img}/>
            {text}
        </Button>
    )
};
