

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookmarkService from '../../services/bookmarkservices/BookmarkService';

const Bookmark = () => {

    const { searchTitle } = useParams();


    const [bookmark, setBookmark] = useState({});

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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bookmark
