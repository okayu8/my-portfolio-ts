import * as React from 'react';

interface IProps {
    text: string;
}

interface IState {
    testNum: number
}

export default class TsTest extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            testNum: 1
        };

        setInterval(
            () => this.countUp(),
            1000
        );
    }

    public render() {
        return (
            <React.Fragment>
                {this.props.text}
                <br />
                {this.state.testNum}
            </React.Fragment>
        )
    }

    private countUp() {
        this.setState({
            testNum: this.state.testNum + 1
        });
    }
}
