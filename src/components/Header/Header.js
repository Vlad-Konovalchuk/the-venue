import React from 'react';
import {AppBar, Toolbar, Menu, Icon, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {SideDrawer} from "../SideDrawer/SideDrawer";

export class Header extends React.PureComponent {
    state = {
        isDrawerOpen: false,
        isHeaderShow: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({isHeaderShow: true})
        } else {
            this.setState({isHeaderShow: false})
        }
    };
    toggleDrawerView = () => {
        this.setState({isDrawerOpen: !this.state.isDrawerOpen})
    };

    render() {
        const {isDrawerOpen, isHeaderShow} = this.state;
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: isHeaderShow ? '#2f2f2f' : "transparent",
                    color: '#fff',
                    boxShadow: 'none',
                    padding: '10px 0'
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">The Venue</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>
                    <IconButton color="inherit">
                        <MenuIcon
                            aria-label="Menu"
                            color="inherit"
                            onClick={this.toggleDrawerView}
                        />
                    </IconButton>
                    <SideDrawer
                        open={isDrawerOpen}
                        onClose={this.toggleDrawerView}
                    />
                </Toolbar>
            </AppBar>
        )
    }
}