package com.example.bookmarks.mappers;

import com.example.bookmarks.dtos.BookmarkRequest;
import com.example.bookmarks.dtos.BookmarkResponse;
import com.example.bookmarks.models.Bookmark;

public class BookmarksMapper {
    public static BookmarkResponse toBookmarkResponse(Bookmark bookmark) {
        return BookmarkResponse
                .builder()
                .id(bookmark.getId())
                .title(bookmark.getTitle())
                .description(bookmark.getDescription())
                .link(bookmark.getLink())
                .build();
    }

    public static Bookmark toBookmark(BookmarkRequest bookmarkRequest) {
        return Bookmark
                .builder()
                .title(bookmarkRequest.getTitle())
                .description(bookmarkRequest.getDescription())
                .link(bookmarkRequest.getLink())
                .build();
    }

}
