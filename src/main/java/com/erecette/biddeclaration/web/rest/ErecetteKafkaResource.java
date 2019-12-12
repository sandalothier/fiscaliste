package com.erecette.biddeclaration.web.rest;

import com.erecette.biddeclaration.service.ErecetteKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/erecette-kafka")
public class ErecetteKafkaResource {

    private final Logger log = LoggerFactory.getLogger(ErecetteKafkaResource.class);

    private ErecetteKafkaProducer kafkaProducer;

    public ErecetteKafkaResource(ErecetteKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.send(message);
    }
}
