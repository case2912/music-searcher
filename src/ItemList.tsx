import * as React from "react";
export default class Itemlist extends React.Component<{ json: {} }, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div>
                {Object.keys(this.props.json).length ?
                    (this.props.json as any).results.map((result: any) => {
                        return (
                            <div key={result.trackId}>
                                <p>{result.artistName}</p>
                                <p>{result.trackName}</p>
                                <video src={result.previewUrl} controls width="400" height="300" />
                            </div>
                        );
                    })
                    : null}
            </div>
        );
    }
}
