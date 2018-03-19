import React, { Component } from 'react';

import AppComponent from '../../Components/App/App';

class App extends Component {
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/hi');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div id='app'>
                <AppComponent/>
                <p className="App-intro">{this.state.response}</p>
            </div>
        );
    }
}

export default App;