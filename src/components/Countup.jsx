import CountUp from "react-countup";


const Countup = () => {
    return (
        <div className="flex justify-around">
            <div className="space-y-3">
                <h3 className="text-white text-2xl">Users</h3>
                <CountUp duration={50} start={20} end={100} delay={0}>
                    {({ countUpRef }) => (
                        <div>
                            <span className="text-6xl text-white font-bold" ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="space-y-3">
                <h3 className="text-white text-2xl">Users Review</h3>
                <CountUp duration={50} start={30} end={100} delay={0}>
                    {({ countUpRef }) => (
                        <div>
                            <span className="text-6xl text-white font-bold" ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
            </div>
            <div className="space-y-3">
                <h3 className="text-white text-2xl">Our Employ</h3>
                <CountUp duration={50} start={40} end={100} delay={0}>
                    {({ countUpRef }) => (
                        <div>
                            <span className="text-6xl text-white font-bold" ref={countUpRef} />
                        </div>
                    )}
                </CountUp>
            </div>
        </div>
    );
};

export default Countup;