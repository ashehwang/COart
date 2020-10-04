import React from 'react';
import { Link } from 'react-router-dom';

class UserCharsShow extends React.Component {

    render(){

        const { characters, character_ids } = this.props;

        return(
            <div className="user-all-chars-container relative">
                <div className="user-all-chars flex">
                    {character_ids.map( charId => <UserCharShow key={charId} character={characters[charId]} />)}
                </div>
                <div className="user-page-return absolute hover" onClick={() => this.props.history.push(`/user/${this.props.username}`)}>
                    <i className="fas fa-reply"></i> Go Back
                </div>
            </div>
        )
    }
}

class UserCharShow extends React.Component {

    hasWorld(){
        if(!this.props.character) return null;
        if(this.props.character && this.props.character.community) {
            const logo = this.props.character.community.logoUrl ? <img src={this.props.character.community.logoUrl}/> : null ;
            return (
                <Link to={`/world/${this.props.character.community.url}`}>
                    <div className="user-page-world-show flex-center border hover flex absolute">
                        <div className="flex-center">
                        {logo}
                        </div>
                        <div className="char-page-world">
                        <span>Member Of</span> <br /> {this.props.character.community.name}
                        </div>
                    </div>
                </Link>
            );
        } else return null;
    }

    render(){
        const { character } = this.props;

        return(
            <div className="user-char-show-container border flex relative">
                <img src={character.headPhotoUrl} className="small-profile-pic" />
                <Link to={`/character/${character.id}`}>
                    <div className="user-page-profile-detail hover">
                        {character.first_name} {character.last_name}
                    </div>
                </Link>
                {this.hasWorld()}
            </div>
        )
    }
}

export default UserCharsShow;
