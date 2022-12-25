package com.example.workActivity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class mainController {

	@Autowired
	workActivityServiceImpl service;
	
	@GetMapping("/main")
	public List<workActivity> main(@RequestParam String id) {
		return service.getUserWorkActivity(id);
	}
	
	@GetMapping("/manager/statics")
	public workStatus hasUnfinishedActivity(@RequestParam String[] workingPeople) {
		workStatus obj1 = new workStatus();
		obj1.setRemainJob(service.lengthOfUnfinishedActivity(workingPeople));
		obj1.setTotJob(service.totalActivityNum(workingPeople));
		return obj1;
	}
	
	@PostMapping("/main/Generate")
	public boolean ActivityList(@RequestBody workActivityList form) {
		System.out.println(form);
		return service.invokeActivityList(form.getActivityNumber(), form.getActivity(), form.getId(), form.getJobSeq());
	}
	
	@PostMapping("/main/setFinish")
	public String setFinish(@RequestBody workFinished form) {
		System.out.println(form);
		return service.setFinish(form.getId(), form.getActUnit());
	}
}
