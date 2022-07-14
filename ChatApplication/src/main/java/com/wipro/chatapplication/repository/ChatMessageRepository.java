package com.wipro.chatapplication.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.chatapplication.model.ChatMessage;
import com.wipro.chatapplication.model.MessageStatus;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long>{

	long countBySenderIdAndRecipientIdAndStatus(
            String senderId, String recipientId, MessageStatus status);

    List<ChatMessage> findByChatId(String chatId);

}
