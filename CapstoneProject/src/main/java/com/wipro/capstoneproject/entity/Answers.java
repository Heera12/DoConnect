package com.wipro.capstoneproject.entity;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.wipro.capstoneproject.dto.AnswersDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="Answers_Table")
public class Answers {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long answerId;
	private String answer;
	public boolean status;
	
	public AnswersDTO convertDto(Answers answers) {
		AnswersDTO answersDTO = new AnswersDTO();
		answersDTO.setAnswerId(answers.getAnswerId());
		answersDTO.setAnswer(answers.getAnswer());
		
		return answersDTO;
		
	}
	
	
	
	
	
	
}
