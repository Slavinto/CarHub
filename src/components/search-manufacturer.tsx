"use client";

import { ChangeEvent, useState, Fragment } from "react";
import Image from "next/image";
import { Combobox, Transition } from "@headlessui/react";

import { manufacturers } from "@/data";
import type { SearchManufacturerComponent } from "@/types";

const SearchManufacturer: SearchManufacturerComponent = ({
    manufacturer,
    setManufacturer,
}) => {
    const [query, setQuery] = useState(manufacturer);

    const filteredManufacturers = query
        ? manufacturers.filter((item) =>
              item.toLowerCase().includes(query.toLowerCase())
          )
        : [];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!!e.target.value) setQuery(e.target.value);
    };

    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    <Combobox.Button className={"absolute top-[14px]"}>
                        <Image
                            src={"/static/images/car-logo.svg"}
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='Car logo'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className={"search-manufacturer__input"}
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={handleChange}
                    ></Combobox.Input>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                            {filteredManufacturers.length > 0 ? (
                                filteredManufacturers.map((option) => (
                                    <Combobox.Option
                                        className={({ active, selected }) => `
                                        relative search-manufacturer__option ${
                                            active
                                                ? "bg-primary-blue text-white"
                                                : "text-gray-900"
                                        }`}
                                        key={option}
                                        value={option}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {option}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            active
                                                                ? "text-white"
                                                                : "text-teal-600"
                                                        }`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            ) : (
                                <Combobox.Option
                                    className={"search-manufacturer__option"}
                                    value={""}
                                >
                                    {"Nothing Found"}
                                </Combobox.Option>
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
