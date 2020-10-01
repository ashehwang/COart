import React from 'react';
import {withRouter} from 'react-router-dom';

class EditCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.community;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoFile = this.handleLogoFile.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("community[name]", this.state.name);
    formData.append("community[intro]", this.state.intro);
    formData.append("community[detail]", this.state.detail);
    formData.append("community[recruiting]", this.state.recruiting);
    if (this.state.logoFile) {
      formData.append("community[logo]", this.state.logoFile);
    }
    if (this.state.imageFile) {
      formData.append("community[image]", this.state.imageFile);
    }
    this.props.updateCommunity(formData, this.props.community.id ).then((res) => {
      if (res.type === "RECEIVE_COMMUNITY") {
        this.setState({ body: "" });
        this.props.history.push(`/world/${this.props.community.url}`);
        this.props.closeModal();
      }
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleLogoFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ logoFile: file, logoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleImageFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const logoPreview = this.state.logoUrl ? (
      <img className="pic-preview5" src={this.state.logoUrl} />
    ) : (
      <p>No Logo Added</p>
    );
    const imagePreview = this.state.imageUrl ? (
      <img className="pic-preview5" src={this.state.imageUrl} />
    ) : null;
    const recruiting = this.state.recruiting === "active" ? "edit-new-member" : "";
    const open = this.state.recruiting === "active" ? "Will Be Open For New Members" : "Accept New Members";
    
    const notRecruiting = this.state.recruiting === "inactive" ? "edit-new-member" : "";
    const closed = this.state.recruiting === "inactive" ? "Will Be Closed For Applications" : "Close All Applications"

    const { community } = this.props;

    return (
      <div className="edit-world-container relative">
        <div className="edit-world-close-button absolute hover" onClick={() => this.props.closeModal()}><i className="far fa-times-circle"></i></div>
        <div className="charform-limit">
          <div className="charform-action border">
            <h1>Edit {community.name}</h1>
          </div>
          <div className="communityform border relative">
            <div className="communityform-logo border absolute flex-center">
              {logoPreview}
            </div>
            <div className="communityform-detail flex">
              <label>Name / Title</label>
              <input
                type="text"
                required
                placeholder="Required"
                value={this.state.name}
                onChange={this.update("name")}
              />
            </div>
            <div className="communityform-detail flex">
              <label>World Url</label>
              <span>{this.state.url}</span>
            </div>
            <div className="communityform-detail flex">
              <label>Introduction</label>
              <input
                type="text"
                placeholder="A short description of the world"
                value={this.state.intro}
                onChange={this.update("intro")}
              />
            </div>
            <div className="communityform-detail flex">
              <label>Applications</label>
              <div className={`edit-world-members hover flex-center ${recruiting}`} onClick={() => this.setState({ recruiting: "active" })}>
                {open}
              </div>
              <div className={`edit-world-members hover flex-center ${notRecruiting}`} onClick={() => this.setState({ recruiting: "inactive" })}>
                {closed}
              </div>
            </div>
            <div className="communityform-detail">
              {imagePreview}
              {/* <label>Description of the World & Its Story: </label> */}
              <textarea
                placeholder="Provide a story and context for the characters to live in. It could be a description of a fantasy world, or a scenario that other characters can participate in."
                value={this.state.detail}
                cols="50"
                rows="20"
                onChange={this.update("detail")}
              />
            </div>
            <div className="communityform-addfiles flex">
              <div className="communityform-detail communityform-files">
                <label htmlFor="head-file-upload" className="hover">
                  Logo
                  <input
                    type="file"
                    id="head-file-upload"
                    className="hidden"
                    onChange={this.handleLogoFile}
                  />
                </label>
              </div>
              <div className="communityform-detail communityform-files">
                <label htmlFor="body-file-upload" className="hover">
                  Image
                  <input
                    type="file"
                    id="body-file-upload"
                    className="hidden"
                    onChange={this.handleImageFile}
                  />
                </label>
              </div>
            </div>
            <div
              className="communityform-submit hover flex-center"
              onClick={this.handleSubmit}
            >
              Edit {community.name}
            </div>
          </div>
        </div>
      </div>
    );
  }

//   render() {
//     console.log(this.state);
//     const { community } = this.props;
//     return <div>Edit YOUR WORLD {community.name}</div>;
//   }
}

export default withRouter(EditCommunity);