"use client";

import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";

import { CarDetailsComponent, Car } from "@/types/component-types";

const CarDetails: CarDetailsComponent = ({ isOpen, toggleModal, car }) => {
    const {
        city_mpg,
        class: car_class,
        combination_mpg,
        cylinders,
        displacement,
        drive,
        fuel_type,
        highway_mpg,
        make,
        model,
        transmission,
        year,
    } = car;

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as={"div"}
                    className={"relative z-10 bg-white"}
                    onClose={toggleModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel
                                    className={
                                        "relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5"
                                    }
                                >
                                    <button
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                        type='button'
                                        onClick={toggleModal}
                                    >
                                        <Image
                                            src={"/static/images/close.svg"}
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                    </button>
                                    <div className='flex flex-1 flex-col gap-3'>
                                        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image
                                                src={"/static/images/hero.png"}
                                                alt={"car image"}
                                                fill
                                                className='object-contain'
                                            />
                                        </div>
                                        <div className='flex gap-3 '>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image
                                                    src={
                                                        "/static/images/hero.png"
                                                    }
                                                    alt={"car image"}
                                                    fill
                                                    className='object-contain'
                                                />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image
                                                    src={
                                                        "/static/images/hero.png"
                                                    }
                                                    alt={"car image"}
                                                    fill
                                                    className='object-contain'
                                                />
                                            </div>
                                            <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                                                <Image
                                                    src={
                                                        "/static/images/hero.png"
                                                    }
                                                    alt={"car image"}
                                                    fill
                                                    className='object-contain'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex flex-1 flex-col gap-2'>
                                        <h2 className='font-semibold text-xl capitalize'>
                                            {car.make} {car.model}
                                        </h2>

                                        {Object.keys(car).map((carKey) => {
                                            const carProp = carKey.replaceAll(
                                                "_",
                                                " "
                                            );
                                            const carPropValue =
                                                car[carKey as keyof Car];
                                            return (
                                                <div
                                                    key={carKey}
                                                    className='flex w-full justify-between gap-5 text-right'
                                                >
                                                    <h4 className='text-gray-500 capitalize '>
                                                        {carProp}
                                                    </h4>
                                                    <p className='text-black-100 font-semibold capitalize'>
                                                        {carPropValue}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default CarDetails;
