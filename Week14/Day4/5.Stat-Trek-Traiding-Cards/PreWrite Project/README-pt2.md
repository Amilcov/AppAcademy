## Phase 2 - Adding values to the *context provider*

Look back at the notes you took while you were reviewing the application. Which
variables did you find that were incomplete in the components?

Hopefully, your list matches this one:

* cards
* decks
* inventory
* buyCard

If your notes do not include details on the variable type and structure of each
of these, please review the components again to gather this information. Take
your time! Being thorough now will save you time and effort and reduce your 
frustration later.

Now, think through each variable and determine which ones change together all or 
most of the time. When working with global context, it is important to keep the
number of state variables to a minimum. Updating 3 variables can cause 3 
rerenders of ALL children, whether or not they use the context.

> Hint: The previous developers informed you that when a card is bought, it will
> be put into the user's deck, and removed from the inventory (meaning the count
> gets reduced).

### Connecting *state* variable(s) to the *context provider*

Back in `AppContextProvider`, you can create a state variable (using the 
`useState` hook) to hold the decks and the inventory (e.g. `applicationState`). 
The initial values you should get from the mock data (which could someday be 
replaced with fetch calls to a backend API, but that is beyond the scope of this
project).

Since the components want to access the `decks` and `inventory` variables
separately, you'll want to use decomposition to incorporate them into the
`value` of the context provider.

```javascript
<AppContext.Provider value={{
  ...applicationState,
  cards: initialCards
}}>
```

### Including a function variable in the *context provider*

The fourth variable that needs to go in the `value` of the *context* is the
`buyCard` function. In order to reduce the number of rerenders, you'll want to
utilize the [`useCallback` hook][use-callback] when defining this function
(e.g., `buyCardForPlayer`).

In your analysis, you may have noticed the function takes 1 argument--the 
`cardId`--so be sure to include it.

For the dependencies of `useCallback`, you'll want to include the state variable
you made (i.e., `applicationState`), since the function will need to take values
out of it in order to update them.

For now, it's okay to do the equivalent of "nothing" inside the function. If you
would like to clean up any React warnings (like the one stating that the
function associated with the `useState` hook is defined but not used), then you
can call the state function passing in the state variable (e.g.,
`updateApplicationState(applicationState)`). You may also want to include a
`console.log` statement so you can easily tell when this is being called. (It is
NOT being called yet, but it will be very soon.)

The last step here is to add the function to the `value` of the *context 
provider*.

```javascript
    <AppContext.Provider value={{
      ...applicationState,
      cards: initialCards,
      buyCard: buyCardForPlayer
    }}>
```

There's nothing new to test, but it's always a good idea to save and make sure
there are no errors or warnings in the browser console.

[use-callback]: https://reactjs.org/docs/hooks-reference.html#usecallback
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage