import React from 'react';

class CharPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchRelatedCharacterPosts(this.props.characterId);
    }

    render(){

        return (
            <div>
                This will the Char Page!!
            </div>
        )
    }

}

export default CharPage;
