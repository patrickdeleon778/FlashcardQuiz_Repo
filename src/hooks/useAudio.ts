import useSound from 'use-sound';

import cardsBGM from '../assets/audio/Persona 4 Heartbeat Heartbreak.mp3';
import generateSound from '../assets/audio/selectCatAudio.mp3';
import affectionSound from '../assets/audio/your affection.mp3';
import optionHoverSound from '../assets/audio/optionHover.mp3';
import { useEffect } from 'react';

const useAudio = () => {

  const [startHover, { pause: pauseHover, stop: endHover }] = useSound(optionHoverSound);
  const [startBgm, {stop: stopBgm}] = useSound(cardsBGM, {loop: true});
  const [startGen, {stop: stopGen}] = useSound(generateSound);
  const [startAffect, { pause: pauseAffect, stop: stopAffect}] = useSound(affectionSound, {loop: true});


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
  

  return {handleOptionHover, handleOptionLeave, handlePlayGen, handleStopGen}
}

export default useAudio;
