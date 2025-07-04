import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { FileText, ArrowLeft } from 'lucide-react'

export default function Register() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    
    if (!agreeTerms) {
      alert("You must agree to the Terms of Service and Privacy Policy")
      return
    }
    
    setLoading(true)
    
    try {
      const response = await axios.post("http://localhost:8080/signup", {
        fullName,
        email,
        password
      })
      
      if (response.data === "exist") {
        alert("User already exists")
      } else if (response.data === "notexist") {
        
        navigate("/login")
      }
    } catch (error) {
      alert("Wrong details")
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <FileText className="h-6 w-6" />
            <span>CuraMate</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 bg-gray-50">
        <Card className="mx-auto max-w-md w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>
              Enter your information to create a CuraMate account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input 
                  id="full-name" 
                  placeholder="John Doe" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="m.edwards@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input 
                  id="confirm-password" 
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  required
                />
                <Label htmlFor="terms" className="text-sm font-normal leading-tight">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              <span className="text-muted-foreground">Or continue with</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" className="w-full">Google</Button>
              <Button variant="outline" className="w-full">Apple</Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
            <Link to="/" className="mt-4 inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to home
            </Link>
          </CardFooter>
        </Card>
      </main>
      <footer className="border-t py-4 bg-gray-50">
        <div className="container flex justify-between px-4 md:px-6 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CuraMate. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}