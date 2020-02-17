import axios from '../../configs/api'
import React, { Component } from 'react'
import CardDragons from '../../components/ListCard'

const arraySort = require('array-sort');

export default class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dragons: [],
      id: ''
    };
  }

  componentDidMount() {
    axios.get()
      .then(res => {
        const dragons = arraySort(res.data, ['name', 'id']);
        this.setState({ dragons: dragons });
        this.setState({ isLoading: false });
      })
  }

  render() {
    const dragonList = (this.state.dragons.map((dragon, key) => <CardDragons dragon={dragon} key={key} />));
    const loadingMessage = <h1 className="d-flex m-auto">Loading...</h1>;
    return (this.state.isLoading ? loadingMessage : dragonList);
  }

}