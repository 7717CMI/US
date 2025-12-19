'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  sNo: number
  // Customer Information
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  programMaturityStatus: string
  geographicFootprint: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (for Proposition 2)
  primaryMotivationForISA: string
  upcomingTriggersInitiatives: string
  riskLevelFromNotOfferingISA: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  budgetOwnership: string
  procurementModel: string
  budgetApproachTier: string
  preferredEngagementType: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType: string
  serviceExpectations: string
  integrationRequirements: string
  // CMI Insights (for Proposition 3)
  successMetricsKPIs: string
  customerBenchmarkingSummary: string
  additionalComments: string
}

// Sample data for demonstration
const sampleCustomerData: CustomerData[] = [
  {
    sNo: 1,
    // Customer Information
    customerName: 'General Assembly',
    businessOverview: 'Education provider, Workforce training provider',
    industryVertical: 'Education Finance / Workforce development',
    totalAnnualRevenue: '150',
    programMaturityStatus: 'Live (single program)',
    geographicFootprint: 'National / Multi-state',
    // Contact Details
    keyContactPerson: 'Sarah Johnson',
    designation: 'VP of Finance',
    emailAddress: 's.johnson@generalassemb.ly',
    phoneNumber: '+1 212 555 0100',
    linkedInProfile: 'linkedin.com/in/sarahjohnson',
    websiteUrl: 'www.generalassemb.ly',
    // Professional Drivers
    primaryMotivationForISA: 'Increase enrollment access, Reduce upfront cost barrier',
    upcomingTriggersInitiatives: 'New program launch / new campus / new cohorts',
    riskLevelFromNotOfferingISA: 'High',
    // Purchasing Behaviour Metrics
    budgetOwnership: 'Provider finance / Program P&L',
    procurementModel: 'Direct vendor contract',
    budgetApproachTier: 'Institution-wide',
    preferredEngagementType: 'Managed program (end-to-end)',
    // Solution Requirements
    preferredSolutionType: 'ISA program design & disclosures, Funding capital / ISA fund setup',
    serviceExpectations: 'Legal templates & compliance pack, Learner counseling & disclosures',
    integrationRequirements: 'SIS (Banner/PeopleSoft), CRM (Salesforce)',
    // CMI Insights
    successMetricsKPIs: 'Enrollment lift, placement %, median wage',
    customerBenchmarkingSummary: 'High potential - Strong enrollment growth',
    additionalComments: 'Looking to expand ISA to all bootcamp programs'
  },
  {
    sNo: 2,
    // Customer Information
    customerName: 'Lambda School',
    businessOverview: 'Education provider, ISA platform',
    industryVertical: 'EdTech / Education Finance',
    totalAnnualRevenue: '75',
    programMaturityStatus: 'Multi-program rollout',
    geographicFootprint: 'National / Multi-state',
    // Contact Details
    keyContactPerson: 'Michael Chen',
    designation: 'Director of Student Finance',
    emailAddress: 'm.chen@lambdaschool.com',
    phoneNumber: '+1 415 555 0200',
    linkedInProfile: 'linkedin.com/in/michaelchen',
    websiteUrl: 'www.lambdaschool.com',
    // Professional Drivers
    primaryMotivationForISA: 'Improve placement outcomes alignment, Differentiate program offering',
    upcomingTriggersInitiatives: 'Employer partnership expansion, Policy changes / compliance updates',
    riskLevelFromNotOfferingISA: 'Medium',
    // Purchasing Behaviour Metrics
    budgetOwnership: 'Provider finance / Program P&L',
    procurementModel: 'Master services agreement',
    budgetApproachTier: 'Multi-institution',
    preferredEngagementType: 'Advisory + design (ISA structuring)',
    // Solution Requirements
    preferredSolutionType: 'Income verification & repayment collection, Servicing + underwriting pricing model',
    serviceExpectations: 'Underwriting + cohort pricing, Servicing, collections, hardship support',
    integrationRequirements: 'LMS (Canvas), payment rails, payroll/income verification partners',
    // CMI Insights
    successMetricsKPIs: 'Repayment rate, cohort IRR, learner NPS',
    customerBenchmarkingSummary: 'High potential - ISA pioneer',
    additionalComments: 'Needs compliance support for new state regulations'
  },
  {
    sNo: 3,
    // Customer Information
    customerName: 'Workforce Development Agency - Texas',
    businessOverview: 'Workforce development agency, Employer sponsor',
    industryVertical: 'Public sector / Workforce development',
    totalAnnualRevenue: '500',
    programMaturityStatus: 'Evaluating',
    geographicFootprint: 'Single state',
    // Contact Details
    keyContactPerson: 'Robert Martinez',
    designation: 'Program Director',
    emailAddress: 'r.martinez@twc.texas.gov',
    phoneNumber: '+1 512 555 0300',
    linkedInProfile: 'linkedin.com/in/robertmartinez',
    websiteUrl: 'www.twc.texas.gov',
    // Professional Drivers
    primaryMotivationForISA: 'Support DEI / access goals, Expand into new learner segments',
    upcomingTriggersInitiatives: 'State workforce grant cycle, Outcomes reporting requirements tightening',
    riskLevelFromNotOfferingISA: 'Low',
    // Purchasing Behaviour Metrics
    budgetOwnership: 'State agency',
    procurementModel: 'RFP',
    budgetApproachTier: 'Statewide program',
    preferredEngagementType: 'Multi-year framework',
    // Solution Requirements
    preferredSolutionType: 'Outcome reporting dashboard, Integrations (SIS/LMS/CRM/HRIS)',
    serviceExpectations: 'Reporting (cohort performance, repayment, outcomes), Audit trails + regulator-ready documentation',
    integrationRequirements: 'SIS (Banner/PeopleSoft), CRM (Salesforce), LMS (Canvas)',
    // CMI Insights
    successMetricsKPIs: 'Enrollment lift, placement %, complaint rate',
    customerBenchmarkingSummary: 'Medium potential - Government procurement timeline',
    additionalComments: 'RFP expected Q2 2025'
  },
  {
    sNo: 4,
    // Customer Information
    customerName: 'Purdue University Global',
    businessOverview: 'Education provider',
    industryVertical: 'Education Finance / Impact investing',
    totalAnnualRevenue: '800',
    programMaturityStatus: 'Scaled',
    geographicFootprint: 'National / Multi-state',
    // Contact Details
    keyContactPerson: 'Jennifer Williams',
    designation: 'CFO',
    emailAddress: 'j.williams@purdueglobal.edu',
    phoneNumber: '+1 765 555 0400',
    linkedInProfile: 'linkedin.com/in/jenniferwilliams',
    websiteUrl: 'www.purdueglobal.edu',
    // Professional Drivers
    primaryMotivationForISA: 'Reduce default risk vs loans, Employer talent pipeline creation',
    upcomingTriggersInitiatives: 'New program launch / new campus / new cohorts, Declining enrollments / affordability pressure',
    riskLevelFromNotOfferingISA: 'High',
    // Purchasing Behaviour Metrics
    budgetOwnership: 'Foundation funds / Board',
    procurementModel: 'Pilot-to-scale',
    budgetApproachTier: 'Institution-wide',
    preferredEngagementType: 'Managed program (end-to-end)',
    // Solution Requirements
    preferredSolutionType: 'Funding capital / ISA fund setup, Income verification & repayment collection',
    serviceExpectations: 'Learner counseling & disclosures, Servicing, collections, hardship support',
    integrationRequirements: 'SIS (Banner/PeopleSoft), payment rails',
    // CMI Insights
    successMetricsKPIs: 'Median wage, repayment rate, learner NPS',
    customerBenchmarkingSummary: 'High potential - Back to Boiler pioneer',
    additionalComments: 'Looking to expand ISA beyond current programs'
  },
  {
    sNo: 5,
    // Customer Information
    customerName: 'Make School',
    businessOverview: 'Education provider, Workforce training provider',
    industryVertical: 'EdTech / Education Finance',
    totalAnnualRevenue: '25',
    programMaturityStatus: 'Pilot',
    geographicFootprint: 'Metro/county',
    // Contact Details
    keyContactPerson: 'David Park',
    designation: 'Head of Operations',
    emailAddress: 'd.park@makeschool.com',
    phoneNumber: '+1 415 555 0500',
    linkedInProfile: 'linkedin.com/in/davidpark',
    websiteUrl: 'www.makeschool.com',
    // Professional Drivers
    primaryMotivationForISA: 'Increase enrollment access, Differentiate program offering',
    upcomingTriggersInitiatives: 'New program launch / new campus / new cohorts',
    riskLevelFromNotOfferingISA: 'Medium',
    // Purchasing Behaviour Metrics
    budgetOwnership: 'Provider finance / Program P&L',
    procurementModel: 'Direct vendor contract',
    budgetApproachTier: 'Pilot cohort',
    preferredEngagementType: 'Servicing-only / verification-only',
    // Solution Requirements
    preferredSolutionType: 'ISA program design & disclosures',
    serviceExpectations: 'Legal templates & compliance pack',
    integrationRequirements: 'LMS (Canvas)',
    // CMI Insights
    successMetricsKPIs: 'Enrollment lift, placement %',
    customerBenchmarkingSummary: 'Medium potential - Early stage',
    additionalComments: 'Pilot program starting next semester'
  },
  {
    sNo: 6,
    // Customer Information
    customerName: 'Colorado Mountain College',
    businessOverview: 'Education provider, Workforce development agency',
    industryVertical: 'Education Finance / Employer L&D',
    totalAnnualRevenue: '120',
    programMaturityStatus: 'No ISA',
    geographicFootprint: 'Single state',
    // Contact Details
    keyContactPerson: 'Amanda Torres',
    designation: 'VP of Academic Affairs',
    emailAddress: 'a.torres@coloradomtn.edu',
    phoneNumber: '+1 719 555 0600',
    linkedInProfile: 'linkedin.com/in/amandatorres',
    websiteUrl: 'www.coloradomtn.edu',
    // Professional Drivers
    primaryMotivationForISA: 'Support DEI / access goals, Reduce upfront cost barrier',
    upcomingTriggersInitiatives: 'State workforce grant cycle, Employer partnership expansion',
    riskLevelFromNotOfferingISA: 'Low',
    // Purchasing Behaviour Metrics
    budgetOwnership: 'Employer L&D',
    procurementModel: 'Grant-funded procurement',
    budgetApproachTier: 'Program-level',
    preferredEngagementType: 'Advisory + design (ISA structuring)',
    // Solution Requirements
    preferredSolutionType: 'ISA program design & disclosures, Outcome reporting dashboard',
    serviceExpectations: 'Reporting (cohort performance, repayment, outcomes), Audit trails + regulator-ready documentation',
    integrationRequirements: 'SIS (Banner/PeopleSoft), CRM (Salesforce)',
    // CMI Insights
    successMetricsKPIs: 'Enrollment lift, complaint rate',
    customerBenchmarkingSummary: 'Low potential - Early exploration',
    additionalComments: 'Interested in ISA for workforce programs only'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title, height = 600 }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Preposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information Headers */}
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Role: Education provider, Workforce training provider, Workforce development agency, Employer sponsor, ISA platform)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Education Finance / Workforce development / EdTech / Public sector / Employer L&D / Impact investing)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Program Maturity / Adoption Status</div>
              <div className="font-normal text-[10px] text-gray-600">(No ISA / Evaluating / Pilot / Live (single program) / Multi-program rollout / Scaled)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Geographic Footprint</div>
              <div className="font-normal text-[10px] text-gray-600">(National / Multi-state / Single state / Metro/county)</div>
            </th>
            {/* Contact Details Headers */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.programMaturityStatus === 'Scaled' ? 'bg-green-100 text-green-800' :
                  customer.programMaturityStatus === 'Multi-program rollout' ? 'bg-blue-100 text-blue-800' :
                  customer.programMaturityStatus === 'Live (single program)' ? 'bg-teal-100 text-teal-800' :
                  customer.programMaturityStatus === 'Pilot' ? 'bg-purple-100 text-purple-800' :
                  customer.programMaturityStatus === 'Evaluating' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.programMaturityStatus}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.geographicFootprint}</td>
              {/* Contact Details Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 2 Table - Same as Preposition 1 + Professional Drivers
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#4169E1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information Headers */}
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Role: Education provider, Workforce training provider, Workforce development agency, Employer sponsor, ISA platform)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Education Finance / Workforce development / EdTech / Public sector / Employer L&D / Impact investing)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Program Maturity / Adoption Status</div>
              <div className="font-normal text-[10px] text-gray-600">(No ISA / Evaluating / Pilot / Live (single program) / Multi-program rollout / Scaled)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Geographic Footprint</div>
              <div className="font-normal text-[10px] text-gray-600">(National / Multi-state / Single state / Metro/county)</div>
            </th>
            {/* Contact Details Headers */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Professional Drivers Headers */}
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Primary Motivation for ISA</div>
              <div className="font-normal text-[10px] text-gray-600">(Increase enrollment access / Reduce upfront cost barrier / Improve placement outcomes alignment / Differentiate program offering / Reduce default risk vs loans / Expand into new learner segments / Support DEI / access goals / Employer talent pipeline creation)</div>
            </th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Upcoming Triggers / Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(New program launch / new campus / new cohorts / State workforce grant cycle / Employer partnership expansion / Policy changes / compliance updates / Declining enrollments / affordability pressure / Outcomes reporting requirements tightening)</div>
            </th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Risk Level from Not Offering ISA</div>
              <div className="font-normal text-[10px] text-gray-600">(Low / Medium / High (enrollment drop, competitive loss, grant loss, reputational risk))</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.programMaturityStatus === 'Scaled' ? 'bg-green-100 text-green-800' :
                  customer.programMaturityStatus === 'Multi-program rollout' ? 'bg-blue-100 text-blue-800' :
                  customer.programMaturityStatus === 'Live (single program)' ? 'bg-teal-100 text-teal-800' :
                  customer.programMaturityStatus === 'Pilot' ? 'bg-purple-100 text-purple-800' :
                  customer.programMaturityStatus === 'Evaluating' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.programMaturityStatus}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.geographicFootprint}</td>
              {/* Contact Details Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Professional Drivers Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryMotivationForISA}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggersInitiatives}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.riskLevelFromNotOfferingISA === 'High' ? 'bg-red-100 text-red-800' :
                  customer.riskLevelFromNotOfferingISA === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {customer.riskLevelFromNotOfferingISA}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 3 Table - Customer Information + Contact Details + Professional Drivers + Purchasing Behaviour Metrics + Solution Requirements + CMI Insights
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#DEB887] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#4169E1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Professional Drivers
            </th>
            <th colSpan={4} className="bg-[#D2691E] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={4} className="bg-[#FF8C00] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-white">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information Headers */}
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Business Overview</div>
              <div className="font-normal text-[10px] text-gray-600">(Role: Education provider, Workforce training provider, Workforce development agency, Employer sponsor, ISA platform)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Industry Vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(Education Finance / Workforce development / EdTech / Public sector / Employer L&D / Impact investing)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Program Maturity / Adoption Status</div>
              <div className="font-normal text-[10px] text-gray-600">(No ISA / Evaluating / Pilot / Live (single program) / Multi-program rollout / Scaled)</div>
            </th>
            <th className="bg-[#FFEFD5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Geographic Footprint</div>
              <div className="font-normal text-[10px] text-gray-600">(National / Multi-state / Single state / Metro/county)</div>
            </th>
            {/* Contact Details Headers */}
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Professional Drivers Headers */}
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Primary Motivation for ISA</div>
              <div className="font-normal text-[10px] text-gray-600">(Increase enrollment access / Reduce upfront cost barrier / Improve placement outcomes alignment / Differentiate program offering / Reduce default risk vs loans / Expand into new learner segments / Support DEI / access goals / Employer talent pipeline creation)</div>
            </th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Upcoming Triggers / Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">(New program launch / new campus / new cohorts / State workforce grant cycle / Employer partnership expansion / Policy changes / compliance updates / Declining enrollments / affordability pressure / Outcomes reporting requirements tightening)</div>
            </th>
            <th className="bg-[#6495ED] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Risk Level from Not Offering ISA</div>
              <div className="font-normal text-[10px] text-gray-600">(Low / Medium / High (enrollment drop, competitive loss, grant loss, reputational risk))</div>
            </th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(Provider finance / Program P&L / Foundation funds / State agency / Employer L&D / Board)</div>
            </th>
            <th className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Direct vendor contract / RFP / Master services agreement / Pilot-to-scale / Grant-funded procurement)</div>
            </th>
            <th className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Budget Approach / Tier</div>
              <div className="font-normal text-[10px] text-gray-600">(Pilot cohort / Program-level / Institution-wide / Multi-institution / Statewide program)</div>
            </th>
            <th className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Advisory + design (ISA structuring) / Managed program (end-to-end) / Servicing-only / verification-only / Multi-year framework)</div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(ISA program design & disclosures / Funding capital / ISA fund setup / Income verification & repayment collection / Servicing + underwriting pricing model / Outcome reporting dashboard / Integrations (SIS/LMS/CRM/HRIS))</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Service Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">(Legal templates & compliance pack / Learner counseling & disclosures / Underwriting + cohort pricing / Servicing, collections, hardship support / Reporting (cohort performance, repayment, outcomes) / Audit trails + regulator-ready documentation)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Integration Requirements</div>
              <div className="font-normal text-[10px] text-gray-600">(SIS (Banner/PeopleSoft), CRM (Salesforce), LMS (Canvas), payment rails, payroll/income verification partners)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Success Metrics / KPIs</div>
              <div className="font-normal text-[10px] text-gray-600">(Enrollment lift, placement %, median wage, repayment rate, cohort IRR, learner NPS, complaint rate)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Additional Comments/Notes By CMI team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={customer.sNo} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.programMaturityStatus === 'Scaled' ? 'bg-green-100 text-green-800' :
                  customer.programMaturityStatus === 'Multi-program rollout' ? 'bg-blue-100 text-blue-800' :
                  customer.programMaturityStatus === 'Live (single program)' ? 'bg-teal-100 text-teal-800' :
                  customer.programMaturityStatus === 'Pilot' ? 'bg-purple-100 text-purple-800' :
                  customer.programMaturityStatus === 'Evaluating' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {customer.programMaturityStatus}
                </span>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.geographicFootprint}</td>
              {/* Contact Details Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Professional Drivers Data */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryMotivationForISA}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggersInitiatives}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  customer.riskLevelFromNotOfferingISA === 'High' ? 'bg-red-100 text-red-800' :
                  customer.riskLevelFromNotOfferingISA === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {customer.riskLevelFromNotOfferingISA}
                </span>
              </td>
              {/* Purchasing Behaviour Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetApproachTier}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEngagementType}</td>
              {/* Solution Requirements */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.serviceExpectations}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.integrationRequirements}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.successMetricsKPIs}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarkingSummary}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Preposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Preposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Preposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
