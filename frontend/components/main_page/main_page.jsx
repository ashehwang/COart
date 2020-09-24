import React from 'react';
import MainCharPostItem from './main_char_post_item';

class MainPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPublicCharacterPosts();
        if (this.props.history.action === "POP") this.props.fetchPublicCharacterPosts();
    }

    componentDidUpdate(prevProps){
        if(prevProps.location.key !== this.props.location.key) {
            this.props.fetchPublicCharacterPosts();
        }
    }

    render(){
        const { characterPosts, characters, loggedIn, currentUser, createComment, deleteCharacterPost, openModal } = this.props;
        if(!characterPosts) return null;
        return (
            <div className="main-page-container relative align-center">
                <div className="main-page">
                    {characterPosts.reverse().map(charPost => <MainCharPostItem key={charPost.id} characterPost={charPost} character={characters[charPost.character_id]} loggedIn={loggedIn} currentUser={currentUser} createComment={createComment} deleteCharacterPost={deleteCharacterPost} openModal={openModal}/>)}
                </div>
            </div>
        )
    }
}


export default MainPage;