import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookmarkService from '../../services/bookmarkservices/BookmarkService';

const BookmarksList = () => {

    const [bookmarks, setBookmarks] = useState([]);

    const [currTitle, setCurrTitle] = useState('');

    const navigator = useNavigate();


    useEffect(() => {
        BookmarkService
            .getAllBookmarks()
            .then(res => res.data)
            .then(res => setBookmarks(res))
    }, [])

    function moveToAddBookmark() {
        navigator('/add-bookmark')
    }

    function deleteBookMark(id) {
        BookmarkService
            .deleteBookmarkById(id)
    }

    function updateBookmark(title) {
        navigator(`/add-bookmark/${title}`)
    }

    function getBookmarkByTitle() {
        navigator(`/bookmark-list/${currTitle}`)
    }

    return (
        <div className="container">
            <h1 className="text-center"> Bookmarks </h1>
            <button className="btn btn-secondary" onClick={() => moveToAddBookmark()}>Add bookmark</button>
            <span className="d-flex justify-content-end">
                <label>search By title : </label>
                <input type="text" onChange={(e) => setCurrTitle(e.target.value)}></input>
                <button className="btn btn-info" onClick={() => getBookmarkByTitle()}>search</button>
            </span>
            <form>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            bookmarks
                                .map(
                                    bookmark => <tr key={bookmark.id}>
                                        <td>{bookmark.id}</td>
                                        <td>{bookmark.title}</td>
                                        <td>{bookmark.description}</td>
                                        <td>{bookmark.link}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={() => updateBookmark(bookmark.title)}>Update</button>
                                            <button className="btn btn-danger" onClick={() => deleteBookMark(bookmark.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default BookmarksList;