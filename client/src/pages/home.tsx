import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shield, Users, Search, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-64 bg-cover bg-center bg-no-repeat animate-backgroundSlide before:absolute before:inset-0 before:bg-black/30"
        style={{
          backgroundImage: `url('/src/assets/security1.jpg'), url('/src/assets/security2.jpg'), url('/src/assets/security3.jpg')`,
        }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional Security Solutions for Total Peace of Mind
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              We are not looking to be the largest, but rather the best!
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary">Get Started</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="secondary">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive security solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Armed & Unarmed Guarding</CardTitle>
                <CardDescription>
                  Professional security personnel for retail, domestic, commercial, and industrial facilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Shopping Malls</li>
                  <li>Residential Properties</li>
                  <li>Hospitals</li>
                  <li>Hotels & Lodges</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>VIP Protection</CardTitle>
                <CardDescription>
                  Professional protection services and bouncers for events and personal security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Event Security</li>
                  <li>Personal Protection</li>
                  <li>Executive Security</li>
                  <li>Venue Security</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Investigations</CardTitle>
                <CardDescription>
                  Professional investigation services for businesses and individuals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Forensic Investigations</li>
                  <li>Stock Loss Investigations</li>
                  <li>Fraud & Corruption</li>
                  <li>Business Intelligence</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure What Matters Most?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a consultation and learn how we can help protect your assets,
            people, and peace of mind.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">Contact Us Now</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}