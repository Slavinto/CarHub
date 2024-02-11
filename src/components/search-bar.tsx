"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { SearchButton, SearchManufacturer } from ".";
import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("");
    const [carModel, setCarModel] = useState("");
    const router = useRouter();

    const searchParams = useSearchParams();
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!manufacturer && !carModel) {
            return alert("Please fill in search fields");
        }

        if (manufacturer) {
            params.set("manufacturer", manufacturer);
        }

        if (carModel) {
            params.set("car-model", carModel);
        }

        // console.log(params.toString());
        const query = params.toString() === "" ? "" : `?${params.toString()}`;
        router.push(`/api/search${query}`);
    };

    const updateSearchParams = (make: string, model: string) => {};

    return (
        <form onSubmit={handleSearch} className='searchbar'>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image
                    src={"/static/images/model-icon.png"}
                    width={25}
                    height={25}
                    alt='car model'
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input
                    type='text'
                    placeholder='Tiguan'
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className='searchbar__input'
                />
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    );
};

export default SearchBar;
