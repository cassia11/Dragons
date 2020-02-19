import React, { Component } from 'react'
import Loading from '../../components/Loading'
import NotFound from '../../components/NotFound'


export default class NotFoundPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        };
    }

    render() {
        const notFound = <NotFound />
        const loadingMessage = <Loading color='pink' type='spin' />
        return (this.state.isLoading ? loadingMessage : notFound)
    }

}