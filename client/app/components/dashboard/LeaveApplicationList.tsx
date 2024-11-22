import Image from "next/image";
import Link from "next/link";

const leaveRequest=[
    {
        name:"Rakib Uddin",
        imageUrl:"https://i.ibb.co.com/WGmtzGD/man1.png",
        reason:"personal",
        status:"Pending"
    },
    {
        name:"Tamim Iqbal",
        imageUrl:"https://i.ibb.co.com/zQfjrxY/man2.png",
        reason:"personal",
        status:"Pending"
    },
    {
        name:"Saleh Sadi",
        imageUrl:"https://i.ibb.co.com/WGmtzGD/man1.png",
        reason:"personal",
        status:"Approved"
    },
    {
        name:"Tanisha Jannat",
        imageUrl:"https://i.ibb.co.com/WGmtzGD/man1.png",
        reason:"personal",
        status:"Approved"
    },
]

const LeaveApplicationList = () => {
    return (
        <div className="lg:h-[92%] h-full py-5   bg-white shadow-md rounded-2xl ">
        <h2 className="text-xl px-4 border-b font-semibold pb-2 text-gray-700">Leave Application</h2>
        <ul className="space-y-4 pt-2">
            {
            leaveRequest?.map(((request,index)=>{
                return(
                    <li className="flex justify-between items-center border-b-2 py-4 pr-4 my-2" key={index}>
                   
                    <div className="flex items-center gap-2">
                    <figure>
                        <Image width={50} height={50} className="w-[60px] rounded-md" src={request.imageUrl} alt={request.name}></Image>
                    </figure>
                        <span>
                        <h4 className="text-xl font-semibold text-gray-700">{request.name}</h4>
                        <p> <span className="text-sm font-semibold text-gray-800">Reason:</span> {request.reason||"Not Provided"}</p>
                        </span>
                    </div>
                    <span className={`text-sm font-bold px-3 h-[30px] py-1 rounded-[4px] ${request.status==="Pending"?"bg-yellow-100 text-yellow-600":"bg-green-100 text-green-600"}`}>
                        {
                            request.status
                        }

                    </span>
                    </li>
                )
            }))
            }
        </ul>
            
           <div className="flex justify-center mt-8">
           <span className="inline-block text-center text-blue-500   hover:underline rounded-md px-3">
                <Link href={""}>
                See All Requests
                </Link>
            </span>
           </div>
    </div>
    );
};

export default LeaveApplicationList;