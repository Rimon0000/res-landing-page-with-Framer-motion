import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "../../assets/images/macbook-exposed.jpg"

const HeroSection = () =>{
    return (
        <Container className="h-[calc(100vh-64px)] place-content-center grid grid-cols-2">
            <div>
                <h1 className="text-8xl font-bold">
                    <span className="text-gray">Don't worry,</span> <br />
                    <span>we'll fix it</span>
                </h1>
                <p>Welcome to <span>iRepair</span> , your one-step place for all kind' of 
                <span>Macbook repair's</span> and diagnostics</p>
                <Button>Book a Service</Button>
            </div>
            <div>
                <img src={macbook} alt="" />

            </div>
        </Container>
    )
}

export default HeroSection;