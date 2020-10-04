import React from 'react';
import { times } from 'lodash';

class CreateMessage extends React.Component {

    constructor(props){
        super(props);
        this.state = { body: "", user_id: null, sender_id: null };
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateBody(e){
        this.setState({ body: e.currentTarget.value });
    }

    handleSubmit(){

        const {user, currentUser, createMessage, closeModal } = this.props;

        this.setState({ sender_id: currentUser.id, user_id: user.id}, () => {
            createMessage(this.state)
                .then(res => {
                    if (res.type === "MESSAGE_SENT") {
                        closeModal();
                    }
                })
        })
    }

    render(){
        return(
            <div className="create-message-container relative">
                <i className="far fa-times-circle absolute hover" onClick={() => this.props.closeModal()}></i>
                <div className="create-message-prompt">
                    <i className="fas fa-paper-plane"></i> {this.props.user.nick_name} <span>@{this.props.user.user_name}</span>
                </div>
                <div className="create-message-text">
                    <textarea cols="30" rows="5" onChange={this.updateBody} value={this.state.body}></textarea>
                </div>
                <div className="create-message-submit hover" onClick={this.handleSubmit}>
                    Send
                </div>
            </div>
        )
    }
}

export default CreateMessage;