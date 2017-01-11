/**
 * @file calendar.js
 * @description using fullcalendar & google calendar api
 * to create calendar for events and reservations.
 * 
 */
 
 // event object api https://fullcalendar.io/docs/event_data/Event_Object/
 
 
 $(document).ready(function() {
     $('#calendar').fullCalendar({
         googleCalendarApiKey: 'AIzaSyBqu8fpDffsykctr0J768sDhElUffvmAcs',
         events: {
             googleCalendarId: 'moe2gacmq4iv9740322rb1uhtc@group.calendar.google.com',
             className: 'gcal-event' //optional?
         }
     });
     
     $('#calendar').fullCalendar(
      'renderEvent', 
      { title: 'foo event', start: '2017-01-10' }, 
      true);
 });