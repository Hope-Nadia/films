
import React from 'react';
import Home from '../../Components/Home/';

class HomeContainer extends React.Component {
    constructor(props){
        super(props);
        this.getFilm= this.getFilm.bind(this);
        this.addFilm= this.addFilm.bind(this);
        this.getFilmApi=this.getFilmApi.bind(this);
        this.addFilmApi=this.addFilmApi.bind(this);
    }
    getFilm()
    {
        console.log('GET fILM');
        this.getFilmApi()
            .then(res =>{
                console.log('RESULT OF RESPONSE',JSON.stringify(res));
            })
            .catch(err => console.log(err))
    }
    addFilm() {
        this.addFilmApi()
            .then(res =>{
                console.log('RESULT OF RESPONSE',JSON.stringify(res));
            })
            .catch(err => console.log(err))
    }
    addFilmApi= async()=> {
        const response = await fetch ('/addFilm',{
            method: 'post',
            body: 'newFilm'
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }
    getFilmApi= async()=> {
        console.log('Call api');
        const response = await fetch ('/film');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    }

    render (){
        let props = {
            getFilm: this.getFilm,
            addFilm: this.addFilm
        };
        return (
            <Home {...props}/>
        );
    }
}
export default HomeContainer;