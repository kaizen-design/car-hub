"use client";

import { SearchManufacturer } from ".";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ styles }: { styles: string }) => (
  <button type="submit" className={`absolute right-2 z-10 ${styles}`}>
    <Image 
      src="/magnifying-glass.svg"
      alt="Search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const router = useRouter();
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const manufacturer = searchParams.get('manufacturer');
    const model = searchParams.get('model');
    if (manufacturer) setManufacturer(manufacturer);
    if (model) setModel(model);
  }, []);
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === '' && model === '') {
      return alert('Please specify the search params.')
    }

    updateSearchParams(
      manufacturer.toLowerCase(), 
      model.toLowerCase()
    );
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    
    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer')
    }

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model')
    }    

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image 
          src="/model-icon.png"
          alt="Model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input 
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input capitalize"
          placeholder="Tiguan"
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <SearchButton styles="max-sm:hidden" />
    </form>
  )
};

export default SearchBar;