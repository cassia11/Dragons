import axios from '../../configs/api';
import React, { Component } from 'react';
import DetailsCard from '../../components/DetailsCard'
import { useParams } from "react-router-dom";

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            dragon: {}
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(this.state);
        let id = useParams();
        console.log(id);

        axios.get(`/${params.id}`)
            .then(res => {
                console.log(res);
                const dragon = res.data;
                this.setState({ dragon: dragon });
                this.setState({ isLoading: false });
            })
    }

    render() {
        const dragonDetails = (<DetailsCard dragon={this.state.dragon} />);
        const loadingMessage = <h1 className="d-flex m-auto">Loading...</h1>;
        return (this.state.isLoading ? loadingMessage : dragonDetails);
    }
}