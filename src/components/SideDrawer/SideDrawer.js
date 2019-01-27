import {ListItem} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import React from 'react';


export const SideDrawer = ({open, onClose}) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => onClose()}>
            <List component="nav">
                <ListItem button onClick={() => console.log('Featured')}>
                    Event Starts in
                </ListItem>
                <ListItem button onClick={() => console.log(' Venue NFO')}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => console.log(' Highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => console.log('Pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => console.log('Location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    )
}