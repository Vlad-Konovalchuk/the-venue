import React from 'react';
import {AppBar, Toolbar, Menu, Icon, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export class Header extends React.PureComponent {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: '#2f2f2f',
                    boxShadow: 'none',
                    padding: '10px 0'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>
                    <IconButton>
                        <MenuIcon
                            aria-label="Menu"
                            color="inherit"
                            onClick={() => console.log("Open")}
                        />
                    </IconButton>

                </Toolbar>
            </AppBar>
        )
    }
}