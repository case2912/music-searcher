import * as React from "react";
import Item from "./Item";

class Itemlist extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                {Object.keys(this.props.json).length ?
                    (this.props.json as any).results.map((result: any) => {
                        return (
                            <Item {...result} key={result.trackId} />
                        );
                    })
                    : null}
            </div>
        );
    }
}
export default Itemlist;
