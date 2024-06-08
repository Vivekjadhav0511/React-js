// props makes component Reusable 

function Component(props) {  // {username,age}
    // console.log(props); // {}
    console.log(props.userNamee); // userName
  return (
    <>
      <h1 className="text-blue-500">Tailwind test</h1>
      <figure className="bg-slate-100 rounded-xl p-8 ">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://images.pexels.com/photos/20175138/pexels-photo-20175138/free-photo-of-a-woman-sitting-on-the-ground-with-her-phone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg fon text-re">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>{props.userNamee}</div>
            <div className="text-blue-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

export default Component
