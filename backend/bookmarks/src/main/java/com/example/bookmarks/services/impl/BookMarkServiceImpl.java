package com.example.bookmarks.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Component;

import com.example.bookmarks.dtos.BookmarkRequest;
import com.example.bookmarks.dtos.BookmarkResponse;
import com.example.bookmarks.mappers.BookmarksMapper;
import com.example.bookmarks.models.Bookmark;
import com.example.bookmarks.repositories.BookMarkRepository;
import com.example.bookmarks.services.BookmarkService;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class BookMarkServiceImpl implements BookmarkService {

    private BookMarkRepository bookMarkRepository;

    @Override
    public List<BookmarkResponse> getAllBookMarks() {
        return bookMarkRepository
                .findAll()
                .stream()
                .map(bookmark -> BookmarksMapper.toBookmarkResponse(bookmark))
                .toList();
    }

    @Override
    public BookmarkResponse getBookMarkByTitle(String title) {
        Optional<Bookmark> bookMarkInfo = bookMarkRepository
                .findByTitle(title);

        if (bookMarkInfo.isPresent()) {
            return BookmarksMapper
                    .toBookmarkResponse(bookMarkInfo.get());
        }

        return null;
    }

    @Override
    public BookmarkResponse addBookmark(BookmarkRequest bookmarkRequest) {
        Bookmark bookmark = bookMarkRepository
                .save(BookmarksMapper.toBookmark(bookmarkRequest));
        return BookmarksMapper.toBookmarkResponse(bookmark);
    }

    @Override
    public BookmarkResponse updateBookmark(Integer id, BookmarkRequest bookmarkRequest) {
        Optional<Bookmark> bookmarkInfo = bookMarkRepository
                .findById(id);

        if (bookmarkInfo.isPresent()) {
            Bookmark bookmark = bookmarkInfo.get();
            Bookmark bookmark2 = Bookmark
                    .builder()
                    .id(id)
                    .title((bookmarkRequest.getTitle() != null) ? bookmarkRequest.getTitle() : bookmark.getTitle())
                    .description((bookmarkRequest.getDescription() != null) ? bookmarkRequest.getDescription()
                            : bookmark.getDescription())
                    .link((bookmarkRequest.getLink() != null) ? bookmarkRequest.getLink() : bookmark.getLink())
                    .build();

            return BookmarksMapper
                    .toBookmarkResponse(bookMarkRepository.save(bookmark2));
        }

        return null;
    }

    @Override
    public void deleteBookMarkById(Integer id) {
        bookMarkRepository.deleteById(id);
    }

}
