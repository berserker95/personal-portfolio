'use client'
import endpoints from "./constants/endpoints"
import useFetchData from "./hooks/useFetchData"

export default function Home() {
  const {data} = useFetchData(endpoints.home)
  return (
    <h1 className="font-medium leading-normal lg:text-5xl md:text-3xl sm:text-2xl">{data?.name}</h1>
  )
}
