package com.example.workActivity;

import java.time.LocalTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class workActivityServiceImpl implements workActivityService{
	
	@Autowired
	workActivityRepository repo;
	private final LocalTime d = LocalTime.of(18, 0);
	
	@Override
	public String setStart(String id, String activityUnit, boolean isStart) {
		// TODO Auto-generated method stub
		return repo.setStartLog(id, activityUnit, isStart);
	}

	@Override
	public String setFinish(String id, String activityUnit) {
		// TODO Auto-generated method stub
		return repo.setFinished(id, activityUnit);
	}

	@Override
	public String activityPoseTime(String id, int activityNumber, String activityUnit, String poseDuration) {
		// TODO Auto-generated method stub
		repo.setPoseTime(id, activityNumber, activityUnit, poseDuration);
		return null;
	}
	
	public int[] totalActivityNum(String[] ids) {
		int[] totNums = new int[ids.length];
		for(int i=0; i<ids.length; i++) {
			int totNum = repo.totalActivityNum(ids[i]);;
			totNums[i]=totNum;
		}
		return totNums;
	}

	@Override
	public boolean invokeActivityList(int totalNumber, String[] activity, String id, int jobSeq) {
		// TODO Auto-generated method stub
		return repo.registerActivity(totalNumber, activity, id, jobSeq);
	}
	
	public List<workActivity> getUserWorkActivity(String id) {
		return repo.getUserWorkActivity(id);
	}
	
	public int[] lengthOfUnfinishedActivity(String[] ids) {
		int[] lengthOfUnfinished = new int[ids.length];
		for(int i=0; i<ids.length; i++) {
			int remainedCount = repo.remainedActivity(ids[i]);
			lengthOfUnfinished[i]=remainedCount;
		}
		return lengthOfUnfinished;
	}
	
}
