import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

    class Paragraph  extends React.Component {

        componentDidMount(){
            window.addEventListener("scroll", this.show);

        }

            show = ()=>{

                        const myBox = this.element;
                        const topPos = myBox.getBoundingClientRect().top;
                        const bottomPos = myBox.getBoundingClientRect().top + myBox.clientHeight;
                        // const logo = document.getElementById('img');



                    if (document.body.scrollTop >= topPos && document.body.scrollTop <= bottomPos && this.props.children.includes("can")) {
                        logo.classList = 'show';
                    }else{
                        logo.classList = 'image';
                    }



            }
            render(){
                return <p
                    ref={i=> this.element = i }>{this.props.children}</p>;
            }
    }


    class JokesList extends React.Component {
        constructor() {
            super();
            this.state = {
                jokes: [],

            }
        }
        componentDidMount() {
            fetch(`http://api.icndb.com/jokes`)
            .then(r => r.json())
            .then(data => {

                let objects = data.value;

                    this.setState({
                        jokes:objects,
                    })

            });

    }

        updateParagraph = () =>{

        }

    render() {

        const background = "wp.png";
        const jokes = this.state.jokes.map( joke => {
            return <Paragraph key={joke.id}
                upDate={this.updateParagraph}>{joke.joke}</Paragraph>;
        });
        return <div className="jokes">
            {jokes}
            <img src="http://sgpnarodowy.pl/wp-content/uploads/2014/11/sgp_logo_wirtualnapolska1.png"
                id="img"
                className="image"/>
        </div>;


    }
}

ReactDOM.render(
    <JokesList/>,
     document.getElementById('app'));

});
