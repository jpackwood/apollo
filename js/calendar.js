/**
 * @file calendar.js
 * @description using fullcalendar & google calendar api
 * to create calendar for events and reservations.
 * 
 */
 
 $(document).ready(function() {
     $('#calendar').fullCalendar({
         googleCalendarApiKey: 'AIzaSyBqu8fpDffsykctr0J768sDhElUffvmAcs',
         eventLimit: 3,
         events: {
             googleCalendarId: 'moe2gacmq4iv9740322rb1uhtc@group.calendar.google.com',
             className: 'gcal-event' //optional?
         },
         dayClick: function(date, jsEvent, view) {
   
           // change the day's background color just for fun
           $(this).css('background-color', '#ffc9c9');
           
           $('#calendar').fullCalendar(
           'renderEvent', { 
              title: prompt('Please give us a name and call back number.'), 
              start: date.format() 
           }, true);

        }
     });
     
     // event object api https://fullcalendar.io/docs/event_data/Event_Object/
     $('#calendar').fullCalendar(
      'renderEvent', { 
         title: 'Reserved 3PM-5PM', 
         start: '2017-01-10' 
       
      }, true);
      
      
      /*$('.fc-day-top').click(function(e) {
       
       $('#calendar').fullCalendar(
        'renderEvent', { 
           title: 'Reserved', 
           start: e.target.getAttribute('data-date')
         
        }, true);
      })*/
      
 });