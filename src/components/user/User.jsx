import React from "react";
import { useParams } from "react-router-dom";
//Used for accessing the parameter passed in the Route. It is a React Hook.
//Taking Dynamic data

export default function User(){
    const {id}= useParams();
    return (
<div className="bg-gray-600 text-white text-3xl p-4 text-center">User: {id}</div>
    );
}