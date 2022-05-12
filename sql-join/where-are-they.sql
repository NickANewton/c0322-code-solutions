select "a"."line1",
       "city"."name" as "city",
       "a"."district",
       "c"."name" as "country"
from "addresses" as "a"
join "cities" as "city" using ("cityId")
join "countries" as "c" using ("countryId");
