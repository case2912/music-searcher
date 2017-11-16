import { AppBar, Toolbar, Typography } from "material-ui";
import * as React from "react";

export default class Header extends React.Component {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <AppBar position="static" color="default" style={{ position: "fixed" }}>
                <Toolbar>
                    <Typography type="title" color="inherit">
                        Look up a MusicArtist for Apple Music
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
