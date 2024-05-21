package com.example.bookmarks.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.bookmarks.dtos.BookmarkRequest;
import com.example.bookmarks.dtos.BookmarkResponse;

@Service
public interface BookmarkService {

    public List<BookmarkResponse> getAllBookMarks();

    public BookmarkResponse getBookMarkByTitle(String title);

    public BookmarkResponse addBookmark(BookmarkRequest bookmarkRequest);

    public BookmarkResponse updateBookmark(Integer id, BookmarkRequest bookmarkRequest);

    public void deleteBookMarkById(Integer id);
}
