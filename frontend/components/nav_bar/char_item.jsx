import React from 'react';

class CharacterItem extends React.Component {

    render(){
        return (
            <div className="nav-char-item flex-diag">
                <div>
                    <img src={this.props.character.headPhotoUrl} className="smaller-profile-pic" />
                </div>
                <div>
                    {this.props.character.first_name} {this.props.character.last_name}
                </div>
            </div>
        )
    }
}

export default CharacterItem;