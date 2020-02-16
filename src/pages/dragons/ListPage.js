import axios from '../../configs/api';
import React, { Component } from 'react';
import CardDragons from '../../components/ListCard';

const arraySort = require('array-sort');

export default class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dragons: []
    };
  }

  componentDidMount() {
    axios.get()
      .then(res => {
        const dragons = arraySort(res.data, 'name');
        this.setState({ dragons: dragons });
        this.setState({ isLoading: false });
      })
  }

  render() {
    return (
      this.state.dragons.map((dragon, key) => <CardDragons dragon={dragon} key={key} />)
    )
  }

}