import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || '',
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div id="catalog" className="mt-12 container padding-y">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, i) => <CarCard key={i} car={car} />)}
            </div>  
            <ShowMore 
              page={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <section className="home__error-container">
            <h2 className="text-black text-xl font-bold">Ooops, no results.</h2>
            <p>{allCars?.message}</p>
          </section>
        )}
      </div>
    </main>
  )
}
