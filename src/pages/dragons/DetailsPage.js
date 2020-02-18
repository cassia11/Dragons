import axios from '../../configs/api'
import React, { Component } from 'react'
import DetailsCard from '../../components/DetailsCard'
import Loading from '../../components/Loading';

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            dragon: {}
        };
    }

    componentDidMount() {
        axios.get(`/${this.props.match.params.id}`)
            .then(res => {
                const dragon = res.data;
                this.setState({ dragon: dragon });
                this.setState({ isLoading: false });
            })
    }

    render() {
        const dragonDetails = <DetailsCard dragon={this.state.dragon} />;
        const loadingMessage = <Loading color='pink' type='spin'/>;
        return (this.state.isLoading ? loadingMessage : dragonDetails);
    }
}