import ReactDOM from "react-dom/client";
import React , {Component} from 'react';
import MyForm from './App';
import './index.css';


class ContainerApp extends Component{
    render(){

        const styles = {
            textAlign: "center" ,
            backgroundColor: "blue",
            color : "white",
            padding: "30px"
        };

        const smallSize = {
            textAlign : "center",
            fontSize : "small"

        };
        return(
            <section>
                <h1 style={styles}>Souscrire à nôtre site</h1>
                <p style={smallSize}>Nous proposons l'un des meilleurs offres sur le marché
                en terme d'échanges.</p>
                <MyForm />
            </section>
        )
    }
}

export default ContainerApp;