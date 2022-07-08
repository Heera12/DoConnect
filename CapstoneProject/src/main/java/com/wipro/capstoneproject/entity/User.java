package com.wipro.capstoneproject.entity;
// admin entity class
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name="User_Details")
public class User {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
private String username;
private String password;

}