import * as React from 'react';
import {module as mainModule} from "./storeModules/mainModule";
import {MainModule} from "./storeModules/mainModule/module";
import {connectStore} from "redux-box";


interface Props {
    mainModule?: MainModule
}


@connectStore({
    mainModule: mainModule
})
export class App extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.triggerEvent = this.triggerEvent.bind(this);
    }

    triggerEvent() {
        this.props.mainModule.switchActive();
    }

    render() {

        const className = this.props.mainModule.active ? "button buttonSelected" : "button";
        const buttonText = this.props.mainModule.active ? "deselect" : "select";

        return <div id="app">
            React/Redux Boilerplate application.
            <br/>
            Tech stack:
            <ul>
                <li>
                    React
                </li>
                <li>
                    Redux
                    <ul>
                        <li>
                            Redux-Box
                        </li>
                    </ul>
                </li>
                <li>
                    Gulp
                </li>
                <li>
                    Webpack
                </li>
                <li>
                    Typescript
                </li>
            </ul>

            <div className={className} onClick={this.triggerEvent}>
                {buttonText}
            </div>
        </div>;
    }
}
