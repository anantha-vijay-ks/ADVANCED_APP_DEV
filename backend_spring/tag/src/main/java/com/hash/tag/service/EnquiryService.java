package com.hash.tag.service;

import java.util.Optional;
import com.hash.tag.model.Enquiry;

public interface EnquiryService {
    String addEnquiry(EnquiryService enquiryRequest);
    Optional<Enquiry> getAllEnquiries();
    Optional<Enquiry> getEnquiryByID(Long id);


}