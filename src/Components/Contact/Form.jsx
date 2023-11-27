

const Form = () => {
  return (
    <div className="bg-[--cover-color] py-20">
      <div className="container">
        <p className="text-3xl text-center mb-5">Say hello</p>
        <p className="text-gray-400 text-center mb-20">
          Lorem Ipsum is simply dummy text of the printing .
        </p>
        {/* form - start */}
        <form
          className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <label
              htmlFor="first-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              First name
            </label>
            <input
              name="first-name"
              className="w-full rounded-lg border bg-gray-50 px-3 py-3 text-gray-800 outline-none ring-[--main-color] transition duration-300 focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Last name
            </label>
            <input
              name="last-name"
              className="w-full rounded-lg border bg-gray-50 px-3 py-3 text-gray-800 outline-none ring-[--main-color] transition duration-300 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email Address
            </label>
            <input
              name="email"
              className="w-full rounded-lg border bg-gray-50 px-3 py-3 text-gray-800 outline-none ring-[--main-color] transition duration-300 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Message
            </label>
            <textarea
              name="message"
              className="h-64 w-full rounded-lg border bg-gray-50 px-3 py-3 text-gray-800 outline-none border-none ring-[--main-color] transition duration-300 focus:ring"
              defaultValue={""}
            />
          </div>
          <div className="flex items-center justify-end sm:col-span-2">
            <button className="inline-block rounded-lg bg-[--main-color] px-8 py-3 text-center text-sm font-semibold ring-teal-400 hover:ring text-white outline-none transition duration-300 hover:bg-[--hover-color] focus-visible:ring md:text-base">
              Get in touch
            </button>
          </div>
        </form>
        {/* form - end */}
      </div>
    </div>
  );
};

export default Form;
