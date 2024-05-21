package com.example.bookmarks.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookmarks.models.Bookmark;

@Repository
public interface BookMarkRepository extends JpaRepository<Bookmark, Integer> {
    public Optional<Bookmark> findByTitle(String title);
}
