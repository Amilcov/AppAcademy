import {useContext} from 'react';
import { PupContext } from '../../context/PupContext';
i
import speedy from '../../pups/speedy-pup.jpg';
import banana from '../../pups/banana-pup.jpg';
import sleepy from '../../pups/sleepy-pup.jpg';



const PupImage = () => {
  const {puppy} = useContext(PupContext);
  return (
    <img src={puppy} alt="pup" />
  );
};

export default PupImage;