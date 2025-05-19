import React from "react";
import TextCard from "./TextCard";

const BodyFrontPage = () => {
  const announcements = [
    {
      title: "Items needed on test day",
      description: "Dear visitors, please bring the following items: ...",
      date: "2025 Dec 19",
    },
    {
      title: "Items needed on test day",
      description:
        "It is hereby announced that the last day of the Aviation Language Exam is March 18 of this year. The Language Center will resume operations on April 20, 1402.",
      date: "2023 Nov 23",
    },
    {
      title: "maiorum suscipit petentium nec",
      description:
        "It is hereby announced that the last day of the Aviation Language Exam is March 18 of this year. The Language Center will resume operations on April 20, 1402.",
      date: "2022 Sep 1",
    },
    {
      title: "maiorum suscipit petentium nec",
      description: "Dear visitors, please bring the following items: ...",
      date: "2024 Jun 16",
    },
  ];

  return (
    <div className="mx-0 xl:mx-[300px]">
      <div className="mt-6 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {announcements.map((item) => (
            <div
              key={item.title + item.date}
              className="w-full md:w-[360px] flex-shrink-0"
            >
              <TextCard
                title={item.title}
                description={item.description}
                date={item.date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyFrontPage;
