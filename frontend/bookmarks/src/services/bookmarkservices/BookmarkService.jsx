import axios from "axios";


const API_URL = 'http://localhost:8080/api/v0/bookmarks/';


class BookmarkService {

    getAllBookmarks() {
        return axios.get(API_URL);
    }

    getBookmarkByTitle(title) {
        return axios.get(API_URL + title);
    }

    addBookmark(bookmark) {
        return axios.post(API_URL, bookmark);
    }

    updateBookmarkById(id, bookmark) {
        return axios.patch(API_URL + id, bookmark);
    }

    deleteBookmarkById(id) {
        return axios.delete(API_URL + id);
    }
}


export default new BookmarkService();