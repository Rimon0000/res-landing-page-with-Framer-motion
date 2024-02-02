import { Button } from "@/components/ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () =>{
    const [serviceName, setServiceName] = useState("")

    //for handling cache
    const queryClient = useQueryClient()

    const {mutateAsync, isError, isSuccess} = useMutation({
        mutationFn: async(data) =>{
            return await fetch("http://localhost:5000/api/v1/services",{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        },
        onSuccess: () =>{                                          //for handling cache
            queryClient.invalidateQueries({queryKey: ['services']})
        },
    })

    console.log({isError, isSuccess});

    const handleSubmit = async(e:FormEvent) =>{
        e.preventDefault()

        const serviceData = {
            name: serviceName,
            description: "description",
            devices: ["Macbook pro", "Macbook air", "iPad pro"],
            price: 500.00
        }

        console.log(serviceData);

        await mutateAsync(serviceData)
        console.log("done");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border" type="text" name="" id="" onChange={(e) => setServiceName(e.target.value)}/>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default AddService;