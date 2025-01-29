import Link from "next/link"
import { FileText, Download } from "lucide-react"

export default function InvestorInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-4">For Investors</h3>
      <p className="text-gray-600 mb-4">
        Bright America Bonds offer a unique opportunity to invest in sustainable infrastructure with attractive returns
        and low risk.
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-600">
        <li>Secure returns backed by guaranteed energy savings</li>
        <li>Alignment with ESG (Environmental, Social, and Governance) goals</li>
        <li>Support for local communities and job creation</li>
      </ul>
      <div className="flex items-center justify-between">
        <Link href="/investor-whitepaper.pdf" className="btn-primary flex items-center">
          <FileText className="mr-2" />
          Download Investor Whitepaper
        </Link>
        <Link href="/contact?type=investor" className="btn-outline">
          Contact Our Team
        </Link>
      </div>
    </div>
  )
}

