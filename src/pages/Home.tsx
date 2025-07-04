import React from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { ArrowRight, FileText, Search, Shield, Upload } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <FileText className="h-6 w-6" />
            <span>CuraMate</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </a>
            <a href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Understand Your Endocrine Health with AI-Powered Analysis
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Upload your medical reports and get instant insights about potential endocrine disorders. 
                  CuraMate helps you understand your health data with advanced AI analysis.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/register">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="http://localhost:3000/">
                    <Button size="lg" variant="outline">
                      Chatbot <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <img
                  src="/img.jpg"
                  alt="Medical report analysis dashboard"
                  className="rounded-lg object-cover shadow-lg"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How CuraMate Helps You
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform provides comprehensive analysis of your endocrine health reports with advanced AI technology.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Easy Upload</h3>
                <p className="text-center text-muted-foreground">
                  Securely upload your medical reports in various formats including PDF, images, and lab data.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Analysis</h3>
                <p className="text-center text-muted-foreground">
                  Our advanced AI analyzes your reports to identify potential endocrine disorders and health concerns.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Privacy First</h3>
                <p className="text-center text-muted-foreground">
                  Your health data is encrypted and secure. We prioritize your privacy with HIPAA-compliant systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Process</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get insights about your endocrine health in three simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Create an Account</h3>
                <p className="text-center text-muted-foreground">
                  Sign up for a free account to get started with CuraMate's endocrine health analysis.
                </p>
                {/* Line connector (hidden on mobile) */}
                <div className="absolute right-0 top-12 hidden h-0.5 w-1/2 bg-gray-300 lg:block"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Upload Your Reports</h3>
                <p className="text-center text-muted-foreground">
                  Upload your medical reports related to endocrine health, including lab tests and doctor's notes.
                </p>
                {/* Line connectors (hidden on mobile) */}
                <div className="absolute left-0 top-12 hidden h-0.5 w-1/2 bg-gray-300 lg:block"></div>
                <div className="absolute right-0 top-12 hidden h-0.5 w-1/2 bg-gray-300 lg:block"></div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Get Insights</h3>
                <p className="text-center text-muted-foreground">
                  Receive a detailed analysis of your reports with potential health concerns and recommendations.
                </p>
                {/* Line connector (hidden on mobile) */}
                <div className="absolute left-0 top-12 hidden h-0.5 w-1/2 bg-gray-300 lg:block"></div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link to="/register">
                <Button size="lg">Start Your Health Journey</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about CuraMate.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Is my medical data secure?</h3>
                <p className="text-muted-foreground">
                  Yes, we use industry-standard encryption and follow HIPAA guidelines to ensure your medical data is secure and private.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What types of endocrine disorders can CuraMate detect?</h3>
                <p className="text-muted-foreground">
                  Our AI can analyze reports for various endocrine disorders including thyroid conditions, diabetes, adrenal disorders, and more.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Can CuraMate replace my doctor?</h3>
                <p className="text-muted-foreground">
                  No, CuraMate is designed to provide insights and information, not to replace professional medical advice. Always consult with healthcare professionals.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">What file formats are supported?</h3>
                <p className="text-muted-foreground">
                  We support PDF, JPG, PNG, and text files. You can also manually enter lab values if you don't have digital copies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Take Control of Your Endocrine Health Today
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who have gained valuable insights about their endocrine health with CuraMate.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/register">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Create Free Account <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-12">
            <div className="flex flex-col gap-3 lg:max-w-sm">
              <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                <FileText className="h-6 w-6" />
                <span>CuraMate</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                CuraMate provides AI-powered analysis of endocrine health reports to help you understand your medical data.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:flex-1">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">About</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">Careers</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Help</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">Documentation</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">Support</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">Terms</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">Privacy</Link>
                  </li>
                  <li>
                    <Link to="#" className="text-muted-foreground hover:text-foreground">Cookies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:gap-12">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} CuraMate. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}