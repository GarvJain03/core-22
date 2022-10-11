import React from "react";

const Header = () => {
  return (
    <div className="lg:w-4/5 mx-auto flex border-b-2 border-black pb-8 mb-8">
      <div className="w-1/2 mt-4 mr-8">
        <h1 className="mt-8 text-4xl font-bold">About Tony Airways</h1>
        <p className="mt-8 text-justify">
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
      <img
        width="50%"
        src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_1300,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_yellow"
      />
    </div>
  );
};

export default Header;
