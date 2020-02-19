import axios from '../../configs/api'
import React, { Component } from 'react'
import Loading from '../../components/Loading'
import DetailsCard from '../../components/DetailsCard'

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
        const loadingMessage = <div style={{ marginLeft: '500px', paddingTop: '250px' }}><Loading color='pink' type='spin' /></div> ;
        return (this.state.isLoading ? loadingMessage : dragonDetails);
    }
}