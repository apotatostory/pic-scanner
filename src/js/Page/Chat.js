import React, {Component} from 'react';

class Chat extends Component {
  /** Constructor */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /** Submit Function */
  submit() {
    console.log(this.refs.userName.value);
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
              <textarea id="icon_prefix2" ref="userName" className="materialize-textarea"></textarea>
              <label htmlFor="icon_prefix2">User Name</label>
            </div>
            <div className="input-field col s6">
              <a className="waves-effect waves-light btn" onClick={this.submit.bind(this)}>
                <i className="material-icons right">send</i>button</a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Chat;