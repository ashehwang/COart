import React from 'react';

class ExpelMember extends React.Component {
    constructor(props){
        super(props);
    }

    render(){

        const { closeModal, character, deleteMembership } = this.props;

        return(
            <div className="delete-char-container relative">
                <i className="fas fa-exclamation-circle absolute"></i><h1>You're about to Expel {character.first_name}</h1>
                <div>Are you sure? Please be prudent in making a decision.</div>
                <div className="hover delete-char-button flex-center" onClick={() => closeModal()}>I'll keep this Character.</div>
                <div className="hover delete-char-button flex-center" onClick={() => deleteMembership(character.membership_id).then(closeModal())}>I have made up my mind.</div>
            </div>
        )
    }
}

export default ExpelMember;