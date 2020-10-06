import React from 'react';
import { Link } from 'react-router-dom';

class ShowMembers extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { community, characters, openModal, currentUser, loggedIn } = this.props;
        return(
            <div>
                <div className="applicant-title">Current Members Of {community.name}</div>
                <div className="applicant-list flex">
                    {community.member_ids.map(id => 
                    <MemberShow 
                        key={id} 
                        character={characters[id]} 
                        openModal={openModal}
                        adminId={community.admin_id} 
                        currentUser={currentUser} 
                        loggedIn={loggedIn}
                    />)}
                </div>
            </div>
        )
    }
}

class MemberShow extends ShowMembers {

    constructor(props) {
        super(props)
    }

    renderButtons(){

        const { adminId, currentUser, openModal, character, loggedIn } = this.props;

        if (loggedIn && adminId === currentUser.id) {
            return <div className="applicant-show-see hover" onClick={() => openModal('expel', character)}>Expel</div>
        } else return null;
    }

    render(){
        const {character, openModal} = this.props;
        if (!character) return <div>No Character</div>

        return(
            <div className="applicant-show-container">
                <div className="applicant-show-photo flex-center"><img src={character.headPhotoUrl}/></div>
                <Link to={`/character/${character.id}`}><div className="applicant-show-char hover">{character.first_name} {character.last_name}</div></Link>
                <div className="applicant-show-creator"><Link to={`/user/${character.creator.user_name}`}>Creator: {character.creator.nick_name} </Link><span>@{character.creator.user_name}</span></div>
                <div className="applicant-show-see hover" onClick={() => openModal('showchar', character)}>View Full Profile</div>
                {this.renderButtons()}
            </div>
        )
    }

}

export default ShowMembers;