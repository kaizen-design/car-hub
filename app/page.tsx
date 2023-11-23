import { Hero, SearchBar, CustomFilter } from "@/components";

export default function Home() {
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
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  )
}
