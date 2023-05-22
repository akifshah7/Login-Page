import React from "react";

type Props = {
  label: string;
  color: "red" | "black" | "blue";
  variant: "primary" | "secondary";
};

const ConfirmationCard = ({
  label = "Signed in as Akif",
  color = "black",
  variant = "primary",
}: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        style={{
          backgroundColor:
            variant === "primary"
              ? "white"
              : variant === "secondary"
              ? "lightblue"
              : "",
        }}
        className="bg-white shadow-md rounded px-10 py-8 w-full sm:w-96 "
      >
        <h1 className="text-center text-2xl font-bold mb-6">
          User Authenticated
        </h1>
        <div className="text-1xl text-center font-bold mb-4">{label}</div>
        <button
          style={{ backgroundColor: color }}
          className="w-1/2 bg-black py-2 px-4 text-white center ml-16 rounded"
        >
          Log Out
        </button>{" "}
      </div>
    </div>
  );
};

export default ConfirmationCard;
