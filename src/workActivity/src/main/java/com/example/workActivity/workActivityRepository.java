package com.example.workActivity;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class workActivityRepository {

	private final JdbcTemplate jdbc;
	
	@Autowired
	public workActivityRepository(JdbcTemplate jdbcTemplate) {
		this.jdbc=jdbcTemplate;
	}
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");
	
	public String setStartLog(String id, String activityUnit, boolean isStart) {
		// TODO Auto-generated method stub
		String startedTime;
		startedTime = LocalTime.now().format(formatter);
		jdbc.update("UPDATE activity SET activeStat ="+startedTime+
				"WHERE id="+id+
				"AND activity="+activityUnit);		
		return startedTime;
	}

	public String setFinished(String id, String activityUnit) {
		// TODO Auto-generated method stub
		String timeAt = LocalTime.now().format(formatter);
		jdbc.update("UPDATE activity SET isFinish='"+timeAt+
				"' WHERE id='"+id+
				"' AND activity='"+activityUnit+"'");
		return timeAt;
	}

	public void setPoseTime(String id, int activityNumber, String activityUnit, String poseDuration) {
		// TODO Auto-generated method stub
		jdbc.execute("INSERT INTO poseperiod VALUES ("+id+", "+activityNumber+", "+activityUnit+", "+poseDuration+")");
	}

	public boolean registerActivity(int totalNumber, String[] activity, String id, int jobSeq) {
		// TODO Auto-generated method stub
		for(int i=0; i<totalNumber; i++) {
			jdbc.execute("INSERT INTO activity (id, seq, jobSeq, activity) VALUES ('"+id+
					"', "+i+
					", "+jobSeq+
					", '"+activity[i]+
					"')");
		}
		return true;
	}
	
	public Integer totalActivityNum(String id) {
		return jdbc.queryForObject("SELECT count(*) FROM activity WHERE id='"+id+"'", Integer.class);
	}

	public Integer remainedActivity(String id) {
		// TODO Auto-generated method stub
		return jdbc.queryForObject("SELECT count(*) FROM activity WHERE isFinish is null AND activeStat is not null AND id='"+id+"'", Integer.class);
	}
	
	private RowMapper<workActivity> rowMapper = BeanPropertyRowMapper.newInstance(workActivity.class);
	
	public List<workActivity> getUserWorkActivity(String id) {
		return jdbc.query("SELECT * FROM activity WHERE id='"+id+"'", rowMapper);
	}
	
}
