package com.api.Smart_Attendences.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.Smart_Attendences.dao.UserDao;
import com.api.Smart_Attendences.entities.User;
import com.api.Smart_Attendences.model.LoginRequest;


@Service
public class UserService {

	@Autowired
	private UserDao dao;

	public User loginUser(LoginRequest request) {
		return dao.loginUser(request);
	}

	public User registerUser(User user) {
		return dao.registerUser(user);
	}

	public User getUserByName(String username) {
		return dao.getUserByName(username);
	}

	public List<User> getAllUser() {
		return dao.getAllUser();
	}

	public User updateUser(User user) {
		return dao.updateUser(user);
	}

	public String deleteUserById(String username) {
		return dao.deleteUserById(username);
	}

	public List<User> getAllAdmins() {
		return dao.getAllAdmins();
	}
	
	public List<User> getAllFaculties() {
		return dao.getAllFaculties();
	}

}
