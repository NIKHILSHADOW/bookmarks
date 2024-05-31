

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookmarkService from '../../services/bookmarkservices/BookmarkService';

const Bookmark = () => {

    const { searchTitle } = useParams();


    const [bookmark, setBookmark] = useState({});

    const navigator = useNavigate()

    useEffect(
        () => {
            BookmarkService
                .getBookmarkByTitle(searchTitle)
                .then(res => res.data)
                .then(res => {
                    setBookmark(res)
                    return res
                })
        }, []
    )

    function moveToBookmarkList() {
        navigator('/bookmark-list')
    }

    return (
        <div className='container'>

            <div className='card'>
                <h2>
                    Bookmark Info
                </h2>
                <br></br>
                <table className='table table-bordered table-centered table-dark'>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <th> Id</th>
                            <td>{bookmark.id}</td>
                        </tr>
                        <tr>
                            <th> Title </th>
                            <td>{bookmark.title}</td>
                        </tr>
                        <tr>
                            <th> Description</th>
                            <td>{bookmark.description}</td>
                        </tr>
                        <tr>
                            <th>Link</th>
                            <td>{bookmark.link}</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                <button className="btn btn-success" onClick={() => moveToBookmarkList()}> Cancel </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bookmark
