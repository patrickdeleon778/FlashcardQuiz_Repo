import useSound from 'use-sound';

import cardsBGM from '../assets/audio/Persona 4 Heartbeat Heartbreak.mp3';
import generateSound from '../assets/audio/selectCatAudio.mp3';
import affectionSound from '../assets/audio/your affection.mp3';
import optionHoverSound from '../assets/audio/optionHover.mp3';
import cardFlipSound from '../assets/audio/cardFlipAudio.mp3';
import dontClickSound from '../assets/audio/dontClickSound.mp3';

import { useEffect } from 'react';

const useAudio = () => {

  const [startHover, { pause: pauseHover, stop: endHover }] = useSound(optionHoverSound);
  // const [startBgm, {stop: stopBgm}] = useSound(cardsBGM, {loop: true});
  const [startGen, {stop: stopGen}] = useSound(generateSound);
  // const [startAffect, { pause: pauseAffect, stop: stopAffect}] = useSound(affectionSound, {loop: true});
  const [startFlip, { pause: pauseFlip, stop: endFlip }] = useSound(cardFlipSound);
  const [startDont] = useSound(dontClickSound);


  //========= HOVER AUDIO ============// 
  const handleOptionHover = () => {
    startHover();
  };
  const handleOptionLeave = () => {
    pauseHover();
    endHover();
  };
   //========= HOVER AUDIO ============// 
//////////////////////////////////////////////////
   //========= BGM AUDIO ============// 
//   const handlePlayBgm = () => {
//     startBgm();
//   }
//   const handleStopBgm = () => {
//     stopBgm();
//   }
  //========= BGM AUDIO ============//
//////////////////////////////////////////////////
  //========= GEN AUDIO ============// 
  const handlePlayGen = () => {
    startGen();
  }
  const handleStopGen = () => {
    stopGen();
  }
  //========= GEN AUDIO ============//
 ////////////////////////////////////////////////
//  const handlePlayAffect = () => {
//   startAffect();
// }
// const handleStopAffect = () => {
//   pauseAffect();
//   stopAffect();
// }
//========= GEN AUDIO ============//
const handleCardFlip = () => {
  startFlip();
};

const handleDontFlip = () => {
  startDont();
};

  return {handleOptionHover, handleOptionLeave, handlePlayGen, handleStopGen, handleCardFlip, startFlip, handleDontFlip}
}

export default useAudio;
