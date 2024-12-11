import React from 'react';

const Select = ({data,name }:{data:[],name:string}) => {
    return (
        <div>
             <select  className="border-primary h-10 rounded-[5px]  min-w-[340px]"  name={name}>
                    <option value="" disabled selected >Select One</option>
                    {
                      data?.map((item:string)=>(
                        <option key={item} value={item}>{item}</option>
                      ))
                    }
                  </select>
        </div>
    );
};

export default Select;