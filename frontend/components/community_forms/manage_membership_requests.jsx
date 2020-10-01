import React from 'react';
import { Link } from 'react-router-dom';

class ManageMembershipRequests extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { currentUser, community, characters, membershipRequests, openModal, deleteMembershipRequest, createMembership, loggedIn } = this.props;
        if (!membershipRequests) return <div className="warning"> There Is No Current Membership Requests</div>
        if (!characters) return <div className="warning"> no characters </div>
        return(
            <div>
                <div className="applicant-title">Current Applications To {community.name}</div>
                <div className="applicant-list flex">
                    {community.membership_request_ids.map(id => 
                    <MembershipRequestShow 
                        key={id} 
                        requestId={id}
                        character={characters[membershipRequests[id].character_id]} 
                        openModal={openModal}
                        createMembership={createMembership} 
                        deleteMembershipRequest={deleteMembershipRequest} 
                        communityId={community.id}
                        adminId={community.admin_id}
                        currentUser={currentUser} 
                        loggedIn={loggedIn}
                    />)}
                </div>
            </div>
        )
    }
}

class MembershipRequestShow extends ManageMembershipRequests {
    constructor(props) {
        super(props)
        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
    }

    handleAccept(){
        this.props.createMembership({character_id: this.props.character.id, community_id: this.props.communityId });
        this.props.deleteMembershipRequest(this.props.requestId)
    }

    handleDecline(){
        this.props.deleteMembershipRequest(this.props.requestId);
    }

    renderButtons(){

        const { adminId, currentUser, loggedIn } = this.props;

        if (loggedIn && adminId === currentUser.id) {
            return (
                <div className="applicant-show-buttons flex">
                    <div className="applicant-show-button hover" onClick={this.handleAccept}>Accept</div>
                    <div className="applicant-show-button applicant-show-button2 hover" onClick={this.handleDecline}>Decline</div>
                </div>
            )
        } else return null;
    }

    render(){
        const {character, openModal} = this.props;
        if (!character) return <div>No Character</div>

        return(
            <div className="applicant-show-container">
                <div className="applicant-show-photo flex-center"><img src={character.headPhotoUrl}/></div>
                <Link to={`/character/${character.id}`}><div className="applicant-show-char hover">{character.first_name} {character.last_name}</div></Link>
                <div className="applicant-show-creator">Creator: {character.creator.nick_name} <span>@{character.creator.user_name}</span></div>
                <div className="applicant-show-see hover" onClick={() => openModal('showchar', character)}>View Full Profile</div>
                {this.renderButtons()}
                {/* <div className="applicant-show-buttons flex">
                    <div className="applicant-show-button hover" onClick={this.handleAccept}>Accept</div>
                    <div className="applicant-show-button applicant-show-button2 hover" onClick={this.handleDecline}>Decline</div>
                </div> */}
            </div>
        )
    }

}

export default ManageMembershipRequests;