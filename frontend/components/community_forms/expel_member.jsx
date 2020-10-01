import React from 'react';
import { withRouter } from 'react-router-dom';

class ExpelMember extends React.Component {
    constructor(props){
        super(props);
        this.handleExpel = this.handleExpel.bind(this)
    }

    handleExpel(){
        this.props.deleteMembership(this.props.character.membership_id)
            .then(res => {
                if (res.type === "REMOVE_MEMBERSHIP") {
                    this.props.closeModal();
                    this.props.history.push(`/world/${res.membership.url}`);
                }
            });
    }

    render(){

        const { closeModal, character } = this.props;

        return(
            <div className="delete-char-container relative">
                <i className="fas fa-exclamation-circle absolute"></i><h1>You're about to Expel {character.first_name}</h1>
                <div>Are you sure? Please think twice before making a decision.</div>
                <div className="hover delete-char-button flex-center" onClick={() => closeModal()}>I'll keep this Character.</div>
                <div className="hover delete-char-button2 flex-center" onClick={this.handleExpel}>I have made up my mind.</div>
            </div>
        )
    }
}

export default withRouter(ExpelMember);