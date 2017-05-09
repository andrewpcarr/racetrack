use racetrack_db; 

INSERT INTO Reviews (RaceId, atmosphere, swag, aid_stations, clarity, sighting, transition, bike_hills, road_surface,
run_hills, run_shade, overall, race_again, highlight, comments) VALUES 
(1, 4, 3, 5, 1, 3, 2, 4, 3, 2, 3, 4,  true, "Great beginner_friendly race!", "It's a slog from swim exit to transition, and there
are some real hills on the bike, but overall a great race for rookies and veterans alike"), 
(2, 3, 2, 1, 1, 2, 4, 1, 4, 1, 3, 3, true, "Nice flat closed bike course in downtown Austin", "Sighting on the swim was confusing since there were 
different shapes/colors of buoys to mark the different distances. Needed more aid stations on the run given the heat"), 
(3, 5, 3, 4, 4, 4, 3, 2, 4, 1, 3, 4, true, "Beautiful views of Diamond Head and Waikiki from the bike", "Love this race.  It's perfect for the 
beginner who wants to try a tri."), 
(4, 3, 2, 2, 1, 4, 4, 3, 2, 1, 1, 2, false, "Cool concept for a race", "Zero shade on the run" ), 
(5, 4, 3, 4, 1, 4, 4, 4, 4, 3, 3, 4, true, "Nice laid-back race", "Plenty of hills on the bike, but they are mostly rollers so you get a break with the downhills"), 
(7, 2, 2, 4, 1, 4, 4, 3, 2, 1, 1, 2, false, "Good volunteers", "Lots of rough chip seal on the roads.  Run is flat trail around lake, but 
there is no shade at all."), 
(6, 4, 3, 3, 5, 5, 3, 5, 3, 3, 4, 4, true, "Lovely swim in crystal clear Aquarena Springs", "Weird format with the race being swim, run, bike.
Bike has a long, slogging uphill from miles 9 to 12." ), 
(8, 4, 3, 3, 2, 4, 4, 3, 3, 2, 3, 4, true, "fun race with great atmosphere", "Two transition format can be a challenge, but overall worked really well. 
Nice fast course for the sprint"), 
(9, 5, 5, 4, 5, 4, 4, 4, 4, 3, 3, 5, true, "Saw 5 sea turtles on the swim!", "One of the most beautiful courses out there.  Run is an interesting
mix of road, lava trail, and even a jaunt through a hotel swimming pool area. Race sells out fast"), 
(10, 4, 3, 3, 2, 4, 4, 3, 3, 3, 2, 4, true, "Excellent option for a first time half", "The four loop run for the half was painful.  I understand they're 
changing it for the next race."); 