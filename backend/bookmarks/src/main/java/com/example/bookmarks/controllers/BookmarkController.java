package com.example.bookmarks.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookmarks.dtos.BookmarkRequest;
import com.example.bookmarks.dtos.BookmarkResponse;
import com.example.bookmarks.services.BookmarkService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v0/bookmarks")
@CrossOrigin("*")
public class BookmarkController {

    private BookmarkService bookmarkService;

    @GetMapping("/")
    public List<BookmarkResponse> getAllBookmarks() {
        return bookmarkService.getAllBookMarks();
    }

    @GetMapping("/{title}")
    public BookmarkResponse getBookmarkById(@PathVariable("title") String title) {
        return bookmarkService.getBookMarkByTitle(title);
    }

    @PostMapping("/")
    public BookmarkResponse addBookmark(@RequestBody BookmarkRequest bookmarkRequest) {
        return bookmarkService.addBookmark(bookmarkRequest);
    }

    @PatchMapping("/{id}")
    public BookmarkResponse updateBookmark(@PathVariable("id") Integer id,
            @RequestBody BookmarkRequest bookmarkRequest) {
        return bookmarkService.updateBookmark(id, bookmarkRequest);
    }

    @DeleteMapping("/{id}")
    public void deleteBookMarkById(@PathVariable("id") Integer id) {
        bookmarkService.deleteBookMarkById(id);
    }

}
