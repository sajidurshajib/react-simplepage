import React, { Component } from  'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render(){
        const {title,image,description,link} = this.props.project;
        return(
            <div style={{display:'inline-block',}} className='col-md-4'>
                <h3>{title}</h3>
                <img src={image} alt='pro' style={{width:200, height:120}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}


class Projects extends Component{
    render(){
        return (
            <div className='container'>
                <h2>Highlited Projects</h2>
                <div style={{padding:50}} className='row'>
                    {
                        PROJECTS.map((PROJECT)=>{
                            return(
                                <Project key={PROJECT.id} project={PROJECT} />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;