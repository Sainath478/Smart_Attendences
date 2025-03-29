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

import com.api.Smart_Attendences.entities.AttendanceRecord;

@Repository
public class AttendanceRecordDao {
	@Autowired
	private SessionFactory factory;

	public List<AttendanceRecord> getAllAttendanceRecords() {
		Session session = null;
		List<AttendanceRecord> list = null;
		try {
			session = factory.openSession();
			CriteriaBuilder cb = session.getCriteriaBuilder();
			CriteriaQuery<AttendanceRecord> cq = cb.createQuery(AttendanceRecord.class);
			Root<AttendanceRecord> root = cq.from(AttendanceRecord.class);
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

	public List<AttendanceRecord> getAllAttendanceRecords(String date, long subjectId) {
		Session session = null;
		List<AttendanceRecord> list = null;
		try {
			session = factory.openSession();
			CriteriaBuilder cb = session.getCriteriaBuilder();
			CriteriaQuery<AttendanceRecord> cq = cb.createQuery(AttendanceRecord.class);
			Root<AttendanceRecord> root = cq.from(AttendanceRecord.class);

			Predicate datePredicate = cb.equal(root.get("date"), date);
			Predicate subjectPredicate = cb.equal(root.get("subject").get("id"), subjectId);

			cq.where(cb.and(datePredicate, subjectPredicate));

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

	public AttendanceRecord saveAttendance(AttendanceRecord attendanceRecord) {
		Session session = null;
		AttendanceRecord record = null;
		try {
			session = factory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(attendanceRecord);
			transaction.commit();
			record = attendanceRecord;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return record;
	}
}
