import { combineReducers } from 'redux';
import { selectSong } from '../actions';

//THis reducer serve static data
const songsReducer = () => {
    return [
        { title: 'Start to leave', duration: '4:05' },
        { title: 'Time to say goodbye', duration: '5:00' },
        { title: 'Doraemon', duration: '3:19' },
        { title: 'Sunshine', duration: '7:08' }
    ];
};

//default value without selected song, so we initialize with null
const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});