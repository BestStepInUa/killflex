import { Carousel } from "./carousel/Carousel"
import { Filters } from "./filters/Filters"

export default function Home() {
  return (
  <div className="mt-8 h-[86vh] overflow-y-hidden">
    <h1 className="text-center text-4xl font-bold capitalize">
      Discover unlimited content
    </h1>
    <Filters />
    <Carousel />
  </div>
  )  
}
