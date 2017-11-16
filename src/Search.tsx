import { Button, FormControl, Input, InputLabel } from "material-ui";
import { FindInPage } from "material-ui-icons";
import * as React from "react";
export default class Search extends React.Component<{ value: string }, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <FormControl >
                    <InputLabel htmlFor="custom--input" >ArtistName</InputLabel>
                    <Input id="custom--input" onChange={this.onChange.bind(this)} />
                </FormControl>
                <div style={{ width: "10px" }}>
                </div>
                <Button raised={true} onClick={this.onClick.bind(this)}>
                    <FindInPage />
                </Button>
            </div>
        );
    }
    private async onClick() {
        const response = await fetch(`https://itunes.apple.com/search?term=${this.props.value}&media=music&entity=musicVideo&country=jp&lang=ja_jp&limit=20`);
        const json = await response.json();
        this.setState({ json });
    }
    private onChange(event: any) {
        this.setState({ value: event.target.value });
    }
}
