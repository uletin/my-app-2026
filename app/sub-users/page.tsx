import ButtonFirst from "./_components/button-1";
import DetailCard from "./_components/detail-card";

export default function Users() {
  return (
    <div className="h-screen p-8">
      <div className="w-96 bg-gray-100 rounded-xl text-gray-800 p-8 flex flex-col gap-4">
        <div className="flex items-center justify-between font-bold">
          <h2 className="text-2xl">Client details</h2>
          <button>
            <img src="/x.svg" className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-4 mt-4">
          <img
            src={"/avatar-2.avif"}
            className="rounded-full w-12 h-12 bg-cover"
          />
          <div className="flex flex-col justify-center items-start font-bold">
            <p className="text-lg">Cornelius Greenfelder</p>
            <div className="bg-green-200 py-1 px-2 rounded-full flex items-center gap-1">
              <img src={"/award.svg"} className="h-4 w-4" />
              <p className="text-sm">Verified</p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-blue-100 rounded-xl">
          <p className="font-bold">Projects</p>
          <div className="flex items-center gap-12">
            <DetailCard
              img="/hourglass.svg"
              title="Ongoing"
              qty={2}
              price={4.8}
            />
            <DetailCard
              img="/globe.svg"
              title="Completed"
              qty={3}
              price={5.3}
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Location</p>
          <p className="text-gray-500">United States, New York</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">With Us</p>
          <p className="text-gray-500">6 Jan 2024</p>
        </div>
        <div className="flex gap-2">
          <button className="py-4 px-5   bg-white rounded-full">
            <img src={"/dots-vertical.svg"} />
          </button>
          <ButtonFirst />
        </div>
      </div>
    </div>
  );
}
