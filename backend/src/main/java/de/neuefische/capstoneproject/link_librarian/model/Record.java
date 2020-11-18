package de.neuefische.capstoneproject.link_librarian.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Record {

private String id;
private String recordLink;
private String description;
private Instant timestamp;
private boolean publicStatus;
private List<String> tagsList;

}