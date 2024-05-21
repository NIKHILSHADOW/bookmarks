package com.example.bookmarks.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Getter
@NoArgsConstructor
public class BookmarkRequest {

    private String title;

    private String description;

    private String link;
}
