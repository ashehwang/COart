import React from 'react';
import MainCharPostItem from './main_char_post_item';

class MainPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPublicCharacterPosts();
    }

    render(){
        const { characterPosts, characters, loggedIn, currentUser } = this.props;
        if(!characterPosts) return null;
        console.log(characterPosts)
        return (
            <div className="main-page-container relative align-center">
                <div className="main-page">
                    {characterPosts.map(charPost => <MainCharPostItem key={charPost.id} characterPost={charPost} character={characters[charPost.character_id]} loggedIn={loggedIn} currentUser={currentUser}/>)}
                </div>
            </div>
        )
    }
}


export default MainPage;