// Action creator

//If we would export multiple functions from a single file
// It's a named exports
export const selectSong = (song) => {
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

// If we only export one function
//export default selectSong;

//At the import file
//We don't need any { }

