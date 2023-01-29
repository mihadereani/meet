# Meet APP

Meet App is a progressive web application (PWA) that uses the Google Calendar API to fetch tech events in a chosen city and timeframe. Users can view details of the events, their number, and the types of events that are most common in the area. The App is connected to a demo Google Calendar for demonstration purposes, so the events are not current. Nevertheless, the App could be connected to a live events calendar.

## Link to the App:

https://mihadereani.github.io/meet/

## Key Features

### 1. Filter events by city.

- **User story:** As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.
- **Scenarios:**

  1. When user hasn't searched for a city, show opcoming events from all cities.<br>
     **Given** user hasn’t searched for any city<br>
     **When** the user opens the app<br>
     **Then** the user should see a list of all upcoming events

  2. User shoud see a list of suggestions when they search for a city.<br>
     **Given** the main page is open<br>
     **When** user starts typing in the city textbox<br>
     **Then** the user should see a list of cities (suggestions) that match what they’ve typed

  3. User can select a city from the suggested list.<br>
     **Given** the user was typing “Berlin” in the city textbox and the list of suggested cities is showing<br>
     **When** the user selects a city (e.g., “Berlin, Germany”) from the list<br>
     **Then** their city should be changed to that city (i.e., “Berlin, Germany”), and the list of suggestions should disappear, and the user should receive a list of upcoming events in that city.

### 2. Show/hide event details

- **User story:** As a user I should be able to “show and hide event details”, so that I can see the detailed information about an event which I'm interested in and hide it after finish reading.
- **Scenarios:**

  1. An event element is collapsed by default<br>
     **Given** the list of events was open<br>
     **When** the user scrolls through the list<br>
     **Then** the details of events will be hidden

  2. User can expand an event to see its details<br>
     **Given** the list of events was open<br>
     **When** the user click on one event (or show button)<br>
     **Then** user will see event details

  3. User can collapse an event to hide its details<br>
     **Given** an event element has been shown to the user<br>
     **When** user user click on the hide button<br>
     **Then** event details will be hidden

### 3. Specify number of events

- **User story:** As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- **Scenarios:**

  1. When user hasn’t specified a number, 32 is the default number<br>
     **Given** the user did not specify a number<br>
     **When** the user opens event list<br>
     **Then** 32 events max. will be shown in the list in one page

  2. User can change the number of events they want to see<br>
     **Given** the user specified the number<br>
     **When** the event list opens<br>
     **Then** the specified number of events max. will be shown in the list in one page

### 4. Use the app when offline

- **User story:** As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.
- **Scenarios:**

  1. Show cached data when there’s no internet connection<br>
     **Given** user was using the app offline<br>
     **When** the user opens the app<br>
     **Then** user will see cached data<br>

  2. Show error when user changes the settings (city, time range)<br>
     **Given** user was using the app offline<br>
     **When** the changes settings (city, time range)<br>
     **Then** user will see error, informing the user internet is required

### 5. View a chart showing the number of upcoming events by city

- **User story:** As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
- **Scenarios:**
  1. Show a chart with the number of upcoming events in each city<br>
     **Given** the user hasn't searched a specific city<br>
     **When** the user opens the app<br>
     **Then** a chart with an overview, indicating the number of upcoming events by city will be shown.
