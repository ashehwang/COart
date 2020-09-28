import React from 'react';

class CreateCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", intro: "", detail: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoFile = this.handleLogoFile.bind(this);
    this.handleImageFile = this.handleImageFile.bind(this);
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("community[name]", this.state.name);
    formData.append("community[intro]", this.state.intro);
    formData.append("community[detail]", this.state.detail);
    if (this.state.logoFile) {
      formData.append("community[logo]", this.state.logoFile);
    }
    if (this.state.imageFile) {
      formData.append("community[image]", this.state.imageFile);
    }
    this.props.createCommunity(formData).then((res) => {
      if (res.type === "RECEIVE_COMMUNITY") {
        this.setState({ body: "" });
        this.props.history.push(`/board`);
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
    // const headPreview = this.state.head_photoUrl ? <img className="pic-preview2" src={this.state.head_photoUrl} /> : null;
    // const bodyPreview = this.state.body_photoUrl ? <img className="pic-preview2" src={this.state.body_photoUrl} /> : null;

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
              <strong> One character can only belong to one world.</strong>{" "}
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
              to use clairvoyance. You can kick someone out if that person does
              not seem to be respectful. You can provide the story context, NPC,
              any events for characters to hold. You can stop accepting new members if you feel
              you have enough. If you feel the story reached an ending, you can also call it an ending. 
              It can be a lot of work and
              responsibility, but also a lot of fun!
            </h3>
          </div>
          <div className="charform">
            <div className="charform-detail">
              <label>Name / Title</label>
              <input
                type="text"
                required
                placeholder="Required"
                value={this.state.name}
                onChange={this.update("name")}
              />
            </div>
            <div className="charform-detail">
              <label>Introduction </label>
              <input
                type="text"
                placeholder="A short description of the world"
                value={this.state.intro}
                onChange={this.update("intro")}
              />
            </div>
            <div className="charform-detail">
              <label>Description of the World & Its Story: </label>
              <textarea
                placeholder="Example: You're in Hogwarts. You're an FBI trying to catch an international criminal."
                value={this.state.detail}
                cols="50"
                rows="5"
                onChange={this.update("detail")}
              />
            </div>
            <div className="charform-detail charform-files">
              <label htmlFor="head-file-upload" className="hover">
                Add Logo
                <input
                  type="file"
                  id="head-file-upload"
                  className="hidden"
                    onChange={this.handleLogoFile}
                />
              </label>
              {/* {headPreview} */}
            </div>
            <div className="charform-detail charform-files">
              <label htmlFor="body-file-upload" className="hover">
                Add Image
                <input
                  type="file"
                  id="body-file-upload"
                  className="hidden"
                    onChange={this.handleImageFile}
                />
              </label>
              {/* {bodyPreview} */}
            </div>
            <div
              className="charform-submit hover flex-center"
                onClick={this.handleSubmit}
            >
              Create World
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCommunity;