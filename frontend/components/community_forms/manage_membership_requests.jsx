import React from 'react';

class ManageMembershipRequests extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {community, characters, membershipRequests, openModal } = this.props;
        return(
            <div>
                <div>Current Applications To {community.name}</div>
                <div className="flex shadow">
                    {this.props.community.membership_request_ids.map(id => 
                    <MembershipRequestShow 
                        key={id} 
                        request={membershipRequests[id]} 
                        character={characters[membershipRequests[id].character_id]} 
                        openModal={openModal}
                    />)}
                </div>
            </div>
        )
    }
}

class MembershipRequestShow extends ManageMembershipRequests {
    constructor(props) {
        super(props)
    }

    render(){
        const {character, request, openModal} = this.props;
        if (!character) return <div>No Character</div>

        return(
            <div className="applicant-show-container">
                <div className="applicant-show-photo"><img src={character.headPhotoUrl}/></div>
                <div className="applicant-show-char">{character.first_name} {character.last_name}</div>
                <div className="applicant-show-creator">Creator: {character.creator.nick_name} <span>@{character.creator.user_name}</span></div>
                <div className="applicant-show-see hover" onClick={() => openModal('showchar', character)}>View Full Profile</div>
                <div className="applicant-show-buttons flex">
                    <div className="applicant-show-button">Accept</div>
                    <div className="applicant-show-button">Decline</div>
                </div>
            </div>
        )
    }

}



export default ManageMembershipRequests;