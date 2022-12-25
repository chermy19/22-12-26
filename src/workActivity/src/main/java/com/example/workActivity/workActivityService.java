package com.example.workActivity;

import java.util.Map;

import org.springframework.stereotype.Service;


public interface workActivityService {

	public String setStart(String id, String activityUnit, boolean isStart);
	
	public String setFinish(String id, String activityUnit);
	
	public String activityPoseTime(String id, int activityNumber, String activityUnit, String posDuration);
	
	public boolean invokeActivityList(int totalNumber, String[] activity, String id, int jobSeq);
	
	public int[] lengthOfUnfinishedActivity(String[] ids);
	
}
