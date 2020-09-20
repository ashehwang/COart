import React from "react";

class EditCharForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.character;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBodyFile = this.handleBodyFile.bind(this);
    this.handleHeadFile = this.handleHeadFile.bind(this);
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("character[first_name]", this.state.first_name);
    formData.append("character[last_name]", this.state.last_name);
    formData.append("character[bio]", this.state.bio);
    if (this.state.head_photoFile) {
      formData.append("character[head_photo]", this.state.head_photoFile);
    }
    if (this.state.body_photoFile) {
      formData.append("character[body_photo]", this.state.body_photoFile);
    }

    if (this.state.removeHeadPhoto) {
        formData.append("[remove_head_photo]", true)
    }
    if (this.state.removeBodyPhoto) {
        formData.append("[remove_body_photo]", true);
    }
    this.props.updateChar(formData, this.state.id).then((res) => {
      if (res.type === "RECEIVE_CHAR") {
        this.setState({ body: "" });
        this.props.history.push(`/character/${this.state.id}`)
      }
    });
  }

  updateField(val) {
    return (e) => this.setState({ [val]: e.currentTarget.value });
  }

  handleHeadFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ head_photoFile: file, headPhotoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleBodyFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ body_photoFile: file, bodyPhotoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  renderHeadPhoto(){
      if (this.state.headPhotoUrl) {
        return (
          <div>
            <img className="pic-preview2" src={this.state.headPhotoUrl} />
            <label className="hover" onClick={() => this.setState({ headPhotoUrl: null, removeHeadPhoto: true })}>
              Remove Profile Picture
            </label>
          </div>
        );
      } else return null;
  }

  renderBodyPhoto(){
      if (this.state.bodyPhotoUrl) {
        return (
          <div>
            <img className="pic-preview2" src={this.state.bodyPhotoUrl} />
            <label className="hover" onClick={() => this.setState({ bodyPhotoUrl: null, removeBodyPhoto: true })}>Remove Body Picture</label>
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
            <h1>Edit {character.first_name} {character.last_name}</h1>
          </div>
          <div className="charform">
            <div className="charform-detail">
              <label>First Name </label>
              <input
                type="text"
                required
                placeholder="Required"
                value={this.state.first_name}
                onChange={this.updateField("first_name")}
              />
            </div>
            <div className="charform-detail">
              <label>Last Name </label>
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.updateField("last_name")}
              />
            </div>
            <div className="charform-detail">
              <textarea
                placeholder="Bio and characteristics. Background story. Anything you want people to know of your character, write down here. Be as crazy as you want!"
                value={this.state.bio}
                cols="50"
                rows="5"
                onChange={this.updateField("bio")}
              />
            </div>
            <div className="charform-detail charform-files">
              <label htmlFor="head-file-upload" className="hover">
                Add Profile Picture
                <input
                  type="file"
                  id="head-file-upload"
                  className="hidden"
                  onChange={this.handleHeadFile}
                />
              </label>
              {this.renderHeadPhoto()}
            </div>
            <div className="charform-detail charform-files">
              <label htmlFor="body-file-upload" className="hover">
                Add Body Picture
                <input
                  type="file"
                  id="body-file-upload"
                  className="hidden"
                  onChange={this.handleBodyFile}
                />
              </label>
              {this.renderBodyPhoto()}
            </div>
            <div
              className="charform-submit hover flex-center"
              onClick={this.handleSubmit}
            >
              Edit {character.first_name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCharForm;
