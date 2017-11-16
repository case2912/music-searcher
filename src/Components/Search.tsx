import { Button, FormControl, Input, InputLabel } from "material-ui";
import { FindInPage } from "material-ui-icons";
import * as React from "react";
class Search extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div id="Search" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", transitionDuration: "0.5s" }}>
                <FormControl >
                    <InputLabel htmlFor="custom--input" >ArtistName</InputLabel>
                    <Input id="custom--input" onChange={this.onChange.bind(this)} />
                </FormControl>
                <div style={{ width: "10px" }}>
                </div>
                <Button color="primary" raised={true} onClick={this.onClick.bind(this)}>
                    <FindInPage />
                </Button>
            </div>
        );
    }
    private async onClick() {
        if (this.props.value !== "") {
            const input = document.getElementById("custom--input") as HTMLInputElement;
            const search = document.getElementById("Search") as HTMLInputElement;
            search.style.height = "10vh";
            input.placeholder = input.value;
            input.value = "";
            const response = await fetch(`https://itunes.apple.com/search?term=${this.props.value}&media=music&entity=musicVideo&country=jp&lang=ja_jp&limit=20`);
            const json = await response.json();
            this.props.dispatch({ type: "SEARCH", json });
        }

    }
    private onChange(event: any) {
        this.props.dispatch({ type: "CHANGE", value: event.target.value });
    }
}
export default Search;
