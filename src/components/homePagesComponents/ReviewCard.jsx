// eslint-disable-next-line react/prop-types
export default function ReviewCard({ img, name, children, currentIndex }) {
    return (
      <li
        style={{ translate: `${-100 * currentIndex}%` }}
        className={`w-full flex-grow-0 flex-shrink-0 ease-in-out duration-500 py-8`}
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <figure>
            <img
              width="120"
              className="rounded-full"
              src={img}
              alt="A handsome guy"
            />
          </figure>
          <div className="text-center">
            <i className="fa-solid fa-quote-left"></i>
            <p className="text-2xl italic">{children}</p>
            <p className="text-gray-500 text-xl text-center mt-5">- {name}</p>
          </div>
        </div>
      </li>
    );
  }
  