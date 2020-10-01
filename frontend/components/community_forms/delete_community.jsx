import React from 'react';
import { withRouter } from 'react-router-dom';

class DeleteCommunity extends React.Component {
    constructor(props){
        super(props);
        this.handleApocalypse = this.handleApocalypse.bind(this);
    }

    handleApocalypse(){
        this.props.deleteCommunity(this.props.community.id)
            .then(res => {
                if (res.type === "REMOVE_COMMUNITY") {
                    this.props.closeModal();
                    this.props.history.push(`/worlds`);
                }
            });
    }

    render(){

        const { closeModal, community } = this.props;

        return(
            <div className="delete-char-container relative">
                <i className="fas fa-exclamation-circle absolute"></i><h1>You're about to destroy {community.name}</h1>
                <div className="flex-center">Are you absolutely sure? Please be prudent in making a decision.</div>
                <div className="hover delete-char-button flex-center" onClick={() => closeModal()}>I'll keep this World alive.</div>
                <div className="hover delete-char-button2 flex-center" onClick={this.handleApocalypse}>APOCALYPSE!!</div>
            </div>
        )
    }
}

export default withRouter(DeleteCommunity);