import { Carousel } from "@material-tailwind/react"; 

const CarouselDef = () => {
  return (
    <div className="relative w-full h-[300px]">
      {/* Search Bar */}
      <div className="absolute top-56 left-1/2 transform -translate-x-1/2 z-10 w-full px-16 max-w-[800px]">

 
    <form action="" className="flex w-full">
      <input
      className="w-full bg-zinc-300 placeholder:text-slate-600 text-zinc-800 text-xl border border-slate-200 rounded-md px-4 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-blue-300 shadow-sm focus:shadow"
      placeholder="Search here..." 
      />
      
      <button
        className="inline-block rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Search
      </button> 
    </form> 
      </div>

      {/* Carousel */}
      <Carousel className="rounded-xl">
        <img
          src="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=612x612&w=0&k=20&c=3HWrUVnS-FsJETFlCWnDH2-1ekJ0ic3T3XPrhLjpo98="
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4="
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.istockphoto.com/id/1130264715/photo/traditional-asian-food-nepalese-steamed-dumpling-momo-served-with-tomato-chutney.jpg?s=612x612&w=0&k=20&c=vgPALGbWFob_Vcqp5cuG-ByAv6zx26Y8uqELx4nZMdg="
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.istockphoto.com/id/639389404/photo/authentic-indian-food.jpg?s=612x612&w=0&k=20&c=gbfAu17L1gtHmuo5biByhfCefAtYUtGQpyxMmi9_Mus="
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <img
          src="https://media.istockphoto.com/id/1414575281/photo/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.jpg?s=612x612&w=0&k=20&c=v8mdiAa_5NaRYtIscClXe85lLzkx7loSd9_pJWt9G2o="
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}

export default CarouselDef;
