import { Button, Card, CardActions, CardContent, Typography } from "material-ui";
import { AddShoppingCart } from "material-ui-icons";
import * as React from "react";
class Item extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <Card raised={true} style={{ width: "400px", margin: "10px 0" }}>
                <CardContent style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <Typography type="headline">{this.props.trackName}</Typography>
                        <Typography type="body1">{this.props.artistName}</Typography>
                        <Typography type="body1" style={{ color: "gray" }}>release:&nbsp;{this.props.releaseDate}</Typography>
                    </div>
                </CardContent>
                <video src={this.props.previewUrl} controls width="400" />
                <CardActions>
                    <Button dense raised={true} onClick={this.onClick.bind(this)}><AddShoppingCart /></Button>
                </CardActions>
            </Card>
        );
    }
    private onClick() {
        window.open(this.props.trackViewUrl);
    }
}
export default Item;
