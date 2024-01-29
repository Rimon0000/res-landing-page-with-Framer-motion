import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "../../assets/images/macbook-exposed.jpg"

const HeroSection = () =>{
    return (
        <Container className="h-[calc(100vh-64px)] place-content-center grid grid-cols-1 lg:grid-cols-2">
            <div>
                <h1 className="text-5xl lg:text-8xl font-bold">
                    <span className="text-gray">Don't worry,</span> <br />
                    <span>we'll fix it</span>
                </h1>
                <p className="text-dark-gray max-w-[50ch] text-lg mt-10 mb-5">Welcome to 
                <span className="text-primary-foreground font-semibold"> iRepair</span> , your one-step place for all kind of  
                <span className="text-primary-foreground font-semibold"> Macbook repair's</span> and diagnostics</p>
                <Button>Book a Service</Button>
            </div>
            <div className="w-3/4 mx-auto">
                <img className="-rotate-[30deg] object-contain p-5 pt-16" src={macbook} alt="" />

            </div>
        </Container>
    )
}

export default HeroSection;