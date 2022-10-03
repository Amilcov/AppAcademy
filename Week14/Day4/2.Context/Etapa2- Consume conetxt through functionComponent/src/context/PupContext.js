import { createContext, useContext, useState } from 'react';
import speed from '../pups/speedy-pup.jpg'

export const PupContext = createContext();

export function usePuppy() {
  return useContext(PupContext);
};

export function PupProvider(props) {
    const [puppy, setPuppy] = useState(speed);
  return (
    <PupContext.Provider value={{puppy, setPuppy}}>
      {props.children}
    </PupContext.Provider>
   )
 
}