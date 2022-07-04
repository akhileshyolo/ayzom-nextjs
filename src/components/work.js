function getCompanies() {
    return [
        {
            company: "Palo Alto Networks",
            role: "Sr.Staff Software Engineer",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/PaloAltoNetworks_2020_Logo.svg/2560px-PaloAltoNetworks_2020_Logo.svg.png",
            yearRange: "May 2022 - Present",
            description: "Tech Stack: React.js, Node.js, PHP, AWS Cloud"
        },
        {
            company: "Blazeclan Technologies",
            role: "Sr.Cloud Application Developer",
            imageUrl: "https://www.blazeclan.com/wp-content/uploads/2019/03/logo.png",
            yearRange: "August 2021 - May 2022",
            description: "Tech Stack:Vue.js, React.js,  Node.js, AWS Cloud based Projects"
        },
        {
            company: "Morningstar, Inc.",
            role: "Software Engineer",
            imageUrl: "https://financialit.net/sites/default/files/morningstar.png",
            yearRange: "August 2019 - August 2021",
            description: "Tech Stack: Vue.js, Node.js, AWS related Fullstack Project"
        },
        {
            company: "Dquip Pvt Ltd.",
            role: "Software Engineer",
            imageUrl: "https://www.dquip.com/images/dquip-logo.png",
            yearRange: "Sep 2017 - Nov 2018",
            description: "Backend web developer working with JavaScript/jQuery, PHP, Laravel, MYSQL, Node.js on AWS. Responsibilities include developing solutions for CRM Web Applications for different industries, Linux system administration, back end maintenance."
        },
        {
            company: "VistaSofft",
            role: "Junior Web Developer",
            imageUrl: "https://ayzom.com/assets/img/vistasooft-nobg.png",
            yearRange: "May2017 - August 2017",
            description: "Junior PHP Developer working with PHP/MYSQL & Javacript/Jquery."
        }
    ];
}

export default function Work() {
  const companies = getCompanies();
  console.log({companies});
  return (
  <div className="custom-width">
    <h2 className="mt-20 mb-5 text-3xl">Experience</h2>
    <div className="pt-8 mb-10 text-2sm text-white">Some of the professional positions I've held.</div>
    <div>
        <ul className="flex flex-col">
            {
                companies.map((item, index)=>(
                    <li key={index} className="mb-10">
                        <div className="flex flex-row">
                            <div className="firstCol">
                                <img src={item.imageUrl} className="img-height"></img>
                                <p className="text-white">{item.yearRange}</p>
                            </div>
                            <div className="ml-14 secondCol">
                                <div className="ml-50 text-2xl text-white">
                                    {item.role} - {item.company}
                                </div>
                                <div className="text-white description seconday-font-color">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </li>
                ))
            }
        </ul>
    </div>
    <style jsx>{`

        .firstCol {
            width: 30%
        }
        .secondCol {
            width: 70%;
        }

        .custom-width {
            padding-left: 10%;
            padding-right: 10%;
        }

        .seconday-font-color {
            color: #dbb8b8
        }
        .img-height {
            height: 70px;
            width: 150px;
        }
    `}</style>
  </div>
  )
}