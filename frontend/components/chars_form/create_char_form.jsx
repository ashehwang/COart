import React from 'react';

class CreateCharForm extends React.Component {
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
    this.props.createChar(formData).then(res => {
      if(res.type === "RECEIVE_CHAR"){
        this.setState({ body: ""});
        this.props.history.push(`/character/${res.char.id}`);
      }
    });
  }

  updateField(val) {
      return e => this.setState({ [val] : e.currentTarget.value });
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

  render() {

    const headPreview = this.state.head_photoUrl ? <img className="pic-preview2" src={this.state.head_photoUrl} /> : null;
    const bodyPreview = this.state.body_photoUrl ? <img className="pic-preview2" src={this.state.body_photoUrl} /> : null;

    return(
        <div className="charform-container">
          <div className="charform-limit">
            <div className="charform-action">
                <h1>Create Your Own Character!</h1>
                <br/>
                <h3>This is the most exciting and fun part of Co-Tell, and the very reason this site was made. Ever thought you'd like to create your own original character to tell stories with? The character can be based off from you, or someone you like, or from your favorite anime/game/manga/novel character. Be as creative and as crazy as you like. </h3>
                <br/>
                <h3>Your character can be living now, here... suffering through pandemic. Or be living in D&D style fantasy world. Anyone interested in SF? Your character can be outgoing, or shy, or bubbly. Maybe he/she is a twin tailed tsundere. Maybe it's an animal that takes human form when we're not looking. I know your imagination is endless, and so are the possibilities of your character. </h3>
                <br/>
                <h3>If you're someone who can draw, you can add pictures of your character. Odd eyes? Cat ears? Rainbow colored hair? If you can't draw, maybe you ask someone to. If you'd like to leave it to people's imagination, you can leave it blank too.</h3>
            </div>
            <div className="charform">
                <div className="charform-detail">
                    <label>First Name </label>
                        <input type="text" required placeholder="Required" value={this.state.first_name} onChange={this.updateField("first_name")}/>
                </div>
                <div className="charform-detail">
                    <label>Last Name </label>
                        <input type="text" value={this.state.last_name} onChange={this.updateField("last_name")}/>
                </div>
                <div className="charform-detail">
                    {/* <label>Bio & Characteristics: </label> */}
                        <textarea placeholder="Bio and characteristics. Background story. Anything you want people to know of your character, write down here. Be as crazy as you want!" value={this.state.bio} cols="50" rows="5" onChange={this.updateField("bio")}/>
                    
                </div>
                <div className="charform-detail charform-files">
                    <label htmlFor="head-file-upload" className="hover" >Add Profile Picture
                        <input type="file" id="head-file-upload" className="hidden" onChange={this.handleHeadFile}/>
                    </label>
                    {headPreview}
                </div>
                <div className="charform-detail charform-files">
                    <label htmlFor="body-file-upload" className="hover" >Add Body Picture
                        <input type="file" id="body-file-upload" className="hidden" onChange={this.handleBodyFile}/>
                    </label>
                    {bodyPreview}
                </div>
                <div className="charform-submit hover flex-center" onClick={this.handleSubmit}>
                    {this.props.notice}
                </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CreateCharForm;