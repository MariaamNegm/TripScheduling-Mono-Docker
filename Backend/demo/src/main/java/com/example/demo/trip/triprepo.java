package com.example.demo.trip;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface triprepo extends JpaRepository<trip,Integer> {




    @Query("SELECT s FROM trip s WHERE s.idtrip = ?1")
    trip  searchbyid(int name);






}
