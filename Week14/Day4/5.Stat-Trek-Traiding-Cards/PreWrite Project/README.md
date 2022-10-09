# Star Trek Project

In this project, you will make enhancements to an online trading card 
application. This application allows a user to select cards to build a deck for
game play or trading in the future.

The original developers set up the navigation (using `react-router-dom`) and
created the two primary screen layouts (using function components). Now, they 
need your help with capturing, storing, and displaying the user's selection in 
their deck.

To begin

* Install the packages (`npm install`)
* Run the application and explore what's there (`npm start`)
  * Notice that nothing happens when you click `Buy` buttons on the home page
  * See that the sample friend's deck has cards, but the user's deck does not
  * These are the gaps you will close!
* Commit this version before you make changes to a _GitHub_ repo in your account
* Look through the code for the components, including UI and react-router setup

In particular, you should be looking for functionality gaps, such as the `const`
definitions at the start of several of the components. Write these down as 
you'll need the information later to provide those values through the context
you create.

> Tip: Test early and often! Use your debugging skills to ensure each change is 
> working before making additional changes. An important skill for software 
> developers is knowing when to ask for assistance!

## Phase 1 - Set up the framework

You'll be using *React Context* to track the purchases. In this initial phase,
you will set up the context by creating a new function component called
`AppContextProvider` with all the required pieces (importing React, writing the
function, and exporting the function).

As you may recall, one of the Object-Oriented Programming (OOP) concepts is
*encapsulation*, and a good principle to follow is grouping together code that
changes for the same reason / shares a single responsibility. So that's the
approach you're going to walk through now. Specifically, this means putting the
context and provider together with the variables shared through the context
(a.k.a., `value`), as well as the functions that update these variables.

### Define the *context* and its *provider*

Create a folder in `src` called `context`. Inside of the `context` folder,
create a file called `AppContext.js`. In this file, define the
`AppContextProvider` function component.

The props of the function will include one variable named `children`. This
variable is built into _React_. It holds a collection of JSX content passed to
the component between its opening and closing tags (which you'll do in the App
in just a moment). In case you forgot, the easiest way to define a function with
named props is by deconstructing the props object into its individual
attributes. In other words, `const AppContextProvider = ({children}) => {}`.

Above the function (and outside of it), declare a new constant (e.g.,  
`AppContext`) that creates the context. Export this constant. (Later, you'll 
connect hooks to it in the UI components.)

Inside the function, return the provider for the context you created and place
the children between the opening and closing JSX tags. For example:

```javascript
return (
  <AppContext.Provider>
    {children}
  </AppContext.Provider>
);
```

### Include one variable in the `value` as a starting point

Finally (for the moment), set the `value` prop on the component to an object.
In this object, you can start with only the `cards` array. The original 
developers left you _mock data_ to use for this purpose, so you can  `import` 
the appropriate constant from the class in `mockdata`.

In case you're stuck, here are a few hints...

```javascript
import { initialCards } from "../mockdata/CardData";

// component function and other stuff

return (
  <AppContext.Provider value={{
    cards: initialCards
  }}>
    {children}
  </AppContext.Provider>
);
```

### Wrap the application in the *provider*

Open _App.js_. Import the new provider you just made. Place it in the
application  such that all components that need to use the context are wrapped
inside of it. In other words, those components are children (or grandchildren,
etc.) of the context provider.

> Tip: This is a good time to commit an update to `git` and push up to *GitHub*.

[use-callback]: https://reactjs.org/docs/hooks-reference.html#usecallback
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage