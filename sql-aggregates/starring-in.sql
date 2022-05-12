select "g"."name" as "genres",
        count("fg"."genreId") as "numOfMovies"
from "genres" as "g"
join "filmGenre" as "fg" using ("genreId")
join "films" using ("filmId")
join "castMembers" using ("filmId")
join "actors" using ("actorId")
where "firstName" = 'Lisa' and
      "lastName" = 'Monroe'
group by "genres";
