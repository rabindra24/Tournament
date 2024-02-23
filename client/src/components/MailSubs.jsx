import React, { useState } from "react";

const MailSubs = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full text-center p-10">
      <p className="text-white md:text-[2rem] font-bold">
        Subscribe To Our Mailing List
      </p>
      <form action="" className="my-5">
        <input
          type="email"
          className="p-3 bg-[#2D2D2D] text-white mr-3 rounded-md border-b-2 md:w-[300px] border-b-secondary outline-none"
          placeholder="Mail ID"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <button
          type="submit"
          className="mt-5 bg-secondary text-white rounded-md p-3"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default MailSubs;
