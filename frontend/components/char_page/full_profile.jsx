import React from 'react';
import { RECEIVE_ALL_CHARS } from '../../actions/char_actions';

class FullProfile extends React.Component {

    // renderBio(){
    //     var profileBio = document.getElementById("profile");
    //     var spacedBio = this.props.character.bio.split("\n").join("</br>");
    //     profileBio.innerText = spacedBio;

    //     document.write(spacedBio);
    //     profileBio = profileBio.replace(/\r?\n/g, "<br />");
    //     return profileBio;
    // }

    renderBio(){
        if (this.props.character.bio) {
            return(
                <div className="full-profile-bio">
                    {this.props.character.bio.split("\n").map( i => <><p>{i}</p><br/></>)}
                </div>
            )
        } else return null;
    }

    renderPhotos(){
        if (this.props.character.headPhotoUrl && this.props.character.bodyPhotoUrl){
            return(
                <div className="full-profile-photo">
                    <img className="pic-preview3" src={this.props.character.bodyPhotoUrl} />
                    <img className="pic-preview3" src={this.props.character.headPhotoUrl} />
                </div>
            )
        } else if (this.props.character.headPhotoUrl) {
            return (
                <div className="full-profile-photo">
                    <img className="pic-preview3" src={this.props.character.headPhotoUrl} />
                </div>
            )
        } else if (this.props.character.bodyPhotoUrl) {
            return(
                <div className="full-profile-photo">
                    <img className="pic-preview3" src={this.props.character.bodyPhotoUrl} />
                </div>
            )
        } else return null;
    }

  renderHeadPhoto(){
      if (this.props.character.headPhotoUrl) {
        return (
          <div>
            <img className="pic-preview2" src={this.props.character.headPhotoUrl} />
          </div>
        );
      } else return null;
    }

  renderBodyPhoto(){
      if (this.props.character.bodyPhotoUrl) {
        return (
          <div>
            <img className="pic-preview2" src={this.props.character.bodyPhotoUrl} />
          </div>
        );
      } else return null;
    }

  render() {
    const { character, closeModal } = this.props;

    return (
        <div className="full-profile-container relative">
            <i className="far fa-times-circle absolute hover" onClick={() => closeModal()}></i>
            <div className="full-profile-name flex-center">
                {character.first_name} {character.last_name}
            </div>
            <div className="full-profile-scroll">
                {this.renderBio()}
                {this.renderPhotos()}
            </div>
        </div>
    );
  }
}


export default FullProfile;