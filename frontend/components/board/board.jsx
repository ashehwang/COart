import React from 'react';
import { Link } from 'react-router-dom';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = { category: "General", page_num: 1, next_avail: true };
        this.getNextPosts = this.getNextPosts.bind(this);
        this.getPreviousPosts = this.getPreviousPosts.bind(this);
    }

    componentDidMount(){
        if (this.props.boardPosts.length === 0){
            this.props.fetchAllBoardPosts(1, 1)
                .then((res) => this.checkResLength(res));
        }
        // if (this.props.history.action === "POP") this.props.fetchAllBoardPosts(1, 1);
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.location.pathname !== this.props.location.pathname) {
    //         this.props.fetchAllBoardPosts(1,1)
    //             .then(res => this.checkResLength(res));
    //     }
    // }

    // componentWillUnmount(){
    //     this.setState({ next_avail: false, page_num: 1 })
    // }

    checkResLength(res){
        if(Object.values(res.boardPosts).length === 15) {
            this.setState({ next_avail: true })
        } else this.setState({ next_avail: false })
    }


    switch(num){
        switch(num){
            case 1:
                this.setState({ category: "General"}, () => {
                    this.props.fetchAllBoardPosts(num, 1)
                        .then( res => this.checkResLength(res));
                    this.setState({ page_num: 1 });
                });
                break;
            case 2:
                this.setState({ category: "Finding Members"}, () => {
                    this.props.fetchAllBoardPosts(num, 1)
                        .then( res => this.checkResLength(res));
                    this.setState({ page_num: 1}); 
                });
                break;
            case 3:
                this.setState({ category: "Looking for World"}, () => {
                    this.props.fetchAllBoardPosts(num, 1)
                        .then( res => this.checkResLength(res));
                    this.setState({ page_num: 1 });
                });
                break;
        }
    }

    getNextPosts(e){
        this.setState({ page_num: this.state.page_num + 1 }, () => {
            switch(this.state.category){
                case "General":
                    this.props.fetchAllBoardPosts(1, this.state.page_num)
                        .then(res => this.checkResLength(res));
                    break;
                case "Finding Members":
                    this.props.fetchAllBoardPosts(2, this.state.page_num)
                        .then(res => this.checkResLength(res));
                    break;
                case "Looking for World":
                    this.props.fetchAllBoardPosts(3, this.state.page_num)
                        .then(res => this.checkResLength(res));
                    break;
            }
        })
    }

    getPreviousPosts(e){
        this.setState({ page_num: this.state.page_num - 1 }, () => {
            switch(this.state.category){
                case "General":
                    this.props.fetchAllBoardPosts(1, this.state.page_num)
                        .then(res => this.checkResLength(res));
                    break;
                case "Finding Members":
                    this.props.fetchAllBoardPosts(2, this.state.page_num)
                        .then(res => this.checkResLength(res));
                    break;
                case "Looking for World":
                    this.props.fetchAllBoardPosts(3, this.state.page_num)
                        .then(res => this.checkResLength(res));
                    break;
            }
        })
    }

    renderPrevious(){
        if(this.state.page_num > 1){
            return <div className="hover color-grey" onClick={this.getPreviousPosts}><i className="fas fa-chevron-left" ></i>  Previous</div>
        } else return null;
    }

    renderNext(){
        if (this.state.next_avail) {
            return (
              <div className="hover color-grey" onClick={this.getNextPosts}>
                <i className="fas fa-chevron-right"></i> Next
              </div>
            );
        } else return null;
    }

    render(){
        const { boardPosts } = this.props;
        if(!boardPosts) return <div>No Posts exist in this Category Yet.</div>

        return(
            <div className="board-container">
                <div className="flex">
                    <div className="board-category-container border bg-white">
                        <div className="flex-center">Select Category</div>
                        <div className="board-category flex-center hover border" onClick={() => this.switch(1)}>General</div>
                        <div className="board-category flex-center hover border" onClick={() => this.switch(2)}>Finding Members</div>
                        <div className="board-category flex-center hover border" onClick={() => this.switch(3)}>Looking for World</div>
                    </div>
                    <div className="board-list-container border bg-white relative">
                        <div className="board-top flex">
                            <h1>{this.state.category}</h1>
                            <div className="border flex-center hover" onClick={() => this.props.history.push("/write")}><div className="flex-center"><i className="fas fa-marker"></i>  Write</div></div>
                        </div>
                        <div>
                            <div className="flex board-topline">
                                <div className="flex-center board-id">Id</div>
                                <div className="flex-center board-title">Title</div>
                                <div className="flex-center board-comments">Comments</div>
                                <div className="flex-center board-author">Author</div>
                                <div className="flex-center board-date">Date</div>
                            </div>
                            <div>{boardPosts.sort(function(a,b){
                                return a.id - b.id
                            }).reverse().slice(0,15).map( boardPost => <BoardPostTitle key={boardPost.id} boardPost={boardPost}/>)}</div>
                            <div className="board-page-flip flex">
                                {this.renderNext()}
                                {this.renderPrevious()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class BoardPostTitle extends React.Component {

    constructor(props){
        super(props);
    }

    handleTime() {
        const now = new Date();
        const nowString = now.toString();
        const past = new Date(this.props.boardPost.updated_at);
        const pastString = past.toString();

        if (nowString.slice(4, 15) === pastString.slice(4, 15)) {
        if (Number(pastString.slice(16, 18)) === 12) {
            return "12" + pastString.slice(18, 24) + " PM";
        } else if (Number(pastString.slice(16, 18)) > 12) {
            const hour = Number(pastString.slice(16, 18)) - 12;
            return String(hour) + pastString.slice(18, 24) + " PM";
        } else {
            return pastString.slice(16, 24) + " AM";
        }
        } else {
        return this.props.boardPost.updated_at.slice(0, 10);
        }
    }
    
    render() {

        const { boardPost } = this.props;

        return(
            <Link to={`/board/${boardPost.id}`}>
                <div className="flex board-bottomline">
                    <div className="flex-center board-id">{boardPost.id}</div> 
                    <div className="flex-center board-title">{boardPost.title}</div> 
                    <div className="flex-center board-comments">{boardPost.board_comment_ids.length}</div> 
                    <div className="flex-center board-author">{boardPost.author.user_name}</div>
                    <div className="flex-center board-date">{this.handleTime()}</div>
                </div>
            </Link>
        )
    }
}

export default Board;