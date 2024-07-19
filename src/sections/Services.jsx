import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex jsutify-center flex-wrap gap-9" data-aos="flip-down">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services
