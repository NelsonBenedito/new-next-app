"use client";

import { Crane } from "@phosphor-icons/react";

type CardProps = {
    title: String;
    description: String;
  };

export default function Building({ title, description}: CardProps) {
  return (
    <div className="p-4 mx-auto w-full max-w-4xl mt-2md:pl-14">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="p-4 mx-auto max-w-4xl mt-2md:pl-14">
        <div className="flex flex-col h-96 justify-center items-center p-10 border border-gray-300 bg-gray-200 rounded-xl">
          <Crane size={52} color="#000" />
          <p className="text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}