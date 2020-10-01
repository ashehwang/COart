import React from 'react';

class CreateCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", intro: "", detail: "", url: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoFile = this.handleLogoFile.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("community[name]", this.state.name);
    formData.append("community[intro]", this.state.intro);
    formData.append("community[detail]", this.state.detail);
    formData.append("community[url]", this.state.url);
    if (this.state.logoFile) {
      formData.append("community[logo]", this.state.logoFile);
    }
    if (this.state.imageFile) {
      formData.append("community[image]", this.state.imageFile);
    }
    this.props.createCommunity(formData).then((res) => {
      if (res.type === "RECEIVE_COMMUNITY") {
        this.setState({ body: "" });
        this.props.history.push(`/worlds`);
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
    const logoPreview = this.state.logoUrl ? <img className="pic-preview5" src={this.state.logoUrl} /> : <p>No Logo Added</p>;
    const imagePreview = this.state.imageUrl ? <img className="pic-preview5" src={this.state.imageUrl} /> : null;

    return (
      <div className="create-community-container">
        <div className="charform-limit">
          <div className="charform-action border">
            <h1>Create Worlds</h1>
            <br />
            <h3>
              Generate a world that yours and other people's characters breathe,
              interact, and live in. It's a context that you can provide for
              your stories to be consistent. We assume that characters that live
              in the same world can interact with each other to collaborate on
              an ongoing story. <br />
              <strong> One character can only belong to one world.</strong> But
              the a user can place many of her/his characters in the same world.{" "}
            </h3>
            <br />
            <h3>
              Ideas are endless. The 'world' can be for characters who are stuck
              in a shelter in apocalypse. Or they could be living here, now, in
              certain city or town. Ever dreamt of attending Hogwarts, anyone?
              You can be J. R. R. Tolkien and create a full fantasy world with
              different races and magic. You can use other games, books, animes
              as a reference and have your characters be incorporated into that
              parallel world.{" "}
            </h3>
            <br />
            <h3>
              As admin you'll have the opportunity to select which characters
              you want to invite to the world. I assume you'd wouldn't want SF
              characters come in in a D&D style universe. If you're running a
              Hunger Games arena, I assume you wouldn't want anyone's character
              to use clairvoyance. You can dismiss a character if that
              character, or its creator, does not seem to be respectful. You can
              provide the story context, NPC, any events for characters to hold.
              You can stop accepting new members if you feel you have enough. If
              you feel the story reached an ending, you can also call it an
              ending. It can be a lot of work and responsibility, but also a lot
              of fun!
            </h3>
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
              <input
                type="text"
                required
                placeholder="will be used for world address; needs to be unique."
                value={this.state.url}
                onChange={this.update("url")}
              />
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
                    Add Logo
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
                    Add Image
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
              Generate World
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCommunity;