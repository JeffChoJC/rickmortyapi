# README

## What architectural decision did you make and why? Elaborate on strengths and weaknesses.

> At first I used `create-react-app` to simplify setup but later ended up stripping down most of the dependencies. I also added `react-router` and `react-router-dom` to handle site navigation before deciding to create a modal for the click event of each character entry. I thought this was a cleaner, more lightweight, and more aesthetically pleasing solution. It was also easier to pass the character's location name to the modal, eliminating the need for a redundant query. For querying, I chose GraphQL because the REST APIs returned bulky responses with unnecessary data. I was able to use GraphQL to request only the information I needed in an attempt to minimize loading. The difference is negligible because the assignment asked for a finite and small number of requests but there should be a difference at scale. I tried to avoid a second query by extracting the residents within the characters query but the API consistently returned an `INTERNAL_SERVER_ERROR`. TypeScript was used to better maintain payloads and responses as well as support readability and extensibility.

## How did you handle error cases?

> I used React's `useState` hook to manage errors. The queries were executed upon the components' rendering, and errors were caught and set using the hook and React's `useEffect`. Because I implemented a way to query for different "pages", I had to clean up error state upon each render as well in order to properly request a different page. I didn't do much in the case of errors being present. I simply rendered the characters list and details table conditionally, displaying `There has been an error.` when an error occurred.

## How did you test the app?

> The app was tested visually and using `console.log()` to verify data and errors.

## What third party libraries/external code snippets did you use, if any?

> I used external code snippets to assist in my webpack configuration. Much of my `tsconfig.json` and `package.json` were provided by `create-react-app`. Libraries I used included `graphql`, `graphql-request`, and `typescript`.

## If you had more time, what would you have done differently?

> Given more time, my main priority would would have been to implement unit tests using Jest. I was also considering leaving routing available to allow different searches on different paths. The search algorithm should also be more fault-proof, validating properly for inputs before executing queries to improve performance and experience. Last but not least, I would spend more time styling the components using Sass to make them more visually appealing.
