package com.hash.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hash.tag.model.Enquiry;


public interface EnquiryRepository extends JpaRepository<Enquiry,Long> {
    public Enquiry findByEid(Long eid);
}
