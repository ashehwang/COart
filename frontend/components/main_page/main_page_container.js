import { connect } from 'react-redux';
import MainPage from './main_page';

const mSTP = state => ({
    characterPosts: state.entities.characterPosts,
    characters: state.entities.characters,
    users: state.entities.users
});

const mDTP = dispatch => ({

});

export default connect(mSTP, mDTP)(MainPage);