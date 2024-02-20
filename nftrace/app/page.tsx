import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-[695px] flex-none lg:flex">


    <div className="lg:w-1/2 w-full h-[550px] sm:h-full pt-5 sm:py-7 bg-purple-700 box-border">
      <div className="w-full h-1/4 relative ">
        <Image
          src="/design.png"
          alt=""
          width={300}
          height={400}
          className="absolute top-1/2 left-0"
        />
        <Image
          src="/logo.png"
          alt="logo"
          width={60}
          height={60}
          className="absolute left-1/2 -translate-x-1/2 bottom-5"
        />
      </div>

      <div className="w-full sm:h-2/5 h-1/3 relative ">
        <Image
          src="/full-img.png"
          alt=""
          width={1000}
          height={1000}
          className="w-4/5 h-full object-scale-down absolute left-1/2 -translate-x-1/2 top-full -translate-y-full"
        />
        <Image
          src="/birds.png"
          alt=""
          width={100}
          height={100}
          className="object-scale-down absolute right-1/3 top-8"
          // <Image
          // src="/birds.png"
          // width={80}
          // height={80}
          // alt=""
          // />
        />
      </div>

      <div className="w-full h-2/6 relative">
        <button
          className=" w-40 sm:w-1/4 bg-white rounded-md text-xs py-2 px-2 sm:px-0 font-semibold absolute left-1/2 -translate-x-1/2 top-1"
        >
          WATCH VIDEO
        </button>
        <h1
          className="w-4/5 sm:w-3/5 m-auto xl:text-2xl lg:text-xl md:text-2xl sm:text-2xl xs:text-xl text-md text-white text-center font-semibold absolute left-1/2 -translate-x-1/2 top-12 sm:leading-7 leading-6"
        >
          Presenting your gateway to trust, transparency, and security
        </h1>
        <p
          className="w-11/12 xs:w-4/5 m-auto text-white text-[10px] sm:text-xs lg:text-sm text-center font-normal absolute left-1/2 -translate-x-1/2 top-32"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          excepturi facere mollitia ipsa eius veniam neque maiores itaque et
          repellendus, perferendis, animi veritatis reiciendis vel Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Doloremque!
        </p>
      </div>
    </div>


    <div className="w-full lg:w-1/2 lg:h-full h-[300px] relative bg-white">
      <div
        className="sm:w-96 w-4/5 leading-10 text-center absolute top-1/4 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h2 className="sm:text-xl text-x font-bold">Verify your mobile number</h2>
        <div>
          <button
            className="text-xs border border-gray-200 text-gray-500 sm:px-2 px-1 py-1 rounded-s font-medium hover:cursor-default"
          >
            +91
          </button>
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            className="w-44 text-xs border border-gray-200 -ml-1 px-2 py-1 rounded-e font-medium"
          />
        </div>
        <button className="bg-orange-700 px-5 py-1 text-white text-xs rounded">
          GENERATE OTP
        </button>
      </div>

      <div
        className="sm:w-96 w-11/12 text-center absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p className="sm:text-sm text-xs mb-2 font-normal">Powered by</p>
        <div className="w-40 m-auto h-5">
          <Image src="/Layer_1 (1).png" alt="" width={150} height={50} />
        </div>
        <p className="sm:text-sm text-xs mt-3 font-normal">
          Connect with us at support@nfttrace.com
        </p>
      </div>
    </div>


  </div>
  );
}
