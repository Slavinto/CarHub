import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";

import { fetchCarsApi } from "@/utils";

export default async function Home() {
    const allCars = await fetchCarsApi();

    return (
        <main className='overflow-hidden'>
            <Hero />
            <div className='mt-12 padding-x padding-y max-width ' id='discover'>
                <div className='home__text-container'>
                    <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
                    <p className=''>Explore the cars you might like</p>
                </div>
                <div className='home__filters'>
                    <SearchBar />
                    <div className='home__filter-container'>
                        <CustomFilter title='fuel' />
                        <CustomFilter title='year' />
                    </div>
                </div>
            </div>
            <section>
                {!!allCars && Array.isArray(allCars) && allCars.length > 0 ? (
                    <div className='home__cards-wrapper'>
                        {allCars.map((car, id) => (
                            <CarCard key={id} car={car} />
                        ))}
                    </div>
                ) : (
                    <div className='home__error-container'>
                        <h2 className='text-black text-xl font-bold'>
                            Something went wrong:
                        </h2>
                        <p>{JSON.stringify(allCars)}</p>
                    </div>
                )}
            </section>
        </main>
    );
}
