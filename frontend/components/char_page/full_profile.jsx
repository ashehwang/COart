import React from 'react';

class FullProfile extends React.Component {

    // renderBio(){
    //     var profileBio = document.getElementById("profile");
    //     var spacedBio = this.props.character.bio.split("\n").join("</br>");
    //     profileBio.innerText = spacedBio;

    //     document.write(spacedBio);
    //     profileBio = profileBio.replace(/\r?\n/g, "<br />");
    //     return profileBio;
    // }

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
    const { character } = this.props;

    return (
      <div className="charform-container">
        <div className="charform-limit">
          <div className="charform-action">
            <h1>{character.first_name} {character.last_name}</h1>
          </div>
          <div className="charform">
            <div className="charform-detail" id="profile">
                {character.bio.split("\n").map( i => <p>{i}</p>)}
            </div>
            <div className="charform-detail charform-files">
              {this.renderHeadPhoto()}
            </div>
            <div className="charform-detail charform-files">
              {this.renderBodyPhoto()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default FullProfile;