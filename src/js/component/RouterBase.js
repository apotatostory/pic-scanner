import { Component } from 'react';

/**
 * 本想做成全部router都要繼承的component
 * 但還沒想好怎麼做
 */
class RouterBase extends Component {
    constructor(props) {
        console.log('===RouterBase!');
        super(props)
        this.state = {
            path: '',
            data: '',
        };
    }
}

export default RouterBase;