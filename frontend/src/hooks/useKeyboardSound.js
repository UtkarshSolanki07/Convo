const keyStrokeSounds=[
    new Audio("/sounds/keystroke1.mp3"),
    new Audio("/sounds/keystroke2.mp3"),
    new Audio("/sounds/keystroke3.mp3"),
    new Audio("/sounds/keystroke4.mp3"),
];

/**
 * Provides a function to play a random keystroke sound.
 *
 * Selects one of the predefined keystroke Audio objects, resets its playback position to the start, and attempts to play it (playback errors are logged).
 * @returns {{playRandomKeyStrokeSound: function}} An object containing `playRandomKeyStrokeSound`, which plays a randomly selected keystroke sound.
 */
function useKeyboardSound(){
    const playRandomKeyStrokeSound=()=>{
       const randomSound=keyStrokeSounds[Math.floor(Math.random() * keyStrokeSounds.length)];
       randomSound.currentTime=0;
       randomSound.play().catch(error=>console.log("Error playing sound",error));
    };
    return {playRandomKeyStrokeSound};
};

export default useKeyboardSound;