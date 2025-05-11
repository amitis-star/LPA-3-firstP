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
      title: "Announcement regarding the last exam date",
      description:
        "It is hereby announced that the last day of the Aviation Language Exam is March 18 of this year. The Language Center will resume operations on April 20, 1402.",
      date: "2024 Jun 16",
    },
    {
      title: "Items needed on test day",
      description: "Dear visitors, please bring the following items: ...",
      date: "2023 Nov 23",
    },
    {
      title: "Announcement regarding the last exam date",
      description:
        "It is hereby announced that the last day of the Aviation Language Exam is March 18 of this year. The Language Center will resume operations on April 20, 1402.",
      date: "2022 Sep 1",
    },
  ];

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <TextCard
            title={announcements[0].title}
            description={announcements[0].description}
            date={announcements[0].date}
          />
          <TextCard
            title={announcements[1].title}
            description={announcements[1].description}
            date={announcements[1].date}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <TextCard
            title={announcements[2].title}
            description={announcements[2].description}
            date={announcements[2].date}
          />
          <TextCard
            title={announcements[3].title}
            description={announcements[3].description}
            date={announcements[3].date}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyFrontPage;
