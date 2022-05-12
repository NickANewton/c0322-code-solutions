with "cte_revenue" AS (
  select "films"."title",
          sum("payments"."amount") as "totalRev"
from "payments"
join "rentals" using ("rentalId")
join "inventory" using ("inventoryId")
join "films" using ("filmId")
group by "films"."title"
),

"cte_filmCost" AS (
  select "films"."title",
         "films"."replacementCost" * count("inventory"."filmId") as "totalCost"
from "films"
join "inventory" using ("filmId")
group by "films"."replacementCost", "films"."title"
)

select "films"."title",
       "films"."description",
       "films"."rating",
       "cte_revenue"."totalRev" - "cte_filmCost"."totalCost" as "totalProfit"
from "films"
join "cte_revenue" using ("title")
join "cte_filmCost" using ("title")
order by "totalProfit" desc
limit 5;
