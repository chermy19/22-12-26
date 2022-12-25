package com.example.workActivity;

public class workFinished {
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getActUnit() {
		return actUnit;
	}
	public void setActUnit(String actUnit) {
		this.actUnit = actUnit;
	}
	@Override
	public String toString() {
		return "workFinished [id=" + id + ", actUnit=" + actUnit + "]";
	}
	private String id;
	private String actUnit;
}
