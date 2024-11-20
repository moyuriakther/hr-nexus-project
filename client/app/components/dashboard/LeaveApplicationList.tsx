import Image from "next/image";

const leaveRequest=[
    {
        name:"Rakib Uddin",
        imageUrl:"https://i.ibb.co.com/WGmtzGD/man1.png",
        reason:"personal",
        status:"pending"
    },
    {
        name:"Tamim Iqbal",
        imageUrl:"https://i.ibb.co.com/zQfjrxY/man2.png",
        reason:"personal",
        status:"pending"
    },
    {
        name:"Saleh Sadi",
        imageUrl:"https://i.ibb.co.com/WGmtzGD/man1.png",
        reason:"personal",
        status:"approved"
    },
    {
        name:"Tanisha Jannat",
        imageUrl:"https://i.ibb.co.com/WGmtzGD/man1.png",
        reason:"personal",
        status:"approved"
    },
]

const LeaveApplicationList = () => {
    return (
        <div className="p-3 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800">Leave Application</h2>
        <ul className="space-y-4">
            {
            leaveRequest.map(((request,index)=>{
                return(
                    <li className="flex justify-center border-y-2 border-gray-500 p-2 my-2" key={index}>
                    <figure>
                        <Image className="w-[60px] rounded-md" src={request.imageUrl} alt={request.name}></Image>
                    </figure>
                    <div className="">
                        <h4 className="text-xl font-semibold text-gray-800">{request.name}</h4>
                        <p> <span className="text-md font-semibold text-gray-800">Reason:</span> ${request.reason||"Not Provided"}</p>
                    </div>
                    <span className={`text-sm font-bold px-3 py-1 rounded-lg ${request.status==="Pending"?"bg-yellow-100 text-yellow-600":"bg-green-100 bg-green-600"}`}>
                        {
                            request.status
                        }

                    </span>
                    </li>
                )
            }))
            }
        </ul>
   
    </div>
    );
};

export default LeaveApplicationList;