import Image from "next/image";

const recruiters = [
  {
    image: "https://i.ibb.co.com/BZyGzbB/download-2.jpg",
    name: "John Doe",
    position: "Software Engineer",
    recruitment_date: "2023-05-15",
  },
  {
    image: "https://i.ibb.co.com/BZyGzbB/download-2.jpg",
    name: "Jane Smith",
    position: "Project Manager",
    recruitment_date: "2022-11-30",
  },
  {
    image: "https://i.ibb.co.com/BZyGzbB/download-2.jpg",
    name: "Michael Johnson",
    position: "UI/UX Designer",
    recruitment_date: "2024-01-20",
  },
  {
    image: "https://i.ibb.co.com/BZyGzbB/download-2.jpg",
    name: "Emily Brown",
    position: "HR Manager",
    recruitment_date: "2021-08-10",
  },
];

const Recruitment = () => {
  return (
    <div>
      <div className="border-b-1 border-[#eff2f7] py-[24px] px-[20px] ">
        <h1 className="text-[#2b3674] font-[600] text-[18px] leading-[26px] ">
          New recruitment
        </h1>
      </div>

      {recruiters.slice(0, 3).map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between py-[16px] px-[20px]  border-b-1 border-[#eff2f7]"
        >
          <div className="flex gap-3 items-start ">
            <div>
              <Image
                className="w-16 h-16 object-contain rounded-2xl"
                width={50}
                height={50}
                src={item.image}
                alt="image"
              />
            </div>
            <div>
              <h1 className="text-[#2b3674] font-[600] text-[18px] leading-4 mb-2">
                {item.name}
              </h1>
              <p className="font-[400] text-[14px] leading-4 mb-2">
                {item?.position}
              </p>
              <p className="font-[500] text-[14px] leading-4">
                Date: {item?.recruitment_date}
              </p>
            </div>
          </div>
          <div className="w-[90px] bg-[#00b07426] rounded-[4.8px] p-1">
            <p className="text-[#00b074]  font-[600] text-[14px] text-center">
              Recruit
            </p>
          </div>
        </div>
      ))}

      <div className="py-4">
        <a
          className="font-[600] text-[14px] leading-[14px] flex items-center justify-center gap-1 text-[#0d0d0]"
          href="hr/selection"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default Recruitment;
