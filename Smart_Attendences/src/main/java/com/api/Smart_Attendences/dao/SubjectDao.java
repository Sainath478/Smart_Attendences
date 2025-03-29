package com.api.Smart_Attendences.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.api.Smart_Attendences.entities.Subject;

@Repository
public class SubjectDao {
	@Autowired
	private SessionFactory factory;

	public Subject getSubjectById(long subjectId) {
		Session session = null;
		Subject subject = null;
		try {
			session = factory.openSession();
			subject = session.get(Subject.class, subjectId);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return subject;
	}

	public List<Subject> getAllSubjects() {
		Session session = null;
		List<Subject> list = null;
		try {
			session = factory.openSession();
			CriteriaBuilder cb = session.getCriteriaBuilder();
			CriteriaQuery<Subject> cq = cb.createQuery(Subject.class);
			Root<Subject> root = cq.from(Subject.class);
			cq.select(root);
			list = session.createQuery(cq).getResultList();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return list;
	}

	public Subject createSubject(Subject subject) {
		Session session = null;
		Subject sub = null;
		try {
			session = factory.openSession();
			Transaction transaction = session.beginTransaction();

			CriteriaBuilder cb = session.getCriteriaBuilder();
			CriteriaQuery<Subject> cq = cb.createQuery(Subject.class);
			Root<Subject> root = cq.from(Subject.class);
			Predicate predicate = cb.equal(root.get("name"), subject.getName());
			cq.where(predicate);

			List<Subject> list = session.createQuery(cq).getResultList();
			if (list.isEmpty()) {
				session.save(subject);
				transaction.commit();
				sub = subject;
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return sub;
	}

	public Subject updateSubject(Subject subjectDetails) {
		Session session = null;
		Subject sub = null;
		try {
			session = factory.openSession();
			Transaction transaction = session.beginTransaction();
			session.update(subjectDetails);
			transaction.commit();
			sub = subjectDetails;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return sub;
	}

	public String deleteSubject(long id) {
		Session session = null;
		String msg = null;
		try {
			session = factory.openSession();
			Transaction transaction = session.beginTransaction();
			Subject subject = session.get(Subject.class, id);
			if (subject != null) {
				session.delete(subject);
				transaction.commit();
				msg = "deleted";
			} else {
				msg = "not found";
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
}
