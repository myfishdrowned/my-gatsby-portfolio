import * as React from "react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "IAM Engineer",
    company: "Fiserv",
    type: "Full-time",
    date: "Jan 2024 - Present · 1 yr 7 mos",
    location: "Berkeley Heights, NJ · Hybrid",
    platforms: "SailPoint, IdentityNOW, Okta, Secret Server, ServiceNOW, Varonis, AWS, UiPath (RPA), JIRA, Confluence, etc.",
    devSkills: "Java, C#, PS Script, VBA Script, Shell scripting, SQL, etc.",
    responsibilities: [
      "Gathered requirements from the application team and performed design analysis to integrate IdentityIQ. Lead App onboarding meetings with business owners to integrate new applications into SailPoint for governance and provisioning access.",
      "Developed custom workflows with approvals and modified OOTB workflows as per client requirements.",
      "Involved in various patch upgrades including version upgrades.",
      "Involved in designing, requirement gathering, talking to the business team, development and deployment of SailPoint IIQ",
      "Responsible for Developing and applying storage strategies and disaster-recovery plan for a large operational database that guaranteed recovery performance and high availability",
      "Developed rules in Beanshell – Application rules, identity trigger rules, aggregation rules, connector rules, certification rules, and policy rules."
    ],
    skills: "SailPoint, IdentityNOW and +3 skills"
  },
  {
    title: "SailPoint Developer",
    company: "The Home Depot",
    type: "Contract",
    date: "Nov 2022 - Dec 2023 · 1 yr 2 mos",
    location: "Atlanta, Georgia, United States · Hybrid",
    responsibilities: [
      "Led the design, implementation, and development of SailPoint IdentityIQ, serving as the IAM/IDM technical expert for the Operations team.",
      "Implemented Access Certification, automated provisioning workflows, and governance controls in IIQ.",
      "Built and optimized Lifecycle Manager workflows, lifecycle and certification events, custom email templates, and task definitions.",
      "Integrated key connectors (Active Directory, PeopleSoft, Salesforce, ServiceNow) and enhanced AD attribute management.",
      "Automated cloud-application account creation and updates, maximizing self-service and password-management features in SailPoint."
    ]
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } })
}

const ExperiencePage = () => (
  <motion.main
    className="min-h-screen bg-gray-900 text-white py-12 px-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
  >
    <motion.h1
      className="text-4xl font-bold mb-10 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Experience
    </motion.h1>
    <div className="max-w-3xl mx-auto flex flex-col gap-8">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="bg-gray-800 rounded-xl shadow-lg p-8"
          custom={idx}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <div>
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <div className="text-indigo-400 font-medium">{exp.company} <span className="text-gray-400 font-normal">· {exp.type}</span></div>
            </div>
            <div className="text-gray-400 text-sm mt-2 md:mt-0 text-right">
              <div>{exp.date}</div>
              <div>{exp.location}</div>
            </div>
          </div>
          {exp.platforms && <div className="mt-2 text-sm text-gray-300"><b>Platforms:</b> {exp.platforms}</div>}
          {exp.devSkills && <div className="text-sm text-gray-300"><b>Dev Skills:</b> {exp.devSkills}</div>}
          <div className="mt-2">
            <b>Responsibilities:</b>
            <ul className="list-disc list-inside ml-4 mt-1 text-gray-200">
              {exp.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
          {exp.skills && <div className="mt-2 text-sm text-gray-400">{exp.skills}</div>}
        </motion.div>
      ))}
    </div>
    <div className="text-center mt-12">
      <a href="/" className="text-indigo-400 hover:underline">Back to Home</a>
    </div>
  </motion.main>
)

export default ExperiencePage 