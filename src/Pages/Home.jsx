import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import FaqGallery from "../components/FaqGallery";
import Contract from "../components/Contract";
import Featuredservices from "../components/Featuredservices";
import Countup from "../components/Countup";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>HOME</title>
            </Helmet>
            <section>
                <Banner></Banner>
            </section>
            <section className="mt-10">
                <Featuredservices></Featuredservices>
            </section>
            <section className="py-10">
                <Partners></Partners>
            </section>
            <section>
                <FaqGallery></FaqGallery>
            </section>
            <section>
                <Countup></Countup>
            </section>
            <section className="py-10">
                <Contract></Contract>
            </section>
        </div>
    );
};

export default Home;