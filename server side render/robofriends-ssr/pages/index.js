import React, { Component } from 'react';
import Head from 'next/head';
import axios from 'axios';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

export class index extends Component {
  state = {
    searchField: ""
  }

  static async getInitialProps() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const { data } = response;
    return { robots: data };
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { robots } = this.props;
    const { searchField } = this.state;
    const isPending = false;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div>
        <Head>
          <title>RoboFriends -SSR</title>
          <link href="/static/index.css" rel="stylesheet" />
          <link href="/static/App.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
        </Head>
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={e => this.onSearchChange(e)}/>
          <Scroll>
            {
              <ErrorBoundry>
                <CardList robots={filteredRobots} />
              </ErrorBoundry>
            }
          </Scroll>
        </div>
      </div>
    )
  }
}

export default index;
