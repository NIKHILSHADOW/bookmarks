import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookmarkService from "../../services/bookmarkservices/BookmarkService";


const AddBookmarkForm = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');

    const [id, setId] = useState('');


    const navigator = useNavigate();
    const { searchTitle } = useParams();



    useEffect(() => {
        BookmarkService
            .getBookmarkByTitle(searchTitle)
            .then(res => res.data)
            .then(res => {
                if (res) {
                    setDescription(res.description)
                    setTitle(res.title)
                    setLink(res.link)
                    setId(res.id)
                }
            })
    }, [])


    function addBookmarkSubmit(e) {
        e.preventDefault();
        const bookmark = {};
        bookmark.title = title;
        bookmark.description = description;
        bookmark.link = link;

        if (searchTitle) {
            BookmarkService
                .updateBookmarkById(id, bookmark)
                .then(res => {
                    navigator('/bookmark-list')
                    return res.data
                })
        } else {
            BookmarkService
                .addBookmark(bookmark)
                .then(res => {
                    navigator('/bookmark-list')
                    return res.data
                });
        }

    }


    return (
        <>
            <div className="container">
                <div className="card col-md-6 m-auto">
                    <h2 className="text-center">Bookmark Form</h2>
                    <br></br>
                    <form>
                        <table className="table table-bordered table-striped text-center">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <label> Title </label>
                                    </th>
                                    <td>
                                        <input type='text' value={title} required={true} onChange={(e) => setTitle(e.target.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label> Description </label>
                                    </th>
                                    <td>
                                        <input type='text' value={description} required={true} onChange={(e) => setDescription(e.target.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <label> Link </label>
                                    </th>
                                    <td>
                                        <input type='text' value={link} required={true} onChange={(e) => setLink(e.target.value)}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <button className="btn btn-success" onClick={(e) => addBookmarkSubmit(e)}> Submit </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div >
        </>
    )

}


export default AddBookmarkForm;