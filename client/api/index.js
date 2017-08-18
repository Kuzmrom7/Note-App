import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/note`);
    },

    createNote(data) {
        return axios.post(`${apiPrefix}/note`, data);
    },

    deleteNote(noteId) {
        return axios.delete(`${apiPrefix}/note/${noteId}`);
    }
}