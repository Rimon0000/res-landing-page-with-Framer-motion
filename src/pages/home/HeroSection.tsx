import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "../../assets/images/macbook-exposed.jpg"
import {motion} from "framer-motion"

const intro ={
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1
    }},
}

const introChildren = {
    hidden: {opacity: 0, y: -300},
    visible: {opacity: 1, y: 0, transition: {
        duration: 1.3,
        type: "spring",
        bounce: 0.6
    }}

}

const HeroSection = () =>{
    return (
        <Container className="h-[calc(100vh-64px)] place-content-center grid grid-cols-1 lg:grid-cols-2">
            <motion.div variants={intro} initial="hidden" animate="visible">
                <motion.h1 variants={introChildren} className="text-5xl lg:text-8xl font-bold text-nowrap">
                    <span className="text-gray">Don't worry,</span> <br />
                    <span>we'll fix it</span>
                </motion.h1>
                <motion.p variants={introChildren} className="text-dark-gray max-w-[50ch] text-lg mt-10 mb-5">Welcome to 
                <span className="text-primary-foreground font-semibold"> iRepair</span> , your one-step place for all kind of  
                <span className="text-primary-foreground font-semibold"> Macbook repair's</span> and diagnostics</motion.p>
                <motion.div variants={introChildren}>
                <Button>Book a Service</Button>
                </motion.div>
            </motion.div>
            <div className="w-3/4 lg:w-4/5 mx-auto">
                <img className="-rotate-[30deg] object-contain pt-5 rounded-2xl" src={macbook} alt="" />

            </div>
        </Container>
    )
}

export default HeroSection;