import React from "react";

class EditBoardPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", title: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.updateTagId = this.updateTagId.bind(this);
  }

  componentDidMount(){
      this.props.fetchBoardPost(this.props.match.params.boardPostId)
            .then( res => {
                if (res.type === "RECEIVE_FETCHED_BOARD_POST") this.setState(this.props.boardPost)
            })
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) fileReader.readAsDataURL(file);
  }

  updateTagId(e) {
    this.setState({ tag_id: Number(e.currentTarget.value) });
  }

  handleSubmit(e) {
    const formData = new FormData();
    formData.append("board_post[title]", this.state.title);
    formData.append("board_post[body]", this.state.body);
    formData.append("board_post[user_id]", this.props.currentUser.id);
    formData.append("board_post[tag_id]", this.state.tag_id);
    if (this.state.photoFile) {
      formData.append("board_post[photo]", this.state.photoFile);
    }
    this.props.updateBoardPost(formData, this.props.match.params.boardPostId).then((res) => {
      if (res.type === "RECEIVE_UPDATED_BOARD_POST") {
        this.setState({ body: "", title: "" });
        this.props.history.push(`/board/${this.props.match.params.boardPostId}`);
      }
    });
  }

  renderButtons(){
      if(this.props.loggedIn && this.props.currentUser.id === this.props.boardPost.author.id) {
          return (
            <div className="board-post-buttons flex">
              <div
                className="board-post-submit hover flex-center"
                onClick={this.handleSubmit}
              >
                Edit Post
              </div>
              <div className="board-post-cancel hover flex-center">Cancel</div>
            </div>
          );
      } else return (
          <div className="board-post-buttons flex">
              <div className="board-post-error">Only The Author Can Edit This Post</div>
          </div>
      )
  }

  render() {

    if(!this.props.boardPost) return <div>Sorry, this Post does not exist.</div>

    const preview = this.state.photoUrl ? (<div className="pic-preview4"><img src={this.state.photoUrl} /></div>) : null;

    return (
      <div className="board-post-form-container">
        <div className="board-post-form-limit">
          <div className="board-post-container">
            <div className="board-post-info flex">
              <div className="flex border">
                <p>Select Category:</p>
                <select onChange={this.updateTagId}>
                  <option value="1">General</option>
                  <option value="2">Finding Members</option>
                  <option value="3">Looking for Community</option>
                </select>
              </div>
              <label htmlFor="board-post-file-upload" className="hover border">
                {" "}
                <i className="far fa-image"></i> Add Image
                <input
                  type="file"
                  id="board-post-file-upload"
                  className="hidden"
                  onChange={this.handleFile}
                />
              </label>
            </div>
            <div className="board-post-title">
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Title"
              />
            </div>
            <div className="flex-center">{preview}</div>
            <div className="board-post-body">
              <textarea
                value={this.state.body}
                onChange={this.update("body")}
              />
            </div>
            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
}

export default EditBoardPost;
