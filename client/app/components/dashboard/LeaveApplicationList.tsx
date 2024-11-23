import Image from "next/image";
import Link from "next/link";

const leaveRequest = [
  {
    name: "Rakib Uddin",
    imageUrl: "https://i.ibb.co/WGmtzGD/man1.png",
    reason: "personal",
    status: "Pending",
  },
  {
    name: "Tamim Iqbal",
    imageUrl: "https://i.ibb.co/zQfjrxY/man2.png",
    reason: "personal",
    status: "Pending",
  },
  {
    name: "Saleh Sadi",
    imageUrl: "https://i.ibb.co/WGmtzGD/man1.png",
    reason: "personal",
    status: "Approved",
  },
  {
    name: "Tanisha Jannat",
    imageUrl: "https://i.ibb.co/WGmtzGD/man1.png",
    reason: "personal",
    status: "Approved",
  },
];

const LeaveApplicationList = () => {
  return (
    <div className="px-8 py-4 bg-white shadow-md rounded-2xl h-[525px]">
      <h2 className="text-lg font-semibold text-gray-700">Leave Application</h2>
      <ul className="space-y-4 pt-5">
        {leaveRequest.map((request, index) => (
          <li
            className="flex justify-between items-center shadow p-2 my-2"
            key={index}
          >
            <div className="flex gap-2 items-center">
              <figure>
                <Image
                  width={50}
                  height={50}
                  className="w-[60px] h-[60px] object-cover rounded-md"
                  src={request.imageUrl}
                  alt={request.name}
                />
              </figure>
              <span>
                <h4 className="text-xl font-semibold text-gray-700">
                  {request.name}
                </h4>
                <p>
                  <span className="text-sm font-semibold text-gray-800">
                    Reason:
                  </span>{" "}
                  {request.reason || "Not Provided"}
                </p>
              </span>
            </div>
            <span
              className={`text-sm font-bold px-3 h-[30px] py-1 rounded-lg ${
                request.status === "Pending"
                  ? "bg-yellow-100 text-yellow-600"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {request.status}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex justify-center mt-8">
        <span className="inline-block text-center text-blue-500 hover:underline rounded-md px-3">
          <Link href="">See All Requests</Link>
        </span>
      </div>
    </div>
  );
};

export default LeaveApplicationList;
