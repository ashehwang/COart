import React from 'react';

class CreateCharacterPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { body: "", visibility: "public", photoFile: null, photoUrl: null };
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(property){
        return e => this.setState({[property]: e.currentTarget.value});
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

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("character_post[body]", this.state.body);
        formData.append("character_post[user_id]", this.props.currentUser.id);
        formData.append("character_post[character_id]", this.props.currentUser.selected_id);
        formData.append("character_post[visibility]", this.state.visibility);
        if (this.state.photoFile) {
            formData.append("character_post[photo]", this.state.photoFile);
        }
        this.props.createCharacterPost(formData);
        this.props.closeModal();
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
        const { character } = this.props;
    
        return(
            <div className="create-post-container shadow relative">
                {/* <div className="create-post-prompt">
                    Create Post
                </div> */}
                <div className="create-post-close absolute"><i className="far fa-times-circle hover" onClick={() => this.props.closeModal()}></i></div>
                <div className="create-post-profile flex">
                    <div>
                        <img src={character.headPhotoUrl} className="smaller-profile-pic" />
                    </div>
                    <div>
                        <div className="create-post-profile-name">
                            {character.first_name} {character.last_name}
                        </div>
                        <div className="create-post-visibility">
                            {this.returnIcon()}
                            <select onChange={this.update("visibility")}>
                                <option defaultValue="public">Public</option>
                                <option value="following">Following</option>
                                <option value="private">Private</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="create-post-body align-center">
                    <textarea placeholder={`What's on your mind, ${character.first_name}?`} value={this.state.body} cols="50" rows="4" onChange={this.update("body")} />
                </div>
                <div className="flex-center">{preview}</div>
                <div className="create-post-footer flex">
                    <div> Add To Your Post</div>
                    <div className="create-post-icons">
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <i className="fas fa-images hover"></i>
                        </label>
                        <input type="file" onChange={this.handleFile} id="file-upload" className="hidden" />
                        <i className="fas fa-user-tag hover"></i>
                    </div>
                </div>
                
                <div className="create-post-submit flex-center hover" onClick={this.handleSubmit}>
                    Create Post
                </div>
            </div>
        )
    }
}

export default CreateCharacterPostForm;