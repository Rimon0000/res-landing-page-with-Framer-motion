import { getServices } from "@/api/admin/service/service.api";
import { useQuery } from "@tanstack/react-query";

const ServiceList = () =>{
    // const [data, setData] = useState([])

    // console.log(data);

    // useEffect(() =>{
    //     fetch("http://localhost:5000/api/v1/services")
    //     .then(res => res.json())
    //     .then(data => setData(data.data))
    // },)

    const {data, isLoading, isError} = useQuery({
        queryKey: ["services"],
        queryFn: getServices
    })

    console.log({isLoading, data});

    if(isLoading){
        return <p>Loading .....</p>
    }


    return (
        <div>
            {
                data.data.map((item) => <h1>{item.name}</h1>)
            }
        </div>
    )
}

export default ServiceList;