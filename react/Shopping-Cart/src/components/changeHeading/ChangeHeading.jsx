import {Component} from 'react';
import Heading from "../Heading/Heading";
import { Link } from 'react-router-dom';

class ChangeHeading extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.title
        };

    }

    handler = () =>{
        this.setState(this.state.title !== "Jessica" ? 
            {title: "Jessica"} : {title: "Welcome"}
        );
    }
    render(){
        return(
        <>
            <Heading title={this.state.title} headingType={"h1"}/>
            <button type="button" onClick={this.handler}>Click me!</button>
            <Link to="store">Check out my store!</Link>

        </>
    );
    }   
}
export default ChangeHeading;