package com.example.workActivity;

public class workActivity {
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public int getJobSeq() {
		return jobSeq;
	}
	public void setJobSeq(int jobSeq) {
		this.jobSeq = jobSeq;
	}
	public String getActivity() {
		return activity;
	}
	public void setActivity(String activity) {
		this.activity = activity;
	}
	public boolean isFinish() {
		return isFinish;
	}
	public void setFinish(boolean isFinish) {
		this.isFinish = isFinish;
	}
	public boolean isWait() {
		return isWait;
	}
	public void setWait(boolean isWait) {
		this.isWait = isWait;
	}
	public String getActiveStat() {
		return activeStat;
	}
	public void setActiveStat(String activeStat) {
		this.activeStat = activeStat;
	}
	private String id;
	private int seq;
	private int jobSeq;
	private String activity;
	private String activeStat;
	private boolean isFinish;
	private boolean isWait;
}
