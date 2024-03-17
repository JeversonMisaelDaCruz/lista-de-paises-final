import Image from "next/image";
import Link from "next/link";

export type Country = {
  name: {
    common: string;
  };  

  translations: {
    por: {
      common: string;
    };
  };

  flags: {
    png: string;
    alt: string;
  };

  capital: string;
  region: string;
  subregion: string;
  population: number;
  languages?: {
    [key: string]: string;
  };

  borders?: string[];
  cca3: string;
};

export default async function Home() {
  const req = await fetch("https://restcountries.com/v3.1/all");
  const res = await req.json();
  const countries = res;
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {countries.map((country: Country) => (
        <Link key={country.name.common} href={`/paises/${country.name.common}`}>
          <div className=" flex flex-col w-64 h-64 bg-white rounded-md border border-gray-100 items-center py-10">
            <Image
              src={country.flags.png}
              width={200}
              height={40}
              alt={country.name.common}
            />
            <p className="font-bold">{country.name.common}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
