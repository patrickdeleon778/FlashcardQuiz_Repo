import useSound from 'use-sound';

import cardsBGM from '../assets/audio/Persona 4 Heartbeat Heartbreak.mp3';
import generateSound from '../assets/audio/selectCatAudio.mp3';
import affectionSound from '../assets/audio/your affection.mp3';
import optionHoverSound from '../assets/audio/optionHover.mp3';

const useAudio = () => {

    const [play] = useSound(optionHoverSound, {
        
    })

    // const handleOptionHover = () => {
    //     if (hoverAudioRef.current) {
    //       hoverAudioRef.current.play();
    //     }
    //   };
    
    //   const handleOptionLeave = () => {
    //     if (hoverAudioRef.current) {
    //       hoverAudioRef.current.pause();
    //       hoverAudioRef.current.currentTime = 0;
    //     }
    //   };

  return {}
}

export default useAudio;
