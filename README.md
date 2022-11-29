# Meet APP

A serverless, progressive web application (PWA) with React built by using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

### Link to the App:

https://mihadereani.github.io/meet/

### Key Features

##### 1. Filter events by city.

- **User story:** As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.
- **Scenarios:** 1. When user hasn't searched for a city, show opcoming events from all cities.
  **Given** user hasn’t searched for any city
  **When** the user opens the app
  **Then** the user should see a list of all upcoming events

      2. User shoud see a list of suggestions when they search for a city.

  **Given** the main page is open
  **When** user starts typing in the city textbox
  **Then** the user should see a list of cities (suggestions) that match what they’ve typed

      3. User can select a city from the suggested list.

  **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
  **When** the user selects a city (e.g., “Berlin, Germany”) from the list
  **Then** their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

##### 2. Show/hide event details

- **User story:** As a user I should be able to “show and hide event details”, so that I can see the detailed information about an event which I'm interested in and hide it after finish reading.
- **Scenarios:** 1. An event element is collapsed by default
  **Given** the list of events was open
  **When** the user scrolls through the list
  **Then** the details of events will be hidden

      2. User can expand an event to see its details

  **Given** the list of events was open
  **When** the user click on one event (or show button)
  **Then** user will see event details

      3. User can collapse an event to hide its details

  **Given** an event element has been shown to the user
  **When** user user click on the hide button
  **Then** event details will be hidden

##### 3. Specify number of events

- **User story:** As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- **Scenarios:**

      1. When user hasn’t specified a number, 32 is the default number

  **Given** the user did not specify a number
  **When** the user opens event list
  **Then** 32 events max. will be shown in the list in one page

      2. User can change the number of events they want to see

  **Given** the user specified the number
  **When** the event list opens
  **Then** the specified number of events max. will be shown in the list in one page

##### 4. Use the app when offline

- **User story:** As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.
- **Scenarios:**

      1. Show cached data when there’s no internet connection

  **Given** user was using the app offline
  **When** the user opens the app
  **Then** user will see cached data

      2. Show error when user changes the settings (city, time range)

  **Given** user was using the app offline
  **When** the changes settings (city, time range)
  **Then** user will see error, informing the user internet is required

##### 5. View a chart showing the number of upcoming events by city

- **User story:** As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
- **Scenarios:**

      1. Show a chart with the number of upcoming events in each city

  **Given** the user hasn't searched a specific city
  **When** the user opens the app
  **Then** a chart with an overview, indicating the number of upcoming events by city will be shown.
