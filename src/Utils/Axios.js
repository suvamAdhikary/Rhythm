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

export const loadAllAlbums = (page) => {

    return axios.get(`https://rhythm-server.herokuapp.com/albums?page${page || 1}`);
}

export const newAlbum = (payload) => {

    return axios.post(`https://rhythm-server.herokuapp.com/albums`, payload);
}

export const aAlbum = (id) => {

    return axios.get(`https://rhythm-server.herokuapp.com/albums/${id}`);
}

export const changeAlbum = (id, payload) => {

    return axios.patch(`https://rhythm-server.herokuapp.com/albums/${id}`, payload);
}

export const rmAlbum = (id) => {

    return axios.delete(`https://rhythm-server.herokuapp.com/albums/${id}`);
}



// SONG

export const loadAllSongs = (page) => {

    return axios.get(`https://rhythm-server.herokuapp.com/songs?page${page || 1}`);
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