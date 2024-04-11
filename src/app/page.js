import MovieCardComponent from "@/components/MovieCardComponent";
import { getAllMovieService } from "@/service/product.service";
import { IoIosArrowForward } from "react-icons/io";

export default async function Home() {
  const data = await getAllMovieService();
  const datas = data.payload.map((m) => m.genre);
  // console.log(datas);
  const dataFilter = datas.filter((q, idx) => datas.indexOf(q) === idx);
  // console.log(dataFilter);
  return (
    <main className="absolute top-0">
      <div className="w-full h-[1000px] opacity-75">
        <img src="https://prod-images.viu.com/3300394573/71eef6533a7f8006e8595785bf1384c232a22126?im=Resize,width=1920"></img>
      </div>
      <div className="pt-20 ">
        <div className="px-10">
          <div className="py-4 flex items-center gap-2">
            <h2 className="text-lg text-white font-semibold">All movies</h2>
            <span className="text-2xl text-white font-semibold">
              <IoIosArrowForward />
            </span>
          </div>
          <MovieCardComponent data={data} />
        </div>
        {dataFilter.map((d) => (
          <div key={d} className="px-10 w-full h-full">
            <div className="py-4 flex items-center gap-2">
              <h2 className="text-lg text-white font-semibold">{d}</h2>
              <span className="text-2xl text-white font-semibold">
                <IoIosArrowForward />
              </span>
            </div>
            <MovieCardComponent d={d} />
          </div>
        ))}
      </div>
    </main>
  );
}
