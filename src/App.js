import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: 'all',
    eventCount: 32,
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          events = events.slice(0, this.state.eventCount);
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    const { eventCount, seletedLocation } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === 'all'
            ? events
            : events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, eventCount);
        this.setState({
          events: eventsToShow,
          seletedLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          seletedLocation === 'all'
            ? events
            : events.filter((event) => event.location === seletedLocation);
        const eventsToShow = locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          eventCount: inputNumber,
        });
      });
    }
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className='App' />;

    return (
      <div className='App'>
        {!navigator.onLine && (
          <WarningAlert text='You are currently offline. The event list may not be up-to-date.' />
        )}
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateEvents={this.updateEvents} />

        <ScatterChart
          width={800}
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type='category' dataKey='city' name='city' />
          <YAxis type='number' dataKey='number' name='number of events' />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill='#8884d8' />
        </ScatterChart>

        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
