import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="my-24 text-center">
      <div className="stats max-sm:inline-block shadow">
        <div className="stat place-items-center lg:w-96">
          <div className="stat-title">Online Users</div>
          <CountUp
            className="stat-value"
            duration={3}
            end={12000}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc">From January 1st to December last</div>
        </div>

        <div className="stat place-items-center lg:w-72">
          <div className="stat-title">Top Packages</div>
          <CountUp
            className="text-blue-500 stat-value"
            duration={2}
            end={150}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc text-primary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center lg:w-72">
          <div className="stat-title">Interesting Stories</div>
          <CountUp
            className="stat-value"
            duration={4}
            end={1250}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat place-items-center lg:w-72">
          <div className="stat-title">Tour Guides</div>
          <CountUp
            className="stat-value"
            duration={2}
            end={45}
            enableScrollSpy={true}
          ></CountUp>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
