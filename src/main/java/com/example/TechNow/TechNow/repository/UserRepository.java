package com.example.TechNow.TechNow.repository;


import com.example.TechNow.TechNow.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String>, JpaSpecificationExecutor<User> {
	Optional<User> findByEmail(String email);

	@Query("select u from User u")
	Page<User> findAllUsers(Specification<User> specification, Pageable pageable);
}
