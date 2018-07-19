import React, { Component } from 'react';
import Chat1 from './Chat1';
import Chat2 from './Chat2';

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: { path: '/chat1' }
        }
    }

    /** Setup initData */
    fetchInitData(val) {
        this.setState({
            data: val
        });
    }

    /**Switch view */
    showView(path) {
        let result = {
            '/chat1': <Chat1 initFn={value => this.fetchInitData(value())} initData={this.state.data} />,
            '/chat2': <Chat2 initFn={value => this.fetchInitData(value())} initData={this.state.data} />
        }
        return result[path] ? result[path] : result['/chat1'];
    }

    render() {
        return (
            <div>
                {this.showView(this.state.data.path)}
            </div>
        );
    }
}

export default Chat;