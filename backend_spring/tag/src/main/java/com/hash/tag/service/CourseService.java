package com.hash.tag.service;

import java.util.Optional;

import com.hash.tag.dto.request.CourseRequest;
import com.hash.tag.model.Course;

public interface CourseService {
    String addCourse(CourseRequest courseRequest);
    Optional<Course> getAllCourses();
    Optional<Course> getCourseByID(Long id);


}
