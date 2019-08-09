package com.springproject.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Personal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String firstname;
	private String lastname;
	private String location;

	
	public Personal() {

	}


	public Personal(String firstname, String lastname, String location) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.location = location;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getFirstname() {
		return this.firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return this.lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getLocation() {
		return this.location;
	}


	public void setLocation(String location) {
		this.location = location;
	}



	

}
