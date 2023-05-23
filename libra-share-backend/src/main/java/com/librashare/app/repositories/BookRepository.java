package com.librashare.app.repositories;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.librashare.app.entities.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{ 
}
