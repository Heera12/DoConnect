package com.wipro.chatapplication.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.chatapplication.model.ChatRoom;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom, String> {

	Optional<ChatRoom> findBySenderIdAndRecipientId(String senderId, String recipientId);

}
