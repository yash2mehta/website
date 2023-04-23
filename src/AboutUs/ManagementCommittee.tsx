import ImagePlaceholder from "../assets/ImagePlaceholder.png";

import CommitteePic1 from "../assets/exco_photos/1.jpg";
import CommitteePic2 from "../assets/exco_photos/2.jpg";
import CommitteePic3 from "../assets/exco_photos/3.jpg";
import CommitteePic4 from "../assets/exco_photos/4.jpg";
import CommitteePic5 from "../assets/exco_photos/5.jpg";
import CommitteePic6 from "../assets/exco_photos/6.jpg";

const ManagementCommittee = () => {
  return (
    <div className="mb-0">
      {/* Header */}
      {/* <div
        style={{
          display: "flex",
          backgroundImage: `url(${ImagePlaceholder})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "750px",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-bold">Management Committee</h1>
      </div> */}

      {/* Banner */}
      <div
        className="bg-primary-300 flex items-center justify-center"
        style={{ height: 150 }}
      >
        <h1 className="text-3xl text-white font-bold text-center">
          Senior Leadership Team
        </h1>
      </div>

      {/* Senior Leadership Team Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ height: 700 }}>
        <div className="flex flex-1 items-center justify-center">
          <h1
            style={{
              display: "flex",
              backgroundImage: `url(${CommitteePic1})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
            }}
            className="text-3xl text-white font-bold text-center"
          >
            <div>Yash Mehta</div>
            <div> President</div>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <h1
            style={{
              display: "flex",
              backgroundImage: `url(${CommitteePic5})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
            }}
            className="text-3xl text-white font-bold text-center"
          >
            <div>Zen Sheen</div>
            <div>Vice President</div>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div
            style={{
              display: "flex",
              backgroundImage: `url(${CommitteePic3})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
            }}
            className="text-3xl text-white font-bold text-center"
          >
            <div>Anirudh B</div>
            <div>Treasurer</div>
          </div>
        </div>
      </div>

      {/* <div className="m-20"></div> */}

      {/* Banner */}
      <div
        className="bg-primary-300 flex items-center justify-center"
        style={{ height: 150 }}
      >
        <h1 className="text-3xl text-white font-bold text-center">
          Operation Team
        </h1>
      </div>

      {/* Operation Team Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ height: 700 }}>
        <div className="flex flex-1 items-center justify-center">
          <h1
            style={{
              display: "flex",
              backgroundImage: `url(${CommitteePic2})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
            }}
            className="text-3xl text-white font-bold text-center"
          >
            <div>Ryan</div>
            <div>Director of Publicity and Marketing</div>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <h1
            style={{
              display: "flex",
              backgroundImage: `url(${CommitteePic6})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
            }}
            className="text-3xl text-white font-bold text-center"
          >
            <div>Stephanie</div>
            <div>Director of Business Development</div>
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <h1
            style={{
              display: "flex",
              backgroundImage: `url(${CommitteePic4})`,
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              backgroundPosition: "center",
              flexDirection: "column",
            }}
            className="text-3xl text-white font-bold text-center"
          >
            <div>Lucius</div>
            <div>Secretary</div>
          </h1>
        </div>
      </div>

      {/* <div className="m-20"></div> */}
    </div>
  );
};

export default ManagementCommittee;
