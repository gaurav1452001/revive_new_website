"use client"

import { useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const jobTitles: Record<string, string> = {
  "web-and-tech-dev": "Web & Tech Development",
  "web-and-app-dev": "Web & App Development",
  "research-and-data-analysis": "Research & Data Analysis",
  "industry-and-partnership": "Industry & Partnership Relations",
  "field-operations-and-community": "Field Operations & Community Liaison",
  "marketing-and-outreach": "Marketing & Outreach",
  "finance-accounts-compliance": "Finance, Accounts & Compliance",
}

export default function JobApplicationPage() {
  const router = useRouter()
  const params = useParams()
  const jobId = params.job as string
  const jobTitle = jobTitles[jobId] || "Job Position"

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    internshipRole: jobTitle,
    firstName: "",
    middleName: "",
    lastName: "",
    gmail: "",
    phone: "",
    age: "",
    gender: "",
    branch: "",
    specialization: "",
    yearOfPassout: "",
    cgpa: "",
    resumeLink: "",
    skills: "",
    experience: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }))
  }

  const validateForm = (): boolean => {
    const required = [
      "firstName",
      "lastName",
      "gmail",
      "phone",
      "age",
      "gender",
      "branch",
      "specialization",
      "yearOfPassout",
      "cgpa",
      "resumeLink",
      "skills",
    ]

    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        alert("Please fill in all required fields.")
        return false
      }
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number.")
      return false
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.gmail)) {
      alert("Please enter a valid email address.")
      return false
    }

    try {
      new URL(formData.resumeLink)
    } catch {
      alert("Please enter a valid resume link (Google Drive, etc.)")
      return false
    }

    const cgpa = parseFloat(formData.cgpa)
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      alert("Please enter a valid CGPA between 0 and 10.")
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)

    try {
      const googleFormUrl =
        "https://docs.google.com/forms/d/1pDWRloTQdvqWL_hosodJ8jgjMG3NcYB45szpLgRZRpk/formResponse"

      const data = new FormData()
      data.append("entry.185995148", formData.internshipRole)
      data.append("entry.1976379169", formData.firstName)
      data.append("entry.1446141700", formData.middleName)
      data.append("entry.105003036", formData.lastName)
      data.append("entry.1171044965", formData.gmail)
      data.append("entry.1245455025", formData.phone)
      data.append("entry.521314214", formData.age)
      data.append("entry.699925624", formData.gender)
      data.append("entry.2086306843", formData.branch)
      data.append("entry.2056836486", formData.specialization)
      data.append("entry.1462993528", formData.yearOfPassout)
      data.append("entry.725944090", formData.cgpa)
      data.append("entry.1721496479", formData.resumeLink)
      data.append("entry.2109491984", formData.skills)
      data.append("entry.1467922557", formData.experience)

      await fetch(googleFormUrl, { method: "POST", body: data, mode: "no-cors" })
      router.push("/careers/thank-you")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error submitting form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-3xl px-6">
        {/* HEADER */}
        <div className="mb-8">
          <div className="mb-6">
            <Link href="https://www.revives.in/" target="_blank">
              <Image
                src="/images/img-logo2.webp"
                alt="Revive Logo"
                width={120}
                height={49}
                className="h-auto w-[120px]"
              />
            </Link>
          </div>

          <button
            onClick={() => router.back()}
            className="mb-6 text-sm flex items-center gap-2 font-medium text-[#386641] hover:text-[#253612] transition cursor-pointer"
          >
            <span>←</span> Back to Careers
          </button>

          <div>
            <h1 className="text-4xl font-bold text-[#386641] mb-3">
              Apply for {jobTitle}
            </h1>
            <p className="text-gray-600 text-lg">
              Join us in building a sustainable future
            </p>
          </div>
        </div>

        {/* FORM */}
        <Card className="border border-gray-300 bg-white p-8 shadow-md rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#386641] mb-6">
                Personal Information
              </h2>

              <div className="space-y-4">
                {/* Internship Role (Auto-filled) */}
                <Input
                  name="internshipRole"
                  value={formData.internshipRole}
                  readOnly
                  className="bg-[#f9fafb] border border-gray-400 text-gray-800 rounded-md cursor-not-allowed"
                />

                {/* Name Fields */}
                <div className="grid gap-4 md:grid-cols-3">
                  <Input
                    name="firstName"
                    placeholder="First Name *"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                  <Input
                    name="middleName"
                    placeholder="Middle Name"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name *"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                </div>

                <Input
                  name="gmail"
                  placeholder="Primary Gmail Account *"
                  value={formData.gmail}
                  onChange={handleInputChange}
                  className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                />
                <Input
                  name="phone"
                  placeholder="Mobile Number *"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    name="age"
                    placeholder="Age *"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                  <Select value={formData.gender} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-[#f9fafb] border border-gray-400 text-gray-800 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition">
                      <SelectValue placeholder="Gender *" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-300 text-gray-800 shadow-lg rounded-md">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    name="branch"
                    placeholder="Branch *"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                  <Input
                    name="specialization"
                    placeholder="Specialization *"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Input
                    name="yearOfPassout"
                    placeholder="Year of Passout *"
                    value={formData.yearOfPassout}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                  <Input
                    name="cgpa"
                    placeholder="CGPA *"
                    value={formData.cgpa}
                    onChange={handleInputChange}
                    className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                  />
                </div>

                <Input
                  name="resumeLink"
                  placeholder="Resume Link (Google Drive) *"
                  value={formData.resumeLink}
                  onChange={handleInputChange}
                  className="bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                />

                <textarea
                  name="skills"
                  placeholder="Skills *"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="min-h-24 w-full bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md p-2 focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                />
                <textarea
                  name="experience"
                  placeholder="Experience (Links)"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="min-h-24 w-full bg-[#f9fafb] border border-gray-400 text-gray-800 placeholder:text-gray-500 rounded-md p-2 focus:border-[#386641] focus:ring-2 focus:ring-[#386641]/30 outline-none transition"
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                className="flex-1 border-[#386641] text-[#386641] hover:bg-[#386641] hover:text-white transition cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#386641] text-white hover:bg-[#364f1b] transition cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </Card>

        {/* FOOTER */}
        <footer className="mt-12">
          <div className="bg-[#386641] rounded-xl px-8 py-6 text-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} Revive Ecotech Ltd
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
