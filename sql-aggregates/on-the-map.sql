select "countries"."name" as "country",
        count("cities"."countryId") as "numOfCities"
from "cities"
join "countries" using ("countryId")
group by "country";
