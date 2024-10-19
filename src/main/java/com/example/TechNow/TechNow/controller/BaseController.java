package com.example.TechNow.TechNow.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class BaseController {

	protected ResponseEntity<Object> buildOkResponse() {
		return new ResponseEntity<>("SUCCESS", HttpStatus.OK);
	}

	protected ResponseEntity<Object> buildOkResponse(Object data) {
		return new ResponseEntity<>(data, HttpStatus.OK);
	}

	protected ResponseEntity<Object> buildCreatedResponse(Object data) {
		return new ResponseEntity<>(data, HttpStatus.CREATED);
	}
}
