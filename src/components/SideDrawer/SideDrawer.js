import {ListItem} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import React from 'react';
import {scroller} from 'react-scroll'


export const SideDrawer = ({open, onClose}) => {
    const scrollToElement = (el) => {
        scroller.scrollTo(el, {
            duration: 1500,
            delay: 100,
        });
        onClose()
    };
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose()}>
            <List component="nav">
                <ListItem button onClick={() => scrollToElement('featured')}>
                    Event Starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElement('venueinfo')}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => scrollToElement('highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement('location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    )
}