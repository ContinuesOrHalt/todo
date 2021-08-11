const list = [...new Array(30)];

function App() {
  return (
    <div className="bg-gray-50">
      <div className="container m-auto py-5">
        <h1 className="text-2xl font-bold mb-5">Well come to AXD</h1>
        <div class="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map((v, i) => (
            <div
              onClick={() => {
                window.open("https://www.youtube.com/");
              }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  className="object-cover"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </div>
              <p className="">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
