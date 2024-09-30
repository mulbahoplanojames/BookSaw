import { Link } from "react-scroll";

import { SolutionsData, CompanyData, SupportData } from "@/Data/Data";

const Footer = () => {
  return (
    <>
      <footer className="bg-p1 text-slate-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                    About Us
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {SolutionsData.map((item) => (
                      <li key={item}>
                        <Link
                          to="#"
                          className="text-base text-slate-900 hover:text-slate-400"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                    My account
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {SupportData.map((item) => (
                      <li key={item}>
                        <Link
                          to="#"
                          className="text-base text-slate-900 hover:text-slate-400"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {CompanyData.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={""}
                          className="text-base text-slate-900 hover:text-slate-400"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
