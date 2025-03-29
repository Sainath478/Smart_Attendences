package com.api.Smart_Attendences.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.api.Smart_Attendences.entities.User;
import com.api.Smart_Attendences.model.LoginRequest;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

@Repository
public class UserDao {

	@Autowired
	private SessionFactory factory;

	public User loginUser(LoginRequest request) {
		Session session = null;
		User user = null;
		try {
			session = factory.openSession();
			user = session.get(User.class, request.getUsername());
			if (user != null) {
				if (user.getPassword().equals(request.getPassword())) {
					return user;
				}
			} else {
				return null;
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return null;
	}

	public String deleteUserById(String username) {
		Session session = null;
		String msg = null;
		try {
			session = factory.openSession();
			session.beginTransaction();
			User user = session.get(User.class, username);
			if (user != null) {
				session.delete(user);
				session.getTransaction().commit();
				msg = "User deleted successfully";
			} else {
				msg = "User not found";
			}
		} catch (Exception e) {
			msg = null;
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return msg;
	}

	public User updateUser(User user) {
		Session session = null;
		try {
			session = factory.openSession();
			session.beginTransaction();
			session.update(user);
			session.getTransaction().commit();
			return user;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			if (session != null) {
				session.close();
			}
		}
	}

	public List<User> getAllUser() {
		Session session = null;
		List<User> list = null;
		try {
			session = factory.openSession();
			CriteriaBuilder builder = session.getCriteriaBuilder();
			CriteriaQuery<User> query = builder.createQuery(User.class);
			Root<User> root = query.from(User.class);
			query.select(root);
			list = session.createQuery(query).getResultList();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return list;
	}

	public User getUserByName(String username) {
		Session session = null;
		User user = null;
		try {
			session = factory.openSession();
			user = session.get(User.class, username);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return user;
	}

	public User registerUser(User user) {
		Session session = null;
		try {
			session = factory.openSession();
			session.beginTransaction();
			User user2 = session.get(User.class, user.getUsername());
			if (user2 == null) {
				session.save(user);
				session.getTransaction().commit();
				return user;
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return null;
	}

	public List<User> getAllAdmins() {
		Session session = null;
		List<User> list = null;
		try {
			session = factory.openSession();
			CriteriaBuilder builder = session.getCriteriaBuilder();
			CriteriaQuery<User> query = builder.createQuery(User.class);
			Root<User> root = query.from(User.class);
			query.select(root).where(builder.equal(root.get("role"), "admin"));
			list = session.createQuery(query).getResultList();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return list;
	}

	public List<User> getAllFaculties() {
		Session session = null;
		List<User> list = null;
		try {
			session = factory.openSession();
			CriteriaBuilder builder = session.getCriteriaBuilder();
			CriteriaQuery<User> query = builder.createQuery(User.class);
			Root<User> root = query.from(User.class);
			query.select(root).where(builder.equal(root.get("role"), "faculty"));
			list = session.createQuery(query).getResultList();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return list;
	}
}
