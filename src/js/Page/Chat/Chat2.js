import React, { Component } from 'react';

class Chat2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.initData
        }
    }
    render() {
        return (
            <div className="row">
                {/* 室窗 */}
                <div className="col s9 m9 l9 xl9" >
                    <div className="card ">
                        <div className="card-content green lighten-4" style={{ height: '80vh' }}>
                            <span className="blue-text"></span>
                        </div>
                        <div className="card-action blue lighten-5">
                            <span>card-action</span>
                        </div>
                    </div>
                </div>

                {/* 線上使用者 */}
                <div className="col s3 m3 l3 xl3">
                    <div className="card-panel teal lighten-4" style={{ height: '80vh' }}>
                        <span className="blue-text">{this.state.data.userName}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat2;