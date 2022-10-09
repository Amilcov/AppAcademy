## Phase 3 - Buy cards

Now, you can start using your context! Begin in the `Store` component by 
importing the context you created and the `useContext` hook. Then, replace the 
`buyCard` constant with a deconstructed object that utilizes the `useContext` 
hook.

```javascript
const { buyCard } = useContext(AppContext);
```

When you test in the browser, you should be able to see the output from the 
`console.log` you added to the function in `AppContextProvider`.

### Updating inventory count

Finally, it's time to get into the heart of the algorithm which modifies the 
data (`value`) in the _context_.

FYI, much of the time, _React_ development goes this way. You begin by setting
up JSX for the user interface (which other developers did for you on this
project!), then add hooks for state, context, and so on. At some point you will
find you need to write "classic" JavaScript to implement data updates, business
logic, or other feature functionality. This mix of different kinds of work is
what attracts many front-end developers to _React_. You are blessed to be
learning both backend and frontend, so you'll have many choices for your career
path!

Before you get too deep into the code for updating the state, you may want to
set up some debugging to make it easier to verify that your code is working as
expected. A `useEffect` hook is particularly useful in this situation.

Since you have to pick some place to start, it might as well be the inventory.
Place any and all `useEffect` calls outside of any functions (probably between
the function definition you added in phase 2 (i.e., `buyCard`) and the `return`
of the context provider).

```javascript
  // Useful for debugging inventory updates
  useEffect(() => {
    console.log("INVENTORY UPDATED", applicationState.inventory)
  }, [applicationState.inventory]);
```

Now, inside the body of your `buyCard` function, add code for the following
features

* Don't allow the inventory to go below zero
* Make a copy of the current inventory object
  * This is an important approach because updating the current value could cause
   unanticipated re-renders!
* Decrement the inventory value for the card that was clicked
* Modify the call to the state objects update function to provide a new object
  that has the new inventory (while leaving the decks unchanged).

Here's a bit of a hint on that last one...

```javascript
updateApplicationState({
  decks: applicationState.decks,
  inventory: newInventory,
});
```

When you run and test this in the browser, be sure to click the same card enough
times to drive the value to zero so you can verify the first bullet above is 
covered.

### Show updated inventory in the store

Jump back to the `Store` component to replace both `inventory` and `cards`
constants with the ones from the context. Don't worry if you find this quite
simple; that just means you're probably doing it right!

Test in the browser and verify the inventory numbers change correctly, and do 
NOT go below zero. Also, check for warnings (like unused imports), and address
those as appropriate (deleting the unused imports).

> Tip: Once you are seeing both the inventory updating properly, you know it's 
> a good time to commit an update to `git` and push up to _GitHub_.

[use-callback]: https://reactjs.org/docs/hooks-reference.html#usecallback
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage