package com.api.Smart_Attendences.service;

import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.Smart_Attendences.dao.AttendanceRecordDao;
import com.api.Smart_Attendences.entities.AttendanceRecord;

@Service
public class AttendanceRecordService {
	@Autowired
	private AttendanceRecordDao dao;

	public List<AttendanceRecord> getAllAttendanceRecords() {
		List<AttendanceRecord> records = dao.getAllAttendanceRecords();

		List<AttendanceRecord> distinctAttendanceList = records.stream()
				.collect(Collectors.toCollection(() -> new TreeSet<>(Comparator.comparing(AttendanceRecord::getId))))
				.stream().collect(Collectors.toList());
		return distinctAttendanceList;

	}

	public List<AttendanceRecord> getAllAttendanceRecords(String date, long subjectId) {
		List<AttendanceRecord> records = dao.getAllAttendanceRecords(date, subjectId);

		List<AttendanceRecord> distinctAttendanceList = records.stream()
				.collect(Collectors.toCollection(() -> new TreeSet<>(Comparator.comparing(AttendanceRecord::getId))))
				.stream().collect(Collectors.toList());
		return distinctAttendanceList;

	}

	public AttendanceRecord saveAttendance(AttendanceRecord attendanceRecord) {

		String id = new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date());

		attendanceRecord.setId(id);

		return dao.saveAttendance(attendanceRecord);
	}
}
