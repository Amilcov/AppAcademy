## Phase 4 - Display player's deck

Now, you can work on the player's deck. Remember, that's the first one in the
`decks` array.

If you'd like, you can connect the UI components to the context as the first
step. That means edits in both `Navbar` and `Deck`.

You shouldn't see any visible changes since the default values are the same and
nothing is updating the decks after initialization. Nonetheless, verifying there
are no code errors is valuable.

### Updating player's deck

The exact implementation is left up to you. You're an experienced developer who
will be able to figure this out. Here's one approach to help get you started if 
you get stuck.

* Add a `useEffect` for logging updates to the decks (similar to the inventory 
  one above).
* Copy the current decks into a new array (to avoid inadvertent rerenders).
* Set a variable to the player's deck inside the new array for easy reference.
  (Remember that the player's deck will always be first.)
* Find the card object in the cards list.
  * Tip: You can make a constant for this at the beginning of your function
    component (set to `initialCards`, for now). This will allow you to set it as
    a dependency of the `useCallback`, as well as clean up the first `value` you
    set. While it doesn't affect this particular project, the right thing to do
    is imagine you will soon be switching the mock data to real data from a
    backend service.
* Merge the new card into a copy of the list of cards in the player's deck and
  store the result as the (new) card list in the player's deck
* Modify the object sent to the state update function to include the updated
  decks array.

At any point along the way, you can and should test and use your debugging 
skills to solve any challenges. As you've probably heard by now, this is a key
skill and common practice in development.

> Tip: You'll definitely want to commit an update to `git` and push up to 
> *GitHub* once all the pieces are working.

Congratulations! You finished the core features of this project!

## Bonus A

There is at least one cool enhancement you can make to your implementation.
Specifically, name your own hook!

The short explanation is that you'll move the use of `useContext` into the
`AppContext` file with your context provider. Here are the detailed steps.

Edit `AppContext`.

* Remove `export` from the constant for the context
  `const AppContext = React.createContext({});`
* Immediately following, make a new, exported constant with the custom name
  for your hook. Generally, hooks start with the `use` prefix.
  `export const useAppContext = () => useContext(AppContext);`
* Go to the components and replace useContext with your custom hook, e.g.,
  `const { decks } = useAppContext();`

**Important Note**

You'll need to declare the custom hook as a function so that it runs inside each
component which uses it. If you forget this, you'll get an error that starts
something like this:

```plaintext
Error: Invalid hook call. Hooks can only be called inside of the body of a 
function component.
```

## Bonus B

You've probably noticed that when the browser refreshes, all the cards in the
player's deck return to the store. If you'd like them to be persisted, then you
can use [`localStorage` to save and restore][local-storage].

Remember to use the mock data for the initial state when the local storage is 
not present (yet). You can reset the local storage in *Chrome dev tools* on the
"Application" tab under "Local Storage" on the left.

> Hint: All of this can be done within AppContextProvider.

## Bonus C

If you implemented `localStorage`, you'll soon be wanting a way to return cards
to the store (otherwise known as deleting them from the player's deck). Go ahead
and implement this now.

> Hints: 
> *  A new function in the context may prove useful.
> *  You may find it helpful to have a button the player can click to return a
>    card. You can use the `Buy` button from the `Store` as a model. Remember
>    that the button should appear only when displaying cards from the player's
>    deck!

[use-callback]: https://reactjs.org/docs/hooks-reference.html#usecallback
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage