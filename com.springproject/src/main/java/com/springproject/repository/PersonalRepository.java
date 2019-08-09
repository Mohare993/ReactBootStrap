package com.springproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springproject.entities.Personal;

@Repository
public interface PersonalRepository extends JpaRepository<Personal, Integer> {

}
