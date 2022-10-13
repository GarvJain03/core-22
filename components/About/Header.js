import React from "react";

const Header = () => {
  return (
    <div className="lg:mx-24 mx-auto flex border-b-2 space-x-24 border-black pb-8 mb-8">
      <div className="w-full mt-4 mr-8">
        <h1 className="mt-8 text-4xl font-bold">About Tony Airways</h1>
        <p className="mt-8 text-lg text-justify">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur?
        </p>
      </div>
      <img className="w-1/3" src="/images/plane.png" />
    </div>
  );
};

export default Header;
