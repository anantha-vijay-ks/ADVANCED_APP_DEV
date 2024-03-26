package com.hash.tag.service;

import com.hash.tag.dto.request.LoginRequest;
import com.hash.tag.dto.request.RegisterRequest;
import com.hash.tag.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);
}
