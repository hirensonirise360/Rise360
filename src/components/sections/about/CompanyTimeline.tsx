"use client";
import { motion } from "framer-motion";

const events = [
  { year: "2009", title: "Founded", desc: "RISE360 was established with a vision to democratize cross-border financial expertise for growth-stage businesses." },
  { year: "2012", title: "First International Expansion", desc: "Expanded advisory services to Canadian and US markets, helping clients navigate North American compliance requirements." },
  { year: "2015", title: "APAC & Middle East Presence", desc: "Established operational presence in Dubai and Sydney, extending our advisory reach across Asia-Pacific and MENA." },
  { year: "2018", title: "50 Clients Milestone", desc: "Reached the 50-client milestone across 4 continents, with a growing reputation in FinTech and Real Estate sectors." },
  { year: "2021", title: "Financial Operations Practice", desc: "Launched dedicated Financial Operations Outsourcing practice, enabling full back-office managed services." },
  { year: "2024", title: "100+ Clients Globally", desc: "Surpassed 100 active clients across 6 continents, with 94% client retention and a 45-person specialist team." },
];

export function CompanyTimeline() {
  return (
    <section className="section-padding bg-[#f8faff]" aria-labelledby="timeline-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2 id="timeline-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl font-bold text-[#012269]">
            Our journey
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-gray-500 mt-3">
            From a focused advisory boutique to a global consulting partner.
          </motion.p>
        </div>
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#4DA6FF]/40 via-[#012269]/20 to-transparent -translate-x-1/2" />

          <div className="space-y-8">
            {events.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col md:flex-row gap-6 items-start md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-[#4DA6FF] font-bold text-sm mb-1">{year}</p>
                    <h3 className="font-display text-xl font-bold text-[#012269] mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-[#012269] border-4 border-white shadow-lg items-center justify-center flex-shrink-0 z-10">
                  <div className="w-2 h-2 rounded-full bg-[#4DA6FF]" />
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
