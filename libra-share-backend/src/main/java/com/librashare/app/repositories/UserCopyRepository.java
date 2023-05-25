package com.librashare.app.repositories;

import com.librashare.app.entities.UserCopy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserCopyRepository extends JpaRepository<UserCopy, Long> {
    @Query("SELECT u from UserCopy u where u.userCopyUser.userId = ?1 and u.userCopyBook.bookId = ?2")
    Optional<UserCopy> findByUserIdAndBookId(@Param("userId") Long userId, @Param("bookId") Long bookId);
}
