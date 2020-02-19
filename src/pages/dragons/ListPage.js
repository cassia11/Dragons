import axios from '../../configs/api'
import React, { Component } from 'react'
import Loading from '../../components/Loading'
import CardDragons from '../../components/dragons/ListCard'

const arraySort = require('array-sort')

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
        const dragons = arraySort(res.data, ['name', 'id'])
        this.setState({ dragons: dragons })
        this.setState({ isLoading: false })
      })
  }

  render() {
    const dragonList = (this.state.dragons.map((dragon, key) => <CardDragons dragon={dragon} key={key} />))
    const loadingMessage = <Loading color='pink' type='spin' />
    return (this.state.isLoading ? loadingMessage : dragonList)
  }

}