package com.example.bookmarks.dtos;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BookmarkResponse {

    private Integer id;

    private String title;

    private String description;

    private String link;
}
