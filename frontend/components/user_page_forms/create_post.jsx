import React from 'react';

class CreatePost extends React.Component {

    constructor(props){
        super(props);
        this.state = { body: "", visibility: "public", photoFile: null, photoUrl: null };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    handleFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        const formData = new FormData();
        formData.append("post[body]", this.state.body);
        formData.append("post[visibility]", this.state.visibility);
        if (this.state.photoFile) {
            formData.append("post[photo]", this.state.photoFile);
        }
        this.props.createPost(formData)
                .then( res => {
                    if (res.type === "RECEIVE_POST") this.props.closeModal();
                });
    }

    returnIcon(){
        switch(this.state.visibility){
            case "public":
                return <i className="fas fa-globe-americas"></i>;
            case "following":
                return <i className="fas fa-users"></i>;
            case "private":
                return <i className="fas fa-user-lock"></i>;
        }
    }

    render(){
        const preview = this.state.photoUrl ? <div className="pic-preview"><img src={this.state.photoUrl} /></div> : null;
        const { currentUser } = this.props;
    
        return(
            <div className="create-user-post-container">
                <div className="create-post-container relative">
                    <div className="create-user-post-close absolute"><i className="far fa-times-circle hover" onClick={() => this.props.closeModal()}></i></div>
                    <div className="create-user-post-profile flex">
                        <div className="create-user-post-visibility">
                            {this.returnIcon()}
                            <select onChange={this.update("visibility")}>
                                <option defaultValue="public">Public</option>
                                <option value="following">Following</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="create-user-post-body align-center">
                    <textarea placeholder={`What's on your mind, ${currentUser.nick_name}? :) `} value={this.state.body} cols="50" rows="4" onChange={this.update("body")} />
                </div>
                <div className="flex-center">{preview}</div>
                <div className="create-post-footer flex">
                    <div> Add To Your Post</div>
                    <div className="create-user-post-icons">
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <i className="fas fa-images hover"></i>
                        </label>
                        <input type="file" onChange={this.handleFile} id="file-upload" className="hidden" />
                        <i className="fas fa-user-tag hover"></i>
                    </div>
                </div>
                
                <div className="create-user-post-submit flex-center hover" onClick={this.handleSubmit}>
                    Create Post
                </div>
            </div>
        )
    }
}

export default CreatePost;
