import React from 'react';

class CreateCommunity extends React.Component {
  constructor(props) {
    super(props);
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
    this.props.createChar(formData).then((res) => {
      if (res.type === "RECEIVE_CHAR") {
        this.setState({ body: "" });
        this.props.history.push(`/character/${res.char.id}`);
      }
    });
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleBodyFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ body_photoFile: file, body_photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleHeadFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ head_photoFile: file, head_photoUrl: fileReader.result });
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
              any events for characters to hold. It can be a lot of work and
              responsibility, but also a lot of fun!
            </h3>
          </div>
          <div className="charform">
            <div className="charform-detail">
              <label>First Name </label>
              <input
                type="text"
                required
                placeholder="Required"
                // value={this.state.first_name}
                // onChange={this.updateField("first_name")}
              />
            </div>
            <div className="charform-detail">
              <label>Last Name </label>
              <input
                type="text"
                // value={this.state.last_name}
                // onChange={this.updateField("last_name")}
              />
            </div>
            <div className="charform-detail">
              {/* <label>Bio & Characteristics: </label> */}
              <textarea
                placeholder="Bio and characteristics. Background story. Anything you want people to know of your character, write down here. Be as crazy as you want!"
                // value={this.state.bio}
                cols="50"
                rows="5"
                // onChange={this.updateField("bio")}
              />
            </div>
            <div className="charform-detail charform-files">
              <label htmlFor="head-file-upload" className="hover">
                Add Profile Picture
                <input
                  type="file"
                  id="head-file-upload"
                  className="hidden"
                  //   onChange={this.handleHeadFile}
                />
              </label>
              {/* {headPreview} */}
            </div>
            <div className="charform-detail charform-files">
              <label htmlFor="body-file-upload" className="hover">
                Add Body Picture
                <input
                  type="file"
                  id="body-file-upload"
                  className="hidden"
                  //   onChange={this.handleBodyFile}
                />
              </label>
              {/* {bodyPreview} */}
            </div>
            <div
              className="charform-submit hover flex-center"
              //   onClick={this.handleSubmit}
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