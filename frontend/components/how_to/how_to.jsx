import React from 'react';

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = { category: 1 };
    }

    renderContent(){
        switch (this.state.category) {
            case 1:
                return(
                    <div className="intro-about">
                        <h2>Every person has its own story to tell.</h2>
                        <br/>
                        <p>But not everyone has been given a chance to do so. We think of authors, screen writers, and webtoon artists as someone with extreme gifts sent from above. Writing your own story seems daunting. But we all know you have a creative soul in you that's willing to bloom, and have an urging desire for your story to be unfolded.</p>
                        <br/>
                        <h2>But not everyone can be J.R.R. Tolkien. Or J.K.Rowling. Or George R.R. Martin.</h2>
                        <br/>
                        <p>Most us will have trouble creating an entire world and all its living habitants. Creating hundreds of characters with their own stories and backgrounds, creating different races with varying histories is all daunting.</p>
                        <br/>
                        <h2>What if you didn't need to be one?</h2>
                        <br/>
                        <p>What if you only needed to create a few, or just ONE character, to tell your own story? What if many of us collaborated on creating an epic together? Each of us can come up with one character, with its own different stories and backgrounds, and have them simultaneously interact with each other.</p>
                        <br/>
                        <h2>You've already been doing it.</h2>
                        <br/>
                        <p>Our history itself is an epic collaboration of storytelling by billions of people. We each have our own special place in this world. As small as we, as individual, seem to be swept away in the great flow of history, we each have our own strengths, and talents that shine.</p>
                        <br/>
                        <h2>Let us hear your story. And you can help us tell ours.</h2>
                        <br/>
                        <p>What are you waiting for? I know your creative mind is now bursting with ideas! :-) </p>
                    </div>
                )
            case 2:
                return (
                  <div className="intro-about">
                    <h1>
                      Characters are the living building blocks of your story.
                    </h1>
                    <br />
                    <p>
                      They'll be your chess piece, and your avatar to unfold the
                      story for you. They'll interact with other characters and
                      you might find out that they have a soul of their own.{" "}
                    </p>
                    <br />
                    <h1>Each character is unique. Just like us.</h1>
                    <br />
                    <p>
                      There are billions of people walking on earth. But no two
                      people are the same. So are your characters.
                    </p>
                    <br />
                    <h1>Possibilities are enless.</h1>
                    <br />
                    <p>
                      Ever spent hours customizing your online game avatar? Now
                      you have even more freedom to do so. Your character can
                      have any looks you like. Any crazy family line you can
                      imagine. Give it life by specifying it's personalities.
                    </p>
                    <br />
                    <p>
                      You can start simple and make an avatar of your own self.
                      Or think of your favorite game, anime, Marvel studio, DC
                      comics, TV series character. You'll find that there are
                      traits that you especially attracted to. Red eyes? Elves?
                      Villains with sad story behind how they became one?
                      Twintail tsundere?
                    </p>
                    <br />
                    <h1>
                      No matter what, they represent a small piece of you.
                    </h1>
                    <br /> 
                    <p>
                      Be respectful of other people and their characters alike.
                    </p>
                  </div>
                );
            case 3:
                return(
                    <div className="intro-about">
                       <h1>World is where your character lives in and actively provides a context for your story line.</h1><br/>
                       <p>Possibilies range from anywhere you currently live to an unknown place that's yet to form in your imagination. It can be set any time in history, or any place in legends, a fantasy world with different races and magic ... I've always been a fan of Hogwarts, dreaming I'd get a letter from owl.</p><br/>
                        <h1>World is a community.</h1><br/>
                        <p>When you make a world, you're sending an invitation for people to write and/or draw a story together. The characters act the story, but it's people behind them who tell and creat them.</p>
                        <h1>Recruit people to create a story with you!</h1><br/>
                        <p>When you create a world, you'll be the Game Master of that story. Initially the world is set to open for new members. People can apply with their characters to participate in a story. As administrator, you'll have the power to choose which characters you'd like to invite to your world. If you think the character doesn't align with your story (you'd not want a sorcerer in an SF world) you can decline membership and that character won't be able to write in the storyline.</p><br/>
                        <h1>When recruiting's closed, only members can write in your world storyline.</h1><br/>
                        <p>Provide events to give people a hint what to add to the storyline. Or you can have common missions set for world member characters to participate.</p><br/>
                        <h1>Let your story unfold.</h1>
                    </div>
                )
            case 4:
                return(
                    <div className="intro-aboutme">
                       <h1>Your works are your creation.</h1><br/>
                       <p>Don't copy other people's original characters, or claim someone else's original character to be yours. You would be very sad if someone else claimed your work to be his/hers. Co-Tell won't use your works without you permission. <strong>Your works belong to you.</strong></p><br/>
                       <h1>Be respectful.</h1><br/>
                       <p>No swearing, no name calling, no sabotaging will be allowed. Collaboartion entails cooperation, and cooperation can't exist without mutual respect. Co-Tell holds right to delete any posts/comments that seem damaging to other people. 
                       </p><br/>
                       <h1>Golden Rule: Don't do things to others that you wouldn't want to be done to you.</h1><br/>
                    </div>
                )
            case 5:
                return (
                  <div className="intro-aboutme">
                    <br/>
                    <h2>A little about me...</h2>
                    <br />
                    <h6>(I have my own story to tell!)</h6>
                    <br />
                    <p>
                      I'm some with a job you'd least expect to be able to
                      program. Or draw. Or write. Or design. But secretly I do
                      them all. I have a little creative soul hidden in me, just
                      like you. ;-)
                    </p>
                    <br />
                    <p>
                      Building Co-Tell has been one of the most enjoyable
                      projects I've done in a long time. Mostly because I truly
                      believe that no matter how banal one can seem on the
                      outside, that person is actually very special.. He/she
                      just needs a safe space to let that extraordinary little
                      spark out!
                    </p>
                    <br />
                    <p>
                      Co-Tell is a work in progress. But I'll continue work on
                      this to make it a better experience for you. Hope you
                      enjoy. And maybe we can help each other in building a
                      little world together.
                    </p>
                    <br />
                    <p>
                      If you have any questions or suggestions, don't hesitate
                      to contact me. My email is yuroruby@gmail.com
                    </p>
                    <br />
                    <br />
                    <h4 className="withlove">
                      With love,
                      <br />
                      A.
                    </h4>
                  </div>
                );
        }
    }

    render(){
        const cat1 = this.state.category === 1 ? "selected-intro" : "";
        const cat2 = this.state.category === 2 ? "selected-intro" : "";
        const cat3 = this.state.category === 3 ? "selected-intro" : "";
        const cat4 = this.state.category === 4 ? "selected-intro" : "";
        const cat5 = this.state.category === 5 ? "selected-intro" : "";

        return(
            <div className="intro-container relative">
                <div className="intro-prompt">
                    <h1>Welcome to Co-Tell!</h1>
                    <h3></h3>
                </div>
                <div className="intro-categories flex">
                    <div className={`intro-category hover ${cat1}`} onClick={() => this.setState({ category: 1 })}>What's this about?</div>
                    <div className={`intro-category hover ${cat2}`} onClick={() => this.setState({ category: 2 })}>Characters</div>
                    <div className={`intro-category hover ${cat3}`} onClick={() => this.setState({ category: 3 })}>World</div>
                    <div className={`intro-category hover ${cat4}`} onClick={() => this.setState({ category: 4 })}>Rules</div>
                    <div className={`intro-category hover ${cat5}`} onClick={() => this.setState({ category: 5 })}>About Me</div>
                </div>
                <div className="intro-show-container">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

export default Intro;