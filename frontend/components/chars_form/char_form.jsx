import React from 'react';

class CharForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.character;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBodyFile = this.handleBodyFile.bind(this);
    this.handleHeadFile = this.handleHeadFile.bind(this);
  }

  handleSubmit(e) {
    // e.preventDefault();
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
    this.props.createChar(formData);
    // this.setState({ body: "" });
    // this.props.closeModal();
  }

//   updateBody(e) {
//     this.setState({ body: e.currentTarget.value });
//   }

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

    const headPreview = this.state.head_photoUrl ? <img className="pic-preview" src={this.state.head_photoUrl} /> : null;
    const bodyPreview = this.state.body_photoUrl ? <img className="pic-preview" src={this.state.body_photoUrl} /> : null;

    return(
        <div className="charform-container">
            <div className="charform-action">
                {this.props.notice}
            </div>
            <div className="charform">
                <div className="charForm-detail">
                    <label>First Name:
                        <input type="text" required value={this.state.first_name} onChange={this.updateField("first_name")}/>
                    </label>
                </div>
                <div className="charForm-detail">
                    <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.updateField("last_name")}/>
                    </label>
                </div>
                <div className="charForm-detail">
                    <label>Bio & Characteristics:
                        <textarea placeholder="Be as crazy as you want!" value={this.state.bio} cols="50" rows="5" onChange={this.updateField("bio")}/>
                    </label>
                </div>
                <div className="charForm-detail">
                    <label>Add Face Picture:
                        <input type="file" onChange={this.handleHeadFile}/>
                    </label>
                    {headPreview}
                </div>
                <div className="charForm-detail">
                    <label>Add Body Picture:
                        <input type="file" onChange={this.handleBodyFile}/>
                    </label>
                    {bodyPreview}
                </div>
            </div>
            <div className="charform-submit" onClick={this.handleSubmit}>
                {this.props.notice}
            </div>
        </div>
    )
  }
}

export default CharForm;