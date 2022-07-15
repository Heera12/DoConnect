package com.wipro.projectchatapplication.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.projectchatapplication.model.ChatMessage;
import com.wipro.projectchatapplication.model.MessageStatus;



@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long>{

	long countBySenderIdAndRecipientIdAndStatus(
            String senderId, String recipientId, MessageStatus status);

    List<ChatMessage> findByChatId(String chatId);

}
