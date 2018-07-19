import React, { Component } from 'react';

class Chat1 extends Component {
    /** Constructor */
    constructor(props) {
        super(props);
        this.state = {
            path: 'chat1',
            userName: ''
        }
    }

    /** Submit Function */
    submit() {
        let result = this.state;
        result.path = '/chat2';

        this.props.initFn(() => {
            return result;
        });
    }

    /** Essential Component */
    changeValue(value) {
        this.setState({
            userName: value
        })
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <h3>請輸入名稱:</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea
                                id="icon_prefix2"
                                value={this.state.userName}
                                className="materialize-textarea"
                                onChange={(e) => this.changeValue(e.target.value)}></textarea>
                            <label htmlFor="icon_prefix2">User Name</label>
                        </div>
                        <div className="input-field col s6">
                            <a
                                className="waves-effect waves-light btn"
                                onClick={() => this.submit()}>
                                <i className="material-icons right">send</i>button</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Chat1;