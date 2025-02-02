import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  return (
    <Navbar className="border-b-2 flex justify-between items-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          TechTalks
        </span>{" "}
        Wajiha
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray">
        <AiOutlineSearch />
      </Button>
    </Navbar>
  );
}
