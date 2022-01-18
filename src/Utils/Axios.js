import axios from "axios";

export const getAllGenres = () => {

    return axios.get("https://rhythm-server.herokuapp.com/genres");
}


// ARTIST

export const LoginArtist = (payload) => {

    return axios.post(`https://rhythm-server.herokuapp.com/login`, payload);
}


export const updateArtistData = (id, payload) => {

    return axios.patch(`https://rhythm-server.herokuapp.com/artists/${id}`, payload);
}



// ALBUM

export const loadAllAlbums = ({genres, page, sort}) => {

    return axios.get(`https://rhythm-server.herokuapp.com/albums?Genre=${genres || ""}&page=${page || 1}&Sort=${sort || ""}`);
}

export const newAlbum = (payload) => {

    return axios.post(`https://rhythm-server.herokuapp.com/albums`, payload);
}

export const aAlbum = (id) => {

    return axios.get(`https://rhythm-server.herokuapp.com/albums/${id}`);
}

export const debounceAlbums = (payload) => {
    
    return axios.get(`https://rhythm-server.herokuapp.com/albums/api/search?q=${payload}`);
}

export const changeAlbum = (id, payload) => {

    return axios.patch(`https://rhythm-server.herokuapp.com/albums/${id}`, payload);
}

export const rmAlbum = (id) => {

    return axios.delete(`https://rhythm-server.herokuapp.com/albums/${id}`);
}



// SONG

export const loadAllSongs = (page) => {

    return axios.get(`https://rhythm-server.herokuapp.com/songs?page=${page || 1}`);
}

export const newSong = (payload) => {

    return axios.post(`https://rhythm-server.herokuapp.com/songs`, payload);
}

export const aSong = (id) => {

    return axios.get(`https://rhythm-server.herokuapp.com/songs/${id}`);
}

export const changeSong = (id, payload) => {

    return axios.patch(`https://rhythm-server.herokuapp.com/songs/${id}`, payload);
}

export const rmSong = (id) => {

    return axios.delete(`https://rhythm-server.herokuapp.com/songs/${id}`);
}



// GENRE

export const loadAllGenres = () => {

    return axios.get(`https://rhythm-server.herokuapp.com/genres`);
}

export const newGenre = (payload) => {

    return axios.post(`https://rhythm-server.herokuapp.com/genres`, payload);
}

export const aGenre = (id) => {

    return axios.get(`https://rhythm-server.herokuapp.com/genres/${id}`);
}

export const changeGenre = (id, payload) => {

    return axios.patch(`https://rhythm-server.herokuapp.com/genres/${id}`, payload);
}

export const rmGenre = (id) => {

    return axios.delete(`https://rhythm-server.herokuapp.com/genres/${id}`);
}