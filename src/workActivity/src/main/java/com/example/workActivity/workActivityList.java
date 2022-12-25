package com.example.workActivity;

import java.util.Arrays;

public class workActivityList {
	@Override
	public String toString() {
		return "workActivityList [activityNumber=" + activityNumber + ", activity=" + Arrays.toString(activity)
				+ ", id=" + id + ", jobSeq=" + jobSeq + "]";
	}
	public int getActivityNumber() {
		return activityNumber;
	}
	public void setActivityNumber(int activityNumber) {
		this.activityNumber = activityNumber;
	}
	public String[] getActivity() {
		return activity;
	}
	public void setActivity(String[] activity) {
		this.activity = activity;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getJobSeq() {
		return jobSeq;
	}
	public void setJobSeq(int jobSeq) {
		this.jobSeq = jobSeq;
	}
	private int activityNumber;
	private String[] activity;
	private String id;
	private int jobSeq;
}
