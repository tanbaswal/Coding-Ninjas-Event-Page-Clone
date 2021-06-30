# Coding-Ninjas-Event-Page-Clone


Coding Ninjas Event Page Clone using React,Axios and pagination technique

This page can be accessed through this link: https://www.codingninjas.com/events

These events are divided into 4 categories which are ‘Coding Events’, ‘Bootcamp Events’, ‘Webinars’ and ‘Workshops’. Further in each categories, there are 3 sub categories: 
‘Upcoming’, ‘Archived’ and ‘All Time Favorites’. 


There’s also a section which lists all the tags and allows further filtering of these events via these tags. You can select multiple tags as well, When using multiple tags, events which have either of the selected tags will be filtered.

Since there can be a lot of these events, we have to use pagination so that max of 20 events are shown at once.

There are 2 APIs used to build this page

Event Tags API: It’s a GET request which fetches a list of tags required for Tag Filter. 
Endpoint: https://api.codingninjas.com/api/v3/event_tags



Event List API: It’s also a GET request which fetches a list of events on the basis of given params.
Endpoint: https://api.codingninjas.com/api/v3/events

It accepts 4 params

event_category: Filters the events by Category, It accepts one of the 5 values from: 

CODING_EVENT, WEBINAR, BOOTCAMP_EVENT, WORKSHOP, ALL_EVENTS


   event_sub_category: Filters the events by sub category. 
   
   Each of the above 5 categories have 3 subcategories i.e. ‘Upcoming’, ‘Archived’ and ‘All Time Favorites’


   tag_list: List of selected tags.


   offset: Offsets the events by the given number



