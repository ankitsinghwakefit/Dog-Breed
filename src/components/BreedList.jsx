import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "../App.css"

export default class BreedList extends Component {
    constructor(){
        super()
        this.state = {
            breed : null
        }
    }
    componentDidMount(){
        fetch("https://dog.ceo/api/breeds/list/all").then(res=>res.json()).then(data=>this.setState({
            breed : data.message
        }));
    }

    render() {
        let ary = this.state.breed || {};

        return (
            <div class="container breedlist-container">
                 <div class="notification">
                <h1>List of all available Dog Breeds we have.</h1>
                <p>Click on any Breed to view picture.</p>
                {Object.keys(ary).map(key=>{
                    return(
                        <>
                            <details>
                                <summary>
                                    <Link to={`/randompic/${key}`}>{key}</Link>
                                </summary>
                                {ary[key].map(d=>(
                                    <li>{d}</li>
                                ))}
                            </details>
                        </>
                    )
                })}
                </div>
            </div>
        )
    }
}
