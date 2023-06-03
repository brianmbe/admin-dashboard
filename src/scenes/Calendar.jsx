import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "./global/Header";
import { tokens } from "../theme/theme";

export default function Calendar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateclick = (selected) => {
    const title = prompt("Please enter your event title.");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventclick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'?`
      )
    ) {
      selected.event.remove();
    }
  };

  const initialEvents = [
    {
      id: "123",
      title: "Birthday",
      date: "2023-06-03",
    },
    {
      id: "133",
      title: "Birthday",
      date: "2023-06-04",
    },
    {
      id: "121",
      title: "Birthday",
      date: "2023-06-05",
    },
  ];

  return (
    <Box>
      <Header title="Calendar" subtitle="Full calendar interactive page" />

      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[300]}
          borderRadius="4px"
          p="15px"
          height="75vh"
          overflow="auto"
        >
          <Typography variant="h5" color={colors.grey[900]}>
            Events
          </Typography>
          <List>
            {currentEvents.map((event) => {
              const formattedDate = formatDate(event.start, {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <ListItem
                  key={event.id}
                  sx={{
                    bgcolor: colors.greenAccent[500],
                    m: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={<Typography>{formattedDate}</Typography>}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        <Box flex="1 1 100%" pl={3}>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectMirror={true}
            selectable={true}
            dayMaxEvents={true}
            select={handleDateclick}
            eventClick={handleEventclick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={initialEvents}
          />
        </Box>
      </Box>
    </Box>
  );
}
