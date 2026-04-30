export default function Learn() {
  return (
    <div className="bg-white h-screen flex gap-4 justify-center items-center">
      <div className="bg-purple-300 h-72 w-96 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
        <div className="flex gap-4">
          <img src="/palette.svg" />
          <p>Design</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Figma</h1>
          <p className="text-lg">8 hours ago</p>
        </div>
      </div>

      <div className="bg-orange-300 h-72 w-96 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
        <div className="flex gap-4">
          <img src="/palette.svg" />
          <p>Coding</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Python</h1>
          <p className="text-lg">2 days ago</p>
        </div>
      </div>

      <div className="bg-red-300 h-72 w-96 flex flex-col justify-between p-12 rounded-4xl text-blue-950">
        <div className="flex gap-4">
          <img src="/palette.svg" />
          <p>Design</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Sketch</h1>
          <p className="text-lg">4 days ago</p>
        </div>
      </div>
    </div>
  );
}
