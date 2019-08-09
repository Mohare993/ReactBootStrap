package com.springproject.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springproject.entities.Personal;
import com.springproject.repository.PersonalRepository;

@CrossOrigin
@RestController
public class FirstController {

	@Autowired
	private PersonalRepository repo;

	@RequestMapping(value = "/show/{id}", method = RequestMethod.GET)
	public String ShowRecord(@PathVariable("id") int id) {
		Optional<Personal> p = repo.findById(id);
		if (p.isPresent()) {
			Personal student = p.get();
			return "" + student.getFirstname();
		} else {
			return "hello my inferiors";
		}
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public String deleteRecord(@PathVariable("id") int id) {
		Optional<Personal> p = repo.findById(id);
		if (p.isPresent()) {
			Personal student = p.get();
			repo.delete(student);
			return "DELETED";
		} else {
			return "CAN'T DELETE ME !";
		}
	}
	
	@RequestMapping(value = "/showAll", method = RequestMethod.GET)
	public List<Personal> showAllRecord() {
		List<Personal> records = repo.findAll();
			return records;
		
	}
	
	@RequestMapping(value = "/createP", method = RequestMethod.POST)
	public void saveRecord(@RequestBody Personal x) {
		repo.save(x);
		
	}
	
	@RequestMapping(value = "/update/{id}", method = RequestMethod.POST)
	public String updateRecord(@PathVariable("id") int id,@RequestBody Personal x) {
		Optional<Personal> p = repo.findById(id);
		if (p.isPresent()) {
			Personal student = p.get();
			student.setFirstname(x.getFirstname());
			student.setLastname(x.getLastname());
			student.setLocation(x.getLocation());
			
			repo.save(student);
			
			return "UPDATED !!";
		} else {
			return "CAN'T UPDATE ME !";
		}
	}
	

}
