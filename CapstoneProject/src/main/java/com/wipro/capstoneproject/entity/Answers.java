package com.wipro.capstoneproject.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Answers {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long answerId;
	private Date createdAt;
	private Date updatedAt;
	private String answer;
	private String question;
}
