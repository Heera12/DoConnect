package com.wipro.capstoneproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class DisplayController {
	
	/*
	 * @Autowired private RestTemplate restTemplate;
	 */
	
	@GetMapping("/home")
    public String home(@RequestParam(required=true) String name, Model model) {
		model.addAttribute(name, model);
    	return "home";
        }
	
		/*
		 * @RequestMapping(value="/chat", method= RequestMethod.GET) public RestTemplate
		 * getApplication() {
		 * 
		 * RestTemplate rest = restTemplate.getForObject("http://localhost:8081",
		 * RestTemplate.class);
		 * 
		 * return rest ;
		 * 
		 * }
		 */

}
